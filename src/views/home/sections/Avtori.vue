<template>
  <div class="my__container">
    <h3>{{$t("authorCourse")}}</h3>
  </div>
  <AvtoriSwiper />
</template>

<script>
import AvtoriSwiper from "../components/AvtoriSwiper.vue";
export default {
  components: {
    AvtoriSwiper,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  margin-top: 80px;
  margin-left: 15px;

  background: linear-gradient(270deg, #041628 -27.08%, rgba(0, 98, 196, 0.51) 175.23%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 32px;
}
</style>
