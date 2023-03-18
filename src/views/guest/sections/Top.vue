<template>
  <section>
    <div class="top">
      <div class="info">
        <strong>Шахло Отажонова </strong>
        <p>Филиал РГУ нефти и газа им. Губкина</p>
      </div>
      <div class="protsents">
        <div class="all">
          <div :style="{ background: color }">75 %</div>
          <p>Общий балл за все курсы</p>
        </div>
        <div class="enter">
          <div>25 %</div>
          <p>Пройдено</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    color: "",
  },
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  @media (max-width: 1233px) {
    flex-direction: column;
  }
}
.info {
  flex-grow: 1;
  strong {
    display: flex;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    max-width: 120px;
    margin-bottom: 10px;

    color: #041628;
  }
  p {
    font-family: "Raleway";
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */
    max-width: 370px;

    color: #00356b;
  }
}
section {
  padding: 50px 0;
}
.protsents {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  .all {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      width: 198px;
      height: 198px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background: #2fa1db;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 75px;
      color: #ffffff;
      margin-bottom: 15px;
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;

      color: #041628;
    }
  }
  .enter {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 25px;
    div {
      width: 94px;
      height: 94px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      margin-bottom: 10px;

      background: #d9d9d9;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;

      color: #4c5a66;
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      color: #000000;
    }
  }
}
</style>
