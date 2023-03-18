<template>
  <div class="wrapper mt-[72px] mb-[55px]">
    <div class="left">
      <router-link to="/update">
        <svg @click="toUpdatePage" class="inline-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.34311 1.69205C7.21688 1.48709 8.10843 1.38462 8.99999 1.38462C9.38234 1.38462 9.6923 1.07466 9.6923 0.692308C9.6923 0.309957 9.38234 0 8.99999 0C8.00233 0 7.00467 0.114676 6.02691 0.344027C3.20715 1.00545 1.00545 3.20715 0.344028 6.02691C-0.114676 7.98243 -0.114676 10.0176 0.344028 11.9731C1.00546 14.7929 3.20715 16.9945 6.02691 17.656C7.98243 18.1147 10.0176 18.1147 11.9731 17.656C14.7928 16.9945 16.9945 14.7929 17.656 11.9731C17.8853 10.9953 18 9.99764 18 8.99997C18 8.61762 17.69 8.30766 17.3077 8.30767C16.9253 8.30767 16.6154 8.61763 16.6154 8.99998C16.6154 9.89154 16.5129 10.7831 16.3079 11.6569C15.7666 13.9647 13.9647 15.7666 11.6569 16.3079C9.90934 16.7179 8.09065 16.7179 6.34312 16.3079C4.03533 15.7666 2.23339 13.9647 1.69205 11.6569C1.28214 9.90935 1.28214 8.09065 1.69205 6.34311C2.23339 4.03533 4.03533 2.23339 6.34311 1.69205Z" fill="#00356B"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2626 0.693095C13.781 0.247449 14.4438 0 15.1321 0C16.716 0 18 1.28398 18 2.86785C18 3.55619 17.7526 4.21898 17.3069 4.73736C17.2601 4.7918 17.2111 4.84464 17.16 4.89573L13.8458 8.20997C12.3162 9.73952 10.3997 10.8246 8.3012 11.3493L7.66063 11.5094C6.95401 11.6861 6.31394 11.046 6.4906 10.3394L6.65074 9.6988C7.17538 7.60026 8.26048 5.68377 9.79004 4.15421L13.1043 0.839975C13.1554 0.788877 13.2082 0.739897 13.2626 0.693095ZM15.253 4.84465C14.7729 4.65101 14.3389 4.34317 13.9979 4.00214C13.6568 3.6611 13.349 3.22708 13.1554 2.74703L10.7691 5.13328C9.42631 6.47608 8.47101 8.15624 8.00366 9.99634C9.84376 9.529 11.5239 8.5737 12.8667 7.2309L15.253 4.84465Z" fill="#00356B"/>
      </svg>
      </router-link>
    </div>
    <div class="right flex justify-between items-center">
        <div class="item_1 mr-[130px]">
          <h1 class="user_name">Шахло Отажонова </h1>
          <p class="university_name">Филиал РГУ нефти и газа им. И.М.Губкина</p>
        </div>
        <div class="item_2 flex text-center">
          <div class="box_1 self-end mr-[56px] cursor-default">
            <transition name="pulse" v-if="isActiveEl1">
              <div>
              <div @click="el1" :class="{active : isActiveEl1, passive : !isActiveEl1}" class="result  mb-[10px]" :style="{background : color}">75%</div>
              <p class="info active_uni_name">{{$t("totalScoreAllCourses")}}</p>
            </div>
            </transition>
            <transition name="pulse" v-else>
              <div>
              <div :style="{'border-color' : color}" @click="el1" :class="{active : isActiveEl1, passive : !isActiveEl1}" class="result  mb-[10px]">75%</div>
            <p class="info passive_uni_name -mb-[20px]">{{$t("totalScoreAllCourses")}}</p>
            </div>
            </transition>
          </div>
          <div class="box_2 self-end cursor-default">
            <transition name="pulse" v-if="!isActiveEl2">
              <div>
              <div @click="el2" :class="{passive : !isActiveEl2, active : isActiveEl2}" class="result  mb-[10px]" :style="{'border-color' : color}">25%</div>
              <div class="info passive_uni_name">{{$t("passed")}}</div>
            </div>
            </transition>
           <transition name="pulse" v-else @click="el2">
            <div>
              <div :class="{passive : !isActiveEl2, active : isActiveEl2}" class="result  mb-[10px]" :style="{'border-color' : color, background : color}">25%</div>
            <div class="info active_uni_name">{{$t("passed")}}</div>
            </div>
           </transition>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveEl1 : true,
      isActiveEl2 : false
    }
  },
  props : {
    color : {
      type : String,
      default : ""
    }
  },
  methods : {
    toUpdatePage () {
      this.$router.push({name : "update"})
    },
    el1 () {
      if(!this.isActiveEl1) {
        this.isActiveEl1 = true
        this.isActiveEl2 = false
      } else {
        this.isActiveEl1 = false
        this.isActiveEl2 = true
      }
    },
    el2 () {
      if(!this.isActiveEl2) {
        this.isActiveEl2 = true
        this.isActiveEl1 = false
      } else {
        this.isActiveEl2 = false
        this.isActiveEl1 = true
      }
    }
  },
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
  .wrapper {
    display: flex;
  }
  svg {
    margin-top: 40px;
    margin-left: -20px;
    margin-right: 20px;
  }
  .left {
    margin-left: -27px;
  }
  .user_name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #00356B;
    margin-bottom: 20px;
  }

  .university_name {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #00356B;
  }


  .active {
    padding: 50px 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    /* background: #2FA1DB; */
    border-radius: 50%;
    color: #fff;
  }

  .passive {
    padding: 25px 17px;
    padding: 30px 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #00356B;
    background: rgba(228, 246, 255, 0.15);
    border: 1px solid;
    border-radius: 50%;
  }
  .active_uni_name {
    font-weight: 700;
    color: #00356B;
  }

  .passive_uni_name {
    font-weight: 500;
    color: #00356B;
  }

  .result {
    max-height: 200px;
    /* animation-delay: 2s; */
  }
  .result {
    animation: my_animate;
    animation-duration: 1s; 
  }
  .info {
    animation: my_animate;
    animation-duration: 1s;
  }
@keyframes animate {
  0% {
    opacity: 0;
    /* transform: rotate(0); */
  }
  25% {
    opacity: 2.5;
    /* transform: rotate(90deg); */
  }
  50% {
    opacity: 5;
    /* transform: rotate(180deg); */
  }
  75% {
    opacity: 7.5;
    /* transform: rotate(270deg); */
  } 
  100% {
    opacity: 1;
    /* transform: rotate(360deg); */
  }
}

@keyframes my_animate {
  from {
    /* transform: rotate(0deg); */
    transform: scale(0);
    opacity: 0;
  } 
  to {
    /* transform: rotate(360deg); */
    transform: scale(1);
    opacity: 1;
  }
}
</style>