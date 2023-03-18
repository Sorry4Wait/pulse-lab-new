<template>
    <transition>
          <div v-if="index == linkId">
            <p class="mb-9">{{$t("uniquenessProject.title1")}}</p>
            <p>{{$t("uniquenessProject.title2")}}</p>
          </div>
        </transition>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>