<template>
    <div>
      <div class="flex ">
          <ul data-aos="fade-left">
              <li><a href="#" @click.prevent="currentTab='gravityInfo1'" :class="{active : currentTab=='gravityInfo1'}">
                  {{$t("gravity.whatLearnName")}}
              </a></li>
              <li><a href="#" @click.prevent="currentTab='gravityInfo2'" :class="{active : currentTab=='gravityInfo2'}">
                  {{$t("gravity.advantagesCourseName")}}
              </a></li>
              <li><a href="#" @click.prevent="currentTab='gravityInfo3'" :class="{active : currentTab=='gravityInfo3'}">
                  {{$t("gravity.fullFunctionalityName")}}
              </a></li>
              <li><a href="#" @click.prevent="currentTab='gravityInfo4'" :class="{active : currentTab=='gravityInfo4'}">
                  {{$t("gravity.courseForName")}}
              </a></li>
          </ul>
      </div>
      <div>
          <transition :name="animateType">
              <component class="mt-[32px]" :is="currentTab"></component>
          </transition>
      </div>
    </div>
  </template>
  
  <script>
import gravityInfo1 from "@/views/guest/sections/info/gravity/info-1.vue"
import gravityInfo2 from "@/views/guest/sections/info/gravity/info-2.vue"
import gravityInfo3 from "@/views/guest/sections/info/gravity/info-3.vue"
import gravityInfo4 from "@/views/guest/sections/info/gravity/info-4.vue"
  export default {
      data() {
          return {
              currentTab  : "gravityInfo1",
              animateType: 'slide-fade-right'
          }
      },
      components : {
        gravityInfo1,
        gravityInfo2,
        gravityInfo3,
        gravityInfo4,
      },
      watch: {
          currentTab: {
              immediate: true,
              handler(newValue, oldValue) {
                  if (newValue && oldValue) {
                      let nValue = parseInt(newValue.split("gravityInfo")[1]);
                      let oValue = parseInt(oldValue.split("gravityInfo")[1]);
                      if (nValue > oValue) {
                          this.animateType = 'slide-fade-right'
                      } else {
                          this.animateType = 'slide-fade-left'
                      }
                  }

              }
          }
      }
  }
  </script>
  
  <style scoped lang="scss">
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
    ul {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    li {
      display: flex;
      padding-right: 10px;
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
  </style>