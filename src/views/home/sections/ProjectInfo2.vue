<template>
  <div class="my__container">
    <div class="pt-24 pb-11">
      <ul data-aos="fade-left">

        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentTab = 1"
            :class="{ active: currentTab === 1 }"
          >
            {{ $t("seismicName") }}
          </a>
        </li>
        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentTab = 2"
            :class="{ active: currentTab === 2 }"
          >
            {{ $t("electricalName") }}
          </a>
        </li>
        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentTab = 3"
            :class="{ active: currentTab === 3}"
          >
            {{ $t("magneticName") }}
          </a>
        </li>
        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentTab =4"
            :class="{ active: currentTab === 4  }"
          >
            {{ $t("gravityName") }}
          </a>
        </li>
        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentTab = 5"
            :class="{ active: currentTab ===5 }"
          >
            {{ $t("seismologicName") }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="my__container">
    <transition :name="animateType">
      <component :is="currentTabEl"></component>
    </transition>
  </div>
</template>

<script>
import seysmoRazvedka from "@/views/home/components/seysmoRazvedka.vue";
import elektroRazvedka from "@/views/home/components/elektroRazvedka.vue";
import magnitoRazvedka from "@/views/home/components/magnitoRazvedka.vue";
import graviRazvedka from "@/views/home/components/graviRazvedka.vue";
import seysmologiya from "@/views/home/components/seysmologiya.vue";
export default {
  components: {
    seysmoRazvedka,
    elektroRazvedka,
    magnitoRazvedka,
    graviRazvedka,
    seysmologiya,
  },
  props: {
    navs: {
      type: Object,
      default: [
        {
          name: "Сейсморазведка",
          title: "seysmoRazvedka",
        },
        {
          name: "Электроразведка",
          title: "elektroRazvedka",
        },
        {
          name: "Магниторазведка",
          title: "magnitoRazvedka",
        },
        {
          name: "Гравиразведка",
          title: "graviRazvedka",
        },
        {
          name: "Сейсмология",
          title: "seysmologiya",
        },
      ],
    },
  },
  computed:{
    currentTabEl(){
        if(this.currentTab === 2){
          return 'elektroRazvedka'
        }else if(this.currentTab === 3){
          return 'magnitoRazvedka'
        }else if(this.currentTab === 4){
          return 'graviRazvedka'
        }else if(this.currentTab === 5){
          return 'seysmologiya'
        }else{
          return 'seysmoRazvedka'
        }
    }
  },
  data() {
    return {
      linkId: 0,
      currentTab: 1,
      tabs: [
        {
          name: "Сейсморазведка",
          title: "seysmoRazvedka",
        },
        {
          name: "Электроразведка",
          title: "elektroRazvedka",
        },
        {
          name: "Магниторазведка",
          title: "magnitoRazvedka",
        },
        {
          name: "Гравиразведка",
          title: "graviRazvedka",
        },
        {
          name: "Сейсмология",
          title: "seysmologiya",
        },
      ],
      animateType:'slide-fade-right'
    };
  },
  watch: {
    currentTab: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue && oldValue) {
          let nValue = parseInt(newValue);
          let oValue = parseInt(oldValue);
          if (nValue > oValue) {
            this.animateType = 'slide-fade-right'
          } else {
            this.animateType = 'slide-fade-left'
          }
        }

      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .slide-fade-right-enter-active {
    transition: all 0.4s ease-out;
  }

  .slide-fade-right-enter-from {
    transform: translateX(100px);
    opacity: 0;
  }

  .slide-fade-left-enter-active {
    transition: all 0.4s ease-out;
  }

  .slide-fade-left-enter-from {
    transform: translateX(-100px);
    opacity: 0;
  }

  ::-webkit-scrollbar {
  display: none;
}
ul {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  li {
    display: flex;
    flex-shrink: 0;
    &:last-child {
      padding-right: 0;
    }
    a {
      position: relative;
      text-decoration: none;
      flex-shrink: 0;
      padding: 10px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #00356b;
      &.active {
        font-weight: 700;
        &::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: #38628b;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 8px;
        }
      }
    }
  }
}

// .v-enter-active,
// .v-leave-active {
//   transition: transform 0.5s ease;
//   position: relative;
//   top: 0;
//   left: 0;
//   transform: scale(1);
//   opacity: 1;
// }

// .v-enter-from,
// .v-leave-to {
//   position: absolute;
//   transform: scale(0.5);
//   opacity: 0;
// }
</style>
