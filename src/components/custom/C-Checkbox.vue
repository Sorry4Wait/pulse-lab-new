<template>
  <label :for="id" class="flex items-center cursor-pointer">
    <div class="mask mr-3" :class="{ check: value }">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.4995 7.44055C17.8085 7.71643 17.8353 8.19054 17.5595 8.49952L10.4166 16.4995C10.2743 16.6589 10.0708 16.75 9.85715 16.75C9.6435 16.75 9.43999 16.6589 9.2977 16.4995L6.44055 13.2995C6.16468 12.9905 6.19152 12.5164 6.5005 12.2406C6.80947 11.9647 7.28359 11.9915 7.55946 12.3005L9.85715 14.8739L16.4406 7.5005C16.7164 7.19152 17.1905 7.16468 17.4995 7.44055Z"
          fill="#fff"
        />
      </svg>
    </div>
    <input class="hidden" v-model="value" :id="id" type="checkbox" />
    <slot></slot>
  </label>
</template>

<script>
export default {
  data() {
    return {
      id: "checkbox",
      value: false,
    };
  },
  created() {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
  },
};
</script>

<style lang="scss" scoped>
label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #00366b;
}
.mask {
  background: #ffffff;
  border: 1px solid #2574e1;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  @apply flex justify-center items-center w-5 h-5;
  svg {
    @apply w-full h-full;
    transform: scale(0);
    transition: 0.3s;
  }
  &.check {
    background: #2574e1;
    svg {
      transform: scale(1.2);
    }
  }
}
</style>
