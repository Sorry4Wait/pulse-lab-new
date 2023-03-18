<template>
    <div class="top px-9 pt-16 flex items-center space-x-[112px]">
        <div :class="customClass">
            <h1>{{title}}</h1>
            <h1>{{subTitle}}</h1>
        </div>

        <a href="#!" class="btn__reg" v-if="!authorizedUser">
            <span> Регистрация </span>
        </a>
    </div>
    <div class="my-tabs px-9 mt-[40px]" v-if="authorizedUser">
        <div class="my-tab-item" :class="item.color" v-for="(item,index) in tabList"
             @click="changeCurrentTab(index)">
            <div class="header flex">
                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M19.4898 5.25C19.4655 5.0689 19.4388 4.88801 19.41 4.70739L19.3459 4.30595C19.1207 2.8946 17.9033 1.85612 16.4741 1.85612L8.3571 1.85612C8.05606 0.785162 7.07227 0 5.9051 0H3.61353C2.1307 0 0.881713 1.10798 0.704918 2.58023L0.432432 4.84935C0.139785 7.28637 0.215312 9.75355 0.656482 12.1681C0.892499 13.4599 1.97284 14.4281 3.28263 14.5218L4.79663 14.6302C8.26236 14.8781 11.7414 14.8781 15.2071 14.6302L16.845 14.513C17.6535 14.4551 18.3695 14.0444 18.8307 13.426C19.4443 12.8374 19.9272 12.1184 20.2397 11.315L21.4891 8.10212C22.0228 6.72983 21.0105 5.25 19.5381 5.25H19.4898ZM3.61353 1.5C2.88996 1.5 2.28049 2.04066 2.19422 2.75907L1.92173 5.02819C1.64702 7.31589 1.71792 9.63189 2.13205 11.8985C2.24508 12.5171 2.76243 12.9808 3.38967 13.0257L3.47567 13.0318L5.80776 7.00727C6.21774 5.94815 7.23662 5.25 8.37232 5.25H17.9753C17.9606 5.14785 17.945 5.04579 17.9288 4.94381L17.8647 4.54238C17.7556 3.85897 17.1661 3.35612 16.4741 3.35612L7.76122 3.35612C7.31422 3.35612 6.95186 2.99375 6.95186 2.54677C6.95186 1.96865 6.48321 1.5 5.9051 1.5H3.61353Z"
                          fill="#00356B"/>
                </svg>
                <span>{{item.text2}}</span>
            </div>
            <div class="title mt-[16px]">
                Общий балл: 90%
            </div>
            <p class="text-muted mt-[10px]">{{item.text1}}</p>
            <p class="text-muted mt-[5px]">{{item.text2}}</p>

        </div>
        <!--            <div class="my-tab-item bg-yellow">2</div>-->
        <!--            <div class="my-tab-item bg-primary">3</div>-->
        <!--            <div class="my-tab-item bg-accent">4</div>-->
        <!--            <div class="my-tab-item bg-amber">5</div>-->
        <!--            <div class="my-tab-item bg-cyan">6</div>-->
        <!--            <div class="my-tab-item bg-brand">7</div>-->
        <!--            <div class="my-tab-item bg-brand">8</div>-->
        <!--            <div class="my-tab-item bg-brand">9</div>-->
        <!--            <div class="my-tab-item bg-brand">10</div>-->
    </div>
</template>

<script>

    import {computed} from "vue";
    import {auth} from "@/stores/auth";

    export default {
        props: {
            title: {type: String, default: 'Курс Сейсморазведка'},
            subTitle: {type: String, default: '“Изучение упругих модулей”'},
            customClass: {
                type: String,
                default: 'w-[578px] text-[36px] leading-[50px] h-[93px]'
            }
        },
        setup() {

            const authUser = auth();
            let authorizedUser = computed(() => authUser.authorizedUser);
            return {authorizedUser}
        },
        computed: {
            cssStyles() {
                return this.customClass
            },
        },
        data() {
            return {
                tabList: [
                    {
                        icon: "folder_open",
                        text1: "Время выполнения: 90 мин",
                        text2: "Лабораторная работа №2",
                        color: "my-bg-slide-1"
                    },
                    {
                        icon: "folder_open",
                        text1: "Время выполнения: 90 мин",
                        text2: "Лабораторная работа №2",
                        color: "my-bg-slide-2"
                    },
                    {
                        icon: "folder_open",
                        text1: "Время выполнения: 90 мин",
                        text2: "Лабораторная работа №2",
                        color: "my-bg-slide-3"
                    },
                    {
                        icon: "folder_open",
                        text1: "Время выполнения: 90 мин",
                        text2: "Лабораторная работа №2",
                        color: "my-bg-slide-4"
                    },
                    {
                        icon: "folder_open",
                        text1: "Время выполнения: 90 мин",
                        text2: "Лабораторная работа №2",
                        color: "my-bg-slide-5"
                    }
                ],
                currentTab: 0
            }
        },
        methods: {
            changeCurrentTab(index) {
                this.currentTab = index;
            }
        },
        mounted() {
            let myUl = document.querySelectorAll('.my-tabs');
            if (myUl && myUl[0]) {
                myUl[0].addEventListener("wheel", (evt) => {
                    evt.preventDefault();
                    myUl[0].scrollLeft += evt.deltaY;
                });
            }
        }

    };
</script>

<style lang="scss" scoped>
    h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;

        color: #00366b;
    }

    .btn__reg {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border: 1px dashed #017cf8;
        border-radius: 8px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        color: #ffffff;

        span {
            display: flex;
            padding: 19px 30px;
            background: linear-gradient(262.49deg, #007eff 0%, #0864c1 100.67%, #c80000 100.68%);
            border-radius: 8px;
        }
    }

    .my-tabs {
        display: flex;
        overflow-x: auto;
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none;

        &:hover {
            cursor: pointer;
        }

        &::-webkit-scrollbar {
            width: 0; /* Remove scrollbar space */
            background: transparent; /* Optional: just make scrollbar invisible */
        }

        .my-tab-item {
            height: 129px;
            width: 229px;
            display: flex;
            padding: 15px;
            flex-direction: column;
            border: 1px solid #2776E3;
            border-radius: 20px;
            margin-right: 20px;
            flex-shrink: 0;
            .header span {
                margin-left: 11px;
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 14px;
                /* identical to box height */


                color: #0D3257;
            }
            .title {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;

                color: #0D3257;
            }
            .text-muted{

                font-family: 'Raleway';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;

                color: #0D3257;

                opacity: 0.5;
            }
        }

    }

    .active {
        scroll-snap-type: unset;
    }

    .my-bg-slide-1 {
        background-color: #E4F6FF;
    }

    .my-bg-slide-2 {
        background-color: #FFEFEA;
    }

    .my-bg-slide-3 {
        background-color: #D6D6FF;
    }

    .my-bg-slide-4 {
        background-color: #E9E0DD;
    }

    .my-bg-slide-5 {
        background-color: #F2F4F4;
    }
</style>
