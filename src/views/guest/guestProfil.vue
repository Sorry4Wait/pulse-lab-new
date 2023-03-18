<template>
    <section>
    </section>
    <CoursType @colorChange="(e) => (color = e)" />
    <section>
      <sertificate :color="color"/>
      <OtchotCourses :color="color" />
    </section>
  </template>
  <script>
    import CoursType from "@/views/guest/sections/CoursType.vue"
    import OtchotCourses from "@/views/guest/sections/OtchotCourses.vue"
    import Sertificate from "@/views/guest/sections/SertificateView.vue"
  export default {
    components: {
      CoursType,
      OtchotCourses,
      Sertificate
    },
    data() {
      return {
        color: "",
      };
    },
    methods: {
      setColor(color) {
        console.log(color);
      },
    },
  };
  </script>
  
  <style scoped>
  section {
    padding: 0 135px;
  }

  @media screen and (max-width : 1400px) {
    section {
      padding-left: 110px;
      padding-right: 150px;
    }
  }
  </style>
  