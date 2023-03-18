import { defineStore } from "pinia";

export const useGlobalStore = defineStore("useGlobalStore", {
    state: () => ({
        sideBarMini:false
    }),
});
