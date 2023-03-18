import { defineStore } from "pinia";

export const useToastsStore = defineStore("useToastsStore", {
    state: () => ({
        list:[]
    }),
    getters: {
        listState(state) {
            return state.list;
        },
    },
});
