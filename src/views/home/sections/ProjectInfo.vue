<template>
  <div class="infoCourse">
    <div class="pt-14 pb-14">
      <ul data-aos="fade-left">
        <li class="d-flex">
          <a
            href="#"
            @click.prevent="currentComp='about'"
            :class="{active : currentComp=='about'}"
            >{{ $t("aboutProject.name") }}</a
          >
        </li>
        <li class="d-flex">
          <a href="#" @click.prevent="currentComp = 'objective'" :class="{active : currentComp=='objective'}">{{
            $t("objectiveProject.name")
          }}</a>
        </li>
        <li class="d-flex">
          <a href="#" @click.prevent="currentComp = 'uniqueness'" :class="{active : currentComp=='uniqueness'}">{{
            $t("uniquenessProject.name")
          }}</a>
        </li>
        <li class="d-flex">
          <a href="#" @click.prevent="currentComp = 'gratitude'" :class="{active : currentComp=='gratitude'}">{{
            $t("gratitude.name")
          }}</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="infoCourse__body">
    <component :is="currentComp"></component>
  </div>
</template>

<script>
import about from "@/views/home/sections/projectInfoOptions/about.vue";
import objective from "@/views/home/sections/projectInfoOptions/objective.vue";
import uniqueness from "@/views/home/sections/projectInfoOptions/uniqueness.vue";
import gratitude from "@/views/home/sections/projectInfoOptions/gratitude.vue";
export default {
  components: {
    about,
    objective,
    uniqueness,
    gratitude,
  },
  props: {},
  data() {
    return {
      currentComp: "about",
    };
  },
};
</script>

<style lang="scss">
.infoCourse__body {
  .v-enter-active,
  .v-leave-active {
    transition: transform 0.5s ease;
    position: relative;
    top: 0;
    left: 0;
    transform: scale(1);
    opacity: 1;
  }

  .v-enter-from,
  .v-leave-to {
    position: absolute;
    transform: scale(0.5);
    opacity: 0;
  }
  img {
    width: 100%;
  }
  p,
  li {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #00356b;
    strong {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.05em;
    }
  }
}
.infoCourse {
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
        font-size: 24px;
        line-height: 29px;

        color: #00356b;
        &.active {
          color: #00356b;
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
}

.infoCourse , .infoCourse__body {
  padding-left: 135px;
  padding-right: 150px;
}

@media screen and (max-width : 1400px) {
  .infoCourse,  .infoCourse__body {
    padding-left: 110px;
    padding-right: 150px;
  }
}
</style> 
