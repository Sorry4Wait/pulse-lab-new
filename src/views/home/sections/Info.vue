<template>
  <div class="row">
    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
      <img data-aos="zoom-in" src="@/assets/img/demo/infolab.png" />
    </div>
    <div class="col-12 col-lg-6">
      <p data-aos="fade-up">
        <strong>Pulse Lab</strong> - это уникальный проект по созданию цифровой
        лаборатории с целью изучения основ геофизических методов
      </p>
      <p data-aos="fade-up" data-aos-delay="200" class="last">
        Web-лаборатория Pulse Lab была разработана при поддержке Министерства
        Инновационного развития Республики Узбекистан в рамках молодежного проекта при
        лаборатории “Геофизики и наноминералогии” Центра передовых технологий
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  padding-top: 90px;
  padding-bottom: 67px;
}
p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;

  color: #000000;
  &.last {
    border-top: 1px solid #000000;
    padding-top: 17px;
    margin-top: 50px;
  }
}
</style>
