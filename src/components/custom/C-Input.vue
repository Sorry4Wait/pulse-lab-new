<template>
  <label
    :class="{ focus: focus }"
    :for="id"
    class="flex items-center cursor-text justify-between"
  >
    <div class="flex flex-col flex-grow">
      <span>{{ label }}</span>
      <input
        @focus="focus = true"
        @blur="focus = false"
        :type="type"
        :id="id"
        v-model="model"
        @input="$emit('update:modelValue', model)"
        class="outline-none border-none w-full bg-inherit"
      />
    </div>
  </label>
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
    modelValue:''
  },
  data() {
    return {
      focus: false,
      model:"",
    };
  },
  created() {
    this.model = this.modelValue;
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
  },
};
</script>

<style lang="scss" scoped>
.icon {
  @apply flex w-[22px] w-[22px] justify-center items-center;
  svg {
    @apply flex w-full h-full items-center justify-center;
  }
}
label {
  padding: 9px 19px 9px 15px;
  background: #ffffff;
  border-top: 1px solid #fff;
  border-left: 4px solid #fff;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: 0.3s;
  &.focus {
    border-top: 1px solid #3a86f3;
    border-left: 4px solid #3a86f3;
    border-bottom: 1px solid #3a86f3;
    border-right: 1px solid #3a86f3;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1));
    border-radius: 2.5px 8px 8px 2.5px;
    input {
      border:none !important;
      box-shadow: none;
    }
    svg {
      path {
        transition: 0.3s;
      }
      &.show {
        path {
          fill: #00366b;
        }
      }
      &.eye {
        path {
          stroke: #00366b;
        }
      }
    }
  }
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;

    color: rgba(4, 22, 40, 0.5);
  }
  input {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #00366b;
  }
}
</style>
