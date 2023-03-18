<template>
  <div class="chat">
    <h2>Pulse Lab Chat</h2>
    <div class="chat__body">
      <div class="messages__content">
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Поздравляю, Шахло, Вы успешно прошли авторизацию! Ваш код доступа и пароль
              отправлен на почту user@gmail.com
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Ввиду того, что Вы исчерпали свои попытки при прохождении Лабораторной
              работы №1 по курсу "Сейсморазведка" (см. описание) Ваша работа оценивается с
              понижающим коэффициентом 0,7 Ниже указаны понижающие коэффициенты для
              количества попыток: от 4 до 10 коэффициент 0,85 от 11 до 30 коэффициент 0,7
              от 31 до 50 коэффициент 0,5 от 51 до 100 коэффициент 0,3 от 100 и более
              коэффициент 0
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Поздравляю, Шахло, Вы успешно прошли авторизацию! Ваш код доступа и пароль
              отправлен на почту user@gmail.com
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Ввиду того, что Вы исчерпали свои попытки при прохождении Лабораторной
              работы №1 по курсу "Сейсморазведка" (см. описание) Ваша работа оценивается с
              понижающим коэффициентом 0,7 Ниже указаны понижающие коэффициенты для
              количества попыток: от 4 до 10 коэффициент 0,85 от 11 до 30 коэффициент 0,7
              от 31 до 50 коэффициент 0,5 от 51 до 100 коэффициент 0,3 от 100 и более
              коэффициент 0
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Поздравляю, Шахло, Вы успешно прошли авторизацию! Ваш код доступа и пароль
              отправлен на почту user@gmail.com
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
        <div class="message">
          <span class="date">13.07.2022</span>
          <div class="message__body">
            <p class="text">
              Ввиду того, что Вы исчерпали свои попытки при прохождении Лабораторной
              работы №1 по курсу "Сейсморазведка" (см. описание) Ваша работа оценивается с
              понижающим коэффициентом 0,7 Ниже указаны понижающие коэффициенты для
              количества попыток: от 4 до 10 коэффициент 0,85 от 11 до 30 коэффициент 0,7
              от 31 до 50 коэффициент 0,5 от 51 до 100 коэффициент 0,3 от 100 и более
              коэффициент 0
            </p>
            <span class="time"> 15:06 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="chat__footer">
      <p class="p">
        <!-- При возникновении проблем с платформой обратитесь по почте
        <a href="mailto: pulselabcat@gmail.com">pulselabcat@gmail.com</a> -->
          {{$t("support")}} <a href="mailto: pulselabcat@gmail.com">pulselabcat@gmail.com</a> {{$t("support2")}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      support : this.$t("support")
    }
  }
};
</script>

<style lang="scss" scoped>
.chat {
  background: rgba(153, 194, 198, 0.13);
  border-radius: 10px;
  height: 670px;
  display: flex;
  flex-direction: column;
  h2 {
    background: #0279f2;
    border-radius: 10px 10px 0px 0px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding: 12px 25px;

    color: #ffffff;
  }
  .chat__body {
    padding: 12px 25px;
    flex-grow: 1;
    overflow-y: scroll;
    // transform: rotate(180deg);
    .messages__content {
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      justify-content: flex-end;
      // transform: rotate(-180deg);
      min-height: 100%;
      width: 100%;
    }
  }
  .message {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .date {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 5px;
    }
    .message__body {
      display: flex;
      background: #ffffff;
      border: 1px solid #00356b;
      border-radius: 10px;
      padding: 10px 13px;
      .text {
        font-family: "Raleway";
        flex-grow: 1;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 0;

        color: #000000;
      }
      .time {
        flex-shrink: 1;
        display: flex;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 10px;

        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .chat__footer {
    background: rgba(0, 53, 107, 0.17);
    border-radius: 0px 0px 10px 10px;
    padding: 26px 28px;
    p {
      font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #0D3257;
      a {
        font-weight: 700;
        font-size: 15px;
        // line-height: 22px;
        color: #2776E3;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(153, 194, 198, 0.13);
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0279F2;
  border-radius: 10px;
}

</style>
