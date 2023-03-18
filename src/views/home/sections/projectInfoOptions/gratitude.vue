<template>
    <transition>
          <div v-if="index == linkId">
            <p class="mb-9">{{$t("gratitude.title1")}}</p>
            <p>{{$t("gratitude.title2")}}</p>
          </div>
        </transition>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>