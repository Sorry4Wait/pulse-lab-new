<template>
    <div  v-if="toasts.length" class="flex flex-col-reverse relative">
        <toast
                :style="`transform: translate(0px, 0px); top: ${15 + (idx * 101)}px;`"
                v-for="(toast,idx) in toasts"
                :toast="toast"
                :key="toast.id">
        </toast>

    </div>
</template>

<script setup>
    import {computed,ref,watch} from 'vue';
    import toast from './toast.vue';
    import { useToastsStore } from "@/stores/toasts.js";
    const toastsStore = useToastsStore();
    let toasts = computed(() => toastsStore.list);
</script>

<style lang="scss" scoped>
    .fade-move,
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    }

    /* 2. declare enter from and leave to state */
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: scaleY(0.01) translate(30px, 0);
    }

    /* 3. ensure leaving items are taken out of layout flow so that moving
          animations can be calculated correctly. */
    .fade-leave-active {
        position: absolute;
    }
</style>