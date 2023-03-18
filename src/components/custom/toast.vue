<template>
    <div :id="`${toast.id}`" class="toastify on  toastify-right relative" aria-live="polite"
         :style="style">
        <div class="py-5 pl-5 bg-white border rounded-lg shadow-xl pr-14 border-slate-200/60 dark:bg-darkmode-600 dark:text-slate-300 dark:border-darkmode-600 flex _jc1duphc2">
            <template v-if="toast.type === 'success'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="stroke-1.5 text-success">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </template>
            <template v-if="toast.type === 'danger'">
                <XCircleIcon class="text-danger" />
            </template>


            <div class="ml-4 mr-4">
                <div class="font-medium">{{toast.title}}</div>
                <div class="mt-1 text-slate-500"> {{toast.message}}</div>
            </div>
        </div>
        <button type="button" aria-label="Close" class="toast-close" @click="dismissToast">✖</button>
    </div>

</template>
<script setup>
    import {defineProps, onMounted, ref} from 'vue';
    import {useToastsStore} from "@/stores/toasts.js";

    const toastsStore = useToastsStore();
    let delay = ref(10);
    const props = defineProps({
        toast: {
            required: true, type: Object,
            default: () => ({
                type: 'success',
                title: 'title',
                message: '',
                onUI: false,
            }),
        },
        style:{
            type:String
        }
    });
    function dismissToast() {
        toastsStore.list = toastsStore.list.filter(el => el.id !== props.toast.id)
    }
    onMounted(() => {
        setTimeout(() => {
            dismissToast();
        }, (delay.value - 1) * 1000);
    })

    // delayClass() {
    //     return {
    //         '--delay': this.delay + 's',
    //         '--max-width': 90 + '%'
    //     }
    // },
    // bgToast() {
    //     let toastClass = 'bg-toast-success';
    //     if (this.toast.type === 'danger') {
    //         toastClass = 'bg-toast-danger';
    //     }
    //     return toastClass
    // },
    // bgToastDarker() {
    //     let toastClass = 'bg-toast-success-darker';
    //     if (this.toast.type === 'danger') {
    //         toastClass = 'bg-toast-danger-darker';
    //     }
    //     return toastClass
    // },
    // svgFill() {
    //     let fill = "#1B6F14";
    //     if (this.toast.type === 'danger') {
    //         fill = '#D70A03';
    //     }
    //     return fill
    // }
</script>


<style lang="scss" scoped>
    .modal-time-line {
        /*-webkit-animation: thread2 var(--delay) infinite;*/
        /*-moz-animation:    thread2 var(--delay) infinite;*/
        /*-o-animation:      thread2 var(--delay) infinite;*/
        animation: thread2 var(--delay) infinite;
    }

    @-webkit-keyframes thread2 {
        from {
            width: var(--max-width);
        }
        to {
            width: 0px;
        }
    }

    @-moz-keyframes thread2 {
        from {
            width: var(--max-width);
        }
        to {
            width: 0px;
        }
    }

    @-o-keyframes thread2 {
        from {
            width: var(--max-width);
        }
        to {
            width: 0px;
        }
    }

    @keyframes thread2 {
        from {
            width: var(--max-width);
        }
        to {
            width: 0px;
        }
    }

    .app-toast:hover {
        hr {
            animation-play-state: paused;
        }
    }
</style>