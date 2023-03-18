<template>
  <div class="my__container">
    <swiper
      class="mySwiper pb-24"
      :slidesPerView="2"
      :spaceBetween="20"
      :slidesPerGroup="2"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class=""
        v-for="(author, index) in authorsC"
        :key="index"
        :author="author"
      >
        <avtor-card :author="author"></avtor-card>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import AvtorCard from "./AvtorCard.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
    AvtorCard,
  },
  data() {
    return {
      modules: [Pagination],
      myOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        // loop: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  computed: {
    authorsC() {
      return [
        {
          cName: "Тимур <br> Мамарозиков",
          lName: "Timur <br> Mamarozikov",
          position: this.$t("directorProject"),
          email: "timur.mamarozikov@yandex.ru",
          url_img: "/src/assets/img/authors/timur_mamarozikov.png",
        },
        {
          cName: "Азамат <br> Закиров",
          lName: "Azamat <br> Zakirov",
          position: this.$t("seniorResearcher"),
          email: "azamatzakirov@mail.ru",
          url_img: "/src/assets/img/authors/azamat_zakirov.png",
        },
        {
          cName: "Диёрбек <br> Юсупов",
          lName: "Diyorbek <br> Yusupov",
          position: this.$t("juniorResearcher"),
          email: "dior.yusupoov@gmail.com",
          url_img: "/src/assets/img/authors/diyorbek_yusupov.png",
        },
        {
          cName: "Шахло <br> Отажонова",
          lName: "Shahlo <br> Otajonova",
          position: this.$t("laborant"),
          email: "shxlooooo@gmail.com",
          url_img: "/src/assets/img/authors/shaxlo_otajonova.png",
        },
        {
          cName: "Ильяс <br> Янбухтин",
          lName: "Ilyas <br> Yanbuxtin",
          position: this.$t("seniorResearcher"),
          email: "ilyas_7@mail.ru",
          url_img: "/src/assets/img/authors/ilyas_yanbuxtin.png",
        },
        {
          cName: "Нодир <br> Хикматиллаев",
          lName: "Nodir <br> Hikmatillayev",
          position: this.$t("laborant"),
          email: "nodirbekxikmatillayev@gmail.com",
          url_img: "/src/assets/img/authors/nodir_hikmatillayev.png",
        },
        {
          cName: "Валерия <br> Аширова",
          lName: "Valeriya <br> Ashirova",
          position: this.$t("laborant"),
          email: "erabiersacklera@gmail.com",
          url_img: "/src/assets/img/authors/valeriya_ashirova.png",
        },
        {
          cName: "Татьяна <br> Бабичева",
          lName: "Tatyana <br> Babicheva",
          position: this.$t("laborant"),
          email: "btatiana0719@gmail.com",
          url_img: "/src/assets/img/authors/tatyana_babicheva.png",
        },
        {
          cName: "Шохрух <br> Зиябов",
          lName: "Shoxrux <br> Ziyabov",
          position: this.$t("laborant"),
          email: "mailto: sziyabov92@gmail.com",
          url_img: "/src/assets/img/authors/shoxrux_ziyabov.png",
        },
        {
          cName: "Нозим <br> Орипов",
          lName: "Nozim <br> Oripov",
          position: this.$t("laborant"),
          email: "mailto: nozim.o.k92@mail.ru",
          url_img: "/src/assets/img/authors/nozim_oripov.png",
        },
      ];
    },
  },
  methods: {
    onSwiper(swiper) {
      // console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss">
.swiper-grid-column > .swiper-wrapper {
  // flex-direction: row !important;
}
// .mySwiper {
//   .swiper-slide {
//     max-width: 450px;
//     margin-right: 130px;
//   }
// }
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  // bottom: initial;
  // top: 100%;
}
/*.swiper-wrapper {*/
/*  .swiper-slide {*/
/*    max-height: 300px;*/
/*  }*/
/*}*/
.swiper-pagination-bullet {
  width: 25px;
  height: 25px;

  background: #98bbdf;
  border-radius: 100%;
  margin: 0 13px !important;
  &-active {
    background: #00356b;
  }
}
</style>
