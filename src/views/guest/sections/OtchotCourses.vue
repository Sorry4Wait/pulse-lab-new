<template>
  <div class="otchots">
    <p class="title">{{$t("methodManShort")}}</p>
    <div class="courses">
      <otchot-cours :color="color" v-for="(course, index) in coursesC" :key="index" :course="course"/>
    </div>
    <!-- <a href="#!" class="download">
      <img src="@/assets/img/demo/download.png" />
      {{$t("downloadMethods")}}
    </a> -->
  </div>
</template>

<script>
import OtchotCours from "@/views/guest/components/otchotCourse.vue";
export default {
  components: {
    OtchotCours,
  },
  props: {
    color: {
      type: String,
    },
  },
  computed : {
    coursesC () {
      return [
        {
          name : this.$t("seismicName"),
          link : "#",
          border : "#C1EAFF",
          background : "rgba(228, 246, 255, 0.15)",
        },
        {
          name : this.$t("electricalName"),
          link : "#",
          border : "#FFCEBF",
          background : "rgba(255, 239, 234, 0.15)",
        },
        {
          name : this.$t("magneticName"),
          link : "#",
          border : "#C0C0FF",
          background : "rgba(214, 214, 255, 0.15)",
        },
        {
          name : this.$t("gravityName"),
          link : "#",
          border : "#DAB5A9",
          background : "rgba(233, 224, 221, 0.15)",
        },
        {
          name : this.$t("seismologicName"),
          link : "#",
          border : "#ADDDDD",
          background : "rgba(242, 244, 244, 0.15)",
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.otchots {
  padding-top: 150px;
  padding-bottom: 150px;
  .title {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 26px;
    color: #243343;
  }
  .courses {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -17px;
  }
  .download {
    display: flex;
    align-items: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    margin-top: 100px;
    /* identical to box height, or 36px */

    text-decoration-line: underline;

    color: #00356b;
    img {
      width: 25px;
      height: 29px;
      object-fit: contain;
      margin-right: 9px;
    }
  }
}
</style>
