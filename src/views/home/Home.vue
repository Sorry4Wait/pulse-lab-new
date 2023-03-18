<template>
  <section class="top px-9 min-h-screen relative">
    <div
      class="video_block absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <video
        ref="video_block"
        class="w-full min-h-full object-cover"
        src="/src/assets/video/Laboratory.mp4"
        muted
        autoplay
      ></video>
      <div class="mask"></div>
    </div>

    <div class="video_container relative pt-20">
      <!-- <h1 data-aos="fade-up" class="pt-4">Pulse Lab</h1>
      <h2 data-aos="fade-up" data-aos-delay="200">обучение за гранью реальности</h2> -->

      <h1 data-aos="fade-up" class="pt-4">{{ $t("projectName") }}</h1>
      <h2 data-aos="fade-up" data-aos-delay="200">
        {{ $t("projectShortDes") }}
      </h2>

      <!-- <p class="mt-14">
        <strong> Pulse Lab </strong>
        - это уникальный проект по созданию цифровой лаборатории с целью изучения основ
        геофизических методов
      </p> -->

      <p class="mt-14">
        <strong> {{ $t("projectName") }} </strong>
        {{ $t("projectLongDes") }}
      </p>
    </div>
  </section>
  <section class="overflow-hidden">
    <project-info> </project-info>
    <Video />
    <project-info-2></project-info-2>
    <avtori />
    <div class="my__container">
      <contact />
    </div>
  </section>
</template>
<script>
import Avtori from "./sections/Avtori.vue";
import Contact from "./sections/ContactUse.vue";
// import Info from "./sections/Info.vue";
import ProjectInfo from "./sections/ProjectInfo.vue";
import ProjectInfo2 from "./sections/ProjectInfo2.vue";
import Video from "./sections/Video.vue";
export default {
  components: {
    // Info,
    Video,
    ProjectInfo,
    Avtori,
    Contact,
    ProjectInfo2,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  color: #ffffff;
}
.video_block {
  overflow: hidden;
  video {
    height: 110%;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 53, 107, 0.45);
  }
}
h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;

  color: #ffffff;
}
p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  strong {
    font-size: 30px;
    font-weight: 700;
  }
}

.video_container {
  padding-left: 110px;
  // padding-top: 88px;
}

@media screen and (max-width: 1400px) {
  .video_container {
    padding-left: 80px;
  }
}
</style>
