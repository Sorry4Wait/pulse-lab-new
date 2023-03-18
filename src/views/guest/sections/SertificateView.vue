<template>

    <div class="main"
         :class="{seismic : currentCourse=='seismic', electrical : currentCourse=='electrical', magnetic : currentCourse=='magnetic', gravity : currentCourse=='gravity', seismologic : currentCourse=='seismologic'}">
        <div>
            <div class="pb-11">
                <div>
                    <transition>
                        <component v-bind:is="currentCourse"></component>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import electrical from "@/views/guest/sections/info/electrical/electrical.vue"
    import gravity from "@/views/guest/sections/info/gravity/gravity.vue"
    import magnetic from "@/views/guest/sections/info/magnetic/magnetic.vue"
    import seismic from "@/views/guest/sections/info/seismic/seismic.vue"
    import seismologic from "@/views/guest/sections/info/seismologic/seismologic.vue"
    import {useGuestStore} from "@/stores/guest.js";
    import {ref, computed, defineComponent} from 'vue';

    export default {
        components: {electrical,gravity,magnetic,seismic,seismologic},
        setup() {
            const guestStore = useGuestStore();
            let currentCourse = computed(() => guestStore.currentCourse);
            return {
                currentCourse
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        background: rgba(228, 246, 255, 0.15);
        border: 1px solid #2FA1DB;
        border-radius: 30px;
        margin-top: 50px;
        padding: 58px 55px 82px 55px;
        width: 865px;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ul {
        display: flex;
        align-items: center;
        // width: 100%;
        justify-content: space-between;

        li {
            display: flex;
            padding-right: 10px;
            flex-shrink: 0;

            &:last-child {
                padding-right: 0;
            }

            a {
                position: relative;
                text-decoration: none;
                flex-shrink: 0;
                padding: 10px;

                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;

                color: #00356b;

                &.active {
                    font-weight: 700;

                    &::before {
                        content: "";
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        background: #38628b;
                        top: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        border-radius: 8px;
                    }
                }
            }
        }
    }

    .v-enter-active,
    .v-leave-active {
        transition: transform 0.5s ease;
        position: relative;
        top: 0;
        left: 0;
        transform: scale(1);
        opacity: 1;
    }

    .v-enter-from,
    .v-leave-to {
        position: absolute;
        transform: scale(0.5);
        opacity: 0;
    }

    @media screen and (max-width: 1400px) {
        .main {
            padding: 58px 50px 82px 50px;
        }
    }

    .main.seismic {
        background: rgba(228, 246, 255, 0.15);
    }

    .main.electrical {
        background: rgba(255, 206, 191, 0.15);
    }

    .main.gravity {
        background: rgba(218, 181, 169, 0.15);
    }

    .main.seismologic {
        background: rgba(173, 221, 221, 0.15);
    }

    .main.magnetic {
        background: rgba(192, 192, 255, 0.15);
    }
</style>
