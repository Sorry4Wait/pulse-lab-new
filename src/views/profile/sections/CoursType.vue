<template>
    <!-- <h1 class="title">{{$t("webLabName")}}</h1> -->
    <div class="types">
        <swiper :slidesPerView="'4.5'" :spaceBetween="20">
            <swiper-slide class="" v-for="(type, index) in labTypes" :key="index">
                <a
                        href="#"
                        @click.prevent="myFunction(index, type.title, type.name)"
                        :class="{ active: isActive == index }"
                        :style="{ background: isActive == index ? type.color : '#fff' }"
                >
                    <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M26.8599 12.8125C26.8294 12.5861 26.7961 12.36 26.7601 12.1342L26.68 11.6324C26.3984 9.86825 24.8767 8.57015 23.0901 8.57015L12.9439 8.57015C12.5676 7.23145 11.3379 6.25 9.87893 6.25H7.01447C5.16094 6.25 3.5997 7.63498 3.37871 9.47529L3.0381 12.3117C2.67229 15.358 2.7667 18.4419 3.31816 21.4601C3.61318 23.0748 4.96361 24.2852 6.60084 24.4023L8.49335 24.5377C12.8255 24.8476 17.1743 24.8476 21.5064 24.5377L23.5538 24.3912C24.5645 24.3189 25.4594 23.8054 26.0359 23.0325C26.8029 22.2967 27.4066 21.398 27.7972 20.3937L29.359 16.3776C30.026 14.6623 28.7607 12.8125 26.9202 12.8125H26.8599ZM7.01447 8.125C6.11001 8.125 5.34817 8.80082 5.24033 9.69884L4.89972 12.5352C4.55633 15.3949 4.64495 18.2899 5.16263 21.1231C5.30391 21.8964 5.9506 22.476 6.73464 22.5321L6.84215 22.5398L9.75725 15.0091C10.2697 13.6852 11.5433 12.8125 12.963 12.8125H24.9667C24.9482 12.6848 24.9288 12.5572 24.9085 12.4298L24.8284 11.928C24.6921 11.0737 23.9552 10.4451 23.0901 10.4451L12.1991 10.4451C11.6403 10.4451 11.1874 9.99219 11.1874 9.43346C11.1874 8.71082 10.6016 8.125 9.87893 8.125H7.01447Z"
                                fill="#041628"
                        />
                    </svg>
                    {{ $t(type.name) }}
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
    import {Swiper, SwiperSlide, useSwiper} from "swiper/vue";
    import "swiper/css";
    import {ref, reactive, computed, watch, onMounted, defineEmits} from 'vue';
    import {useGuestStore} from "@/stores/guest.js";
    import {useI18n} from "vue-i18n";

    const emit = defineEmits(['colorChange', 'getCourse']);

    let {t} = useI18n();

    const guestStore = useGuestStore();
    let myOptions = reactive({
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,
        breakpoints: {
            // when window width is >= 320px
            640: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            1024: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 3,
            },
        },
    });
    let isActive = ref(0);
    let toOtchotCourse = ref(t("seismicName"));
    let labTypes = computed(() =>[
        {
            name: t("seismicName"),
            color: "#2FA1DB",
            title : "seismic"
        },
        {
            name: t("electricalName"),
            color: "#D95123",
            title : "electrical"
        },
        {
            name: t("magneticName"),
            color: "#2222DC",
            title : "magnetic"
        },
        {
            name: t("gravityName"),
            color: "#9F330F",
            title : "gravity"
        },
        {
            name: t("seismologicName"),
            color: "#15BBBB",
            title : "seismologic"
        },
    ]);
    const changeColor = () => {
        let color = labTypes.value[isActive.value].color;
        emit('colorChange', color);
    };
    const myFunction = (index, name, course) => {
        isActive.value = index;
        guestStore.currentCourse = name;
        toOtchotCourse.value = course;
        emit('getCourse', toOtchotCourse.value);
    };
    watch(() => isActive.value, () => {
        changeColor();
    });
    onMounted(() => {
        changeColor(0);
    });
</script>

<style lang="scss" scoped>
    ::-webkit-scrollbar {
        display: none;
    }

    .types {
        margin-top: 35px;
        display: flex;
        align-items: center;
        max-width: 100%;
        overflow-x: scroll;

        .swiper {
            width: 100%;
        }

        .swiper-wrapper {
            padding-left: 36px;
            padding-right: 36px;

            .swiper-slide {
                max-width: 300px;
            }
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Raleway";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            border: 1px solid #041628;
            border-radius: 20px;
            height: 70px;
            min-width: 200px;
            max-width: 221px;
            text-decoration: none;

            svg {
                margin-right: 10px;
            }

            color: #041628;

            &.active {
                color: #fff;

                svg {
                    path {
                        fill: #fff;
                    }
                }
            }
        }

        ul {
            display: flex;
            list-style-type: none;
            align-items: center;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 1;
            }
        }


    }

    .title {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 49px;
        color: #00356b;
        margin-top: 71px;
        padding-left: 135px;
    }

    @media screen and (max-width: 1400px) {
        .title {
            padding-left: 110px;
        }
    }
</style>
