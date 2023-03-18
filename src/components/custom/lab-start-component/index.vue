<template>
    <div>
        <div class="flex">
            <div class="start-button cursor-pointer" :class="{'disabled': loader || labStarted}"
                 @click.prevent="startLab">
                <CSpinner v-if="loader"></CSpinner>
                Начать работу
            </div>
            <div class="start-timer" :class="timerClass"><span
                    :class="{'animate-pulse':labStarted }">  {{getTimer}} мин</span></div>
            <div class="start-icon" :class="{'animate-bounce':labStarted }">
                <svg width="27" height="32" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.5V5.20711C12 4.81658 11.6834 4.5 11.2929 4.5V4.5C11.1054 4.5 10.9255 4.4255 10.7929 4.29289L10.75 4.25C10.5899 4.08993 10.5 3.87282 10.5 3.64645V3.5V2.5V2V1.85355C10.5 1.62718 10.5899 1.41007 10.75 1.25V1.25C10.9101 1.08993 11.1272 1 11.3536 1H11.5H12.5H13.5H14H14.5H15.5H15.6464C15.8728 1 16.0899 1.08993 16.25 1.25V1.25C16.4101 1.41007 16.5 1.62718 16.5 1.85355V2V2.5V3V3.5V3.64645C16.5 3.87282 16.4101 4.08993 16.25 4.25L16.2071 4.29289C16.0745 4.4255 15.8946 4.5 15.7071 4.5V4.5C15.3166 4.5 15 4.81658 15 5.20711V5.5"
                          stroke="#00356B"/>
                    <ellipse cx="13.5" cy="19" rx="13.5" ry="14" fill="#00356B"/>
                    <ellipse cx="13.5" cy="19" rx="11.5" ry="11" fill="white"/>
                    <path d="M22.0624 22.8987C21.3282 24.3458 20.1987 25.5806 18.7911 26.4749C17.3834 27.3692 15.7489 27.8904 14.057 27.9845C12.365 28.0787 10.6773 27.7423 9.16884 27.0102C7.66038 26.2782 6.3861 25.1772 5.47816 23.8214C4.57022 22.4655 4.06167 20.9043 4.00526 19.2995C3.94886 17.6948 4.34664 16.1049 5.15736 14.6949C5.96809 13.2849 7.16223 12.106 8.61594 11.2805C10.0697 10.455 11.73 10.013 13.4248 10.0003L13.5 19L22.0624 22.8987Z"
                          fill="#00356B"/>
                </svg>
            </div>
        </div>
        <p class="ml-[60px]">
            Номер попытки: 0
        </p>
    </div>

</template>
<script>
    import LabaratoryService from "@/services/labaratory.service";
    import CSpinner from "@/components/custom/C-Spinner.vue";
    import {useCurrentActiveLab} from "@/stores/currentActiveLab";
    import {computed} from "vue";

    export default {
        name: "LabStartComponent",
        components: {CSpinner},
        data() {
            return {
                second: 40 * 60,
                currentTimer: null,
                loader: false,
                labStarted: false,
            }
        },
        props: {
            labName: {
                type: String
            },
            labSubmited: {
                type: Boolean,
                default: false
            }
        },
        setup() {

            const currentActiveLab = useCurrentActiveLab();
            let labSubmitted = computed(() => currentActiveLab.labSubmitted);
            return {labSubmitted}
        },
        computed: {
            getTimer() {
                return Math.floor(this.second / 60);

            },
            timerClass() {
                if (this.getTimer <= 2) {
                    return 'btm-danger';
                } else if (this.getTimer <= 15) {
                    return 'btm-warning';
                } else {
                    return 'btm-default';
                }
            }
        },
        methods: {
            async getCurrentTimer() {
                try {
                    let response = await LabaratoryService.getTimer(this.labName);
                    console.log(response)
                } catch (e) {

                }
            },
            async startLab() {
                this.loader = true;
                try {
                    let response = await LabaratoryService.start(this.labName);
                    if (300 > response.status && response.status >= 200) {
                        this.$myMakeToast(this.$t("actions.good_luck"),
                            "",
                            "success"
                        );
                        this.$store.commit("currentActiveLab/activeLab", this.labName);
                        this.startTimer();
                    }
                } catch (e) {

                } finally {
                    this.loader = false;
                }
            },
            startTimer() {
                this.labStarted = true;
                this.currentTimer = setInterval(() => {
                    this.second--;
                }, 1000);
            },
            clearCurrentInterval() {
                clearInterval(this.currentTimer);
            },
            stopLab() {
                this.labStarted = false;
                this.clearCurrentInterval();
                this.$store.commit("currentActiveLab/stopActiveLab");
                this.$store.commit("currentActiveLab/changeLabSubmit", false);
                this.$store.commit("currentActiveLab/setTimer", 0);
                this.second = 40 * 60;
            }
        },
        async created() {
            // await this.getCurrentTimer();
        },
        watch: {
            getTimer: {
                handler(newValue) {
                    if (newValue === 0 || newValue < 0) {
                        this.stopLab();
                    }
                    this.$store.commit("currentActiveLab/setTimer", newValue);
                }
            },
            labSubmitted: {
                handler(newValue) {
                    if (newValue) {
                        this.stopLab();
                        this.$store.commit("currentActiveLab/setTimer", newValue);
                    }

                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .start-button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 184px;
        height: 40px;
        background: linear-gradient(261.68deg, #2070DD 0%, #3F8AF7 100%);
        border-radius: 5px;
    }

    .start-timer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 115px;
        height: 40px;
        margin-left: 13px;
        border-radius: 5px;

        span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            /* identical to box height */

            text-align: center;
        }
    }

    .start-icon {
        margin-left: 13px;

        svg {
            margin-top: 2px;
        }
    }

    .disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .bell-ring {

        -webkit-animation: ring 2s .7s ease-in-out infinite;
        -webkit-transform-origin: 50% 4px;
        -moz-animation: ring 2s .7s ease-in-out infinite;
        -moz-transform-origin: 50% 4px;
        animation: ring 2s .7s ease-in-out infinite;
        transform-origin: 50% 4px;
    }

    @-webkit-keyframes ring {
        0% {
            -webkit-transform: rotateZ(0);
        }
        20% {
            -webkit-transform: rotateZ(15deg);
        }

        65% {
            -webkit-transform: rotateZ(-15deg);
        }
        100% {
            -webkit-transform: rotateZ(0);
        }
    }
</style>