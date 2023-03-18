<template>
  <div class="otchots">
    <!-- <p class="title">{{$t("methodManLong")}}</p> -->
    <div class="otchots my__container">
      <h3>{{ $t("methodManLong") }}</h3>
      <div class="courses">
        <otchot-cours :color="color" v-for="(card, index) in 5" :key="index" />
      </div>
      <a href="#!" class="download">
        <img src="@/assets/img/demo/download.png" />
        {{ $t("downloadMethods") }}
      </a>
    </div>
  </div>
</template>

<script>
import OtchotCours from "../components/OtchotCours.vue";
export default {
  components: {
    OtchotCours,
  },
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.otchots {
  padding-top: 150px;
  padding-bottom: 150px;
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    /* or 125% */

    color: #00356b;
    margin-bottom: 40px;
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
