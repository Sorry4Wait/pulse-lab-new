<template>
<div
    class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
>
  <nav class="w-full sm:w-auto sm:mr-auto">
    <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <ChevronsLeftIcon class="w-4 h-4"/>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <ChevronLeftIcon class="w-4 h-4"/>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">...</a>
    </li>

    <li class="page-item"
        v-for="pages of showArray"
    :key="pages.name">
      <a
          class="page-link"
          :class="pages.class"
          @click.prevent="$emit('update:modelValue', pages.name)"
      >{{pages.name+1}}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">...</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <ChevronRightIcon class="w-4 h-4"/>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">
        <ChevronsRightIcon class="w-4 h-4"/>
      </a>
    </li>
  </ul>
</nav>
<select class="w-20 form-select box mt-3 sm:mt-0">
  <option>10</option>
  <option>25</option>
  <option>35</option>
  <option>50</option>
</select>
</div>
</template>
<script setup>
import {defineProps, defineEmits, computed, ref, watch, onMounted} from 'vue';
const emit = defineEmits(['update:modelValue']);
let props = defineProps({
  modelValue:{
    type:Number
  },
  total:{
    type:Number,
  },
  limit:{
    type:Number
  }
});
let pageArray = ref([]);
let pageCount  = computed(() => {
  if(props.total <= props.limit) {
    console.log("0")
    pageArray.value = [{
      name:0,
      class:"isActive"
    }]
     return 1;
  }else{
     pageArray.value=[]
    let a = Math.ceil(props.total /props.limit);
    for(let i=0; i<a; i++){
      pageArray.value.push({
        name:i,
        class: i===props.modelValue ? "active": ""
      });
      }
     return pageArray.value.length
}})

let showArray = computed(()=>{
  console.log(pageCount.value)
  console.log(props.modelValue)
   if(pageCount.value > props.modelValue ){
    if(props.modelValue === 0){
      return pageArray.value.slice(0, 3)
    }else{
      return pageArray.value.slice(props.modelValue-1, props.modelValue+2)
    }
  } else{
    return pageArray.value.slice(props.modelValue-2, props.modelValue+1)
  }
})

</script>
