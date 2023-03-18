<template>
  <div>
    <label
    :for="id"
    class="flex items-center cursor-text label"
  >
    <div class="w-full main" :class="{active : isVisible}">
      <span class="pl-[15px]">{{ label }}</span>
        <div class="selected flex items-start justify-between" @click="isVisible=!isVisible" alt="">
        <p>{{selected}}</p>
        <img src="@/assets/img/svg/Vector.svg">
        </div>
        <div class="options-container" v-for="(o, i) in options" :key="i">
            <div v-if="options" class="options py-[5px] cursor-default">
              <input v-model="selected" type="radio" :id="o.value" name="select" :value="o.label">
              <label @click="isVisible=false" class="pl-[14px]" :for="o.value">{{o.label}}</label>
          </div>
          <div v-else class="options py-[5px] cursor-default">
              <p>Hech qanaqa ma'lumot topilmadi</p>
          </div>
        </div>
    </div>
  </label>
  </div>
  
</template>

<script>
export default {
  props: {
    type: {
      default: "text",
      id: "text",
    },
    label: {
      default: "Введите e-mail",
    },
    options : {
      default : []
    }
  },
  data() {
    return {
      selected : "",
      isVisible : false
    };
  },
  created() {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
  },
};
</script>

<style lang="scss" >
.label {
  padding-top: 9px;
  background: #ffffff;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: 0.3s;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;

    color: rgba(4, 22, 40, 0.5);
  }
}

.options-container {
  display: none;
  transition: all 0.4s;
}
.main.active .options-container {
  display: block;
}
.selected img {
  transform: rotate(-180deg);
  transition: all ease-in-out 0.2s;
}
.main.active .selected img {
  transform: rotate(-360deg);
}

.options label{
  display: block;
  transition: all 0.2s;
  padding: -50px;
  color: #00366B;
}
.options input {
  display: none;
}

.options label:hover  {
  background: rgba(37, 116, 225, 0.39);
}
.selected {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #00366b;
    min-height: 20px;
    padding: 9px 22px 9px 15px;
    cursor: default;
}
</style>