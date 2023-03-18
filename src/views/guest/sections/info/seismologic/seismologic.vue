<template>
    <div>
        <div class="flex ">
            <ul data-aos="fade-left">
                <li><a href="#" @click.prevent="currentTab='seismologicInfo1'"
                       :class="{active : currentTab=='seismologicInfo1'}">
                    {{$t("seismologic.whatLearnName")}}
                </a></li>
                <li><a href="#" @click.prevent="currentTab='seismologicInfo2'"
                       :class="{active : currentTab=='seismologicInfo2'}">
                    {{$t("seismologic.advantagesCourseName")}}
                </a></li>
                <li><a href="#" @click.prevent="currentTab='seismologicInfo3'"
                       :class="{active : currentTab=='seismologicInfo3'}">
                    {{$t("seismologic.fullFunctionalityName")}}
                </a></li>
                <li><a href="#" @click.prevent="currentTab='seismologicInfo4'"
                       :class="{active : currentTab=='seismologicInfo4'}">
                    {{$t("seismologic.courseForName")}}
                </a></li>
            </ul>
        </div>
        <div>
            <transition :name="animateType">
                <component class="mt-[32px]" :is="currentTab"></component>
            </transition>
        </div>
    </div>
</template>

<script>
    import seismologicInfo1 from "@/views/guest/sections/info/seismologic/info-1.vue"
    import seismologicInfo2 from "@/views/guest/sections/info/seismologic/info-2.vue"
    import seismologicInfo3 from "@/views/guest/sections/info/seismologic/info-3.vue"
    import seismologicInfo4 from "@/views/guest/sections/info/seismologic/info-4.vue"

    export default {
        data() {
            return {
                currentTab: "seismologicInfo1",
                animateType: "slide-fade-right"
            }
        },
        components: {
            seismologicInfo1,
            seismologicInfo2,
            seismologicInfo3,
            seismologicInfo4,
        },
        watch: {
            currentTab: {
                immediate: true,
                handler(newValue, oldValue) {
                    if (newValue && oldValue) {
                        let nValue = parseInt(newValue.split("seismologicInfo")[1]);
                        let oValue = parseInt(oldValue.split("seismologicInfo")[1]);
                        if (nValue > oValue) {
                            this.animateType = 'slide-fade-right'
                        } else {
                            this.animateType = 'slide-fade-left'
                        }
                    }

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .slide-fade-right-enter-active {
        transition: all 0.4s ease-out;
    }

    .slide-fade-right-enter-from {
        transform: translateX(100px);
        opacity: 0;
    }

    .slide-fade-left-enter-active {
        transition: all 0.4s ease-out;
    }

    .slide-fade-left-enter-from {
        transform: translateX(-100px);
        opacity: 0;
    }

    ul {
        display: flex;
        align-items: center;
        width: 100%;
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
</style>