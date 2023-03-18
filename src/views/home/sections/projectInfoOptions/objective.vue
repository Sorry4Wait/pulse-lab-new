<template>
    <transition>
          <div v-if="index == linkId">
            <p class="mb-9">{{$t("objectiveProject.title1")}}</p>
            <p>{{$t("objectiveProject.title2")}}</p>
          </div>
        </transition>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>