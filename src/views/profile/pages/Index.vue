<template>
  <div class="my__container">
    <section>
      <top :color="color" />
    </section>
  </div>
  <cours-type @getCourse="getValue" @colorChange="(e) => (color = e)" />
  <section class="mt-2">
    <sertificate :color="color" />
    <otchot-courses :color="color"/>
  </section>
</template>
<script>
import CoursType from "../sections/CoursType.vue";
import OtchotCourses from "../sections/otchotCourses/index.vue"
import Sertificate from "../sections/SertificateView.vue";
import Top from "../sections/Top.vue";
export default {
  components: {
    Top,
    CoursType,
    Sertificate,
    OtchotCourses,
  },
  data() {
    return {
      color: "",
      course : ""
    };
  },
  methods: {
    setColor(color) {
      console.log(color);
    },
    getValue (course) {
    this.course = course;
  }
  },
  provide() {
    return {
      course : this.course
    }
  }
};
</script>

<style>

</style>
