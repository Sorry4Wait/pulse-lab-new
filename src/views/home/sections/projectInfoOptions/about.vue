<template>
  <transition>
        <div v-if="index == linkId">
          <p class="mb-9" v-html="$t('aboutProject.title1')"></p>
          <p>{{$t("aboutProject.title2")}}</p>
        </div>
      </transition>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>