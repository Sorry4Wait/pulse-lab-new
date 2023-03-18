import {defineAsyncComponent} from "vue";

const HomeSvg = defineAsyncComponent(() =>
    import(`/src/assets/img/svg/Home.svg`)
);

export {HomeSvg};