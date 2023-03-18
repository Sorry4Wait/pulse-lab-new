import {defineStore} from "pinia";

export const useCurrentActiveLab = defineStore("useCurrentActiveLab", {
    state: () => ({
        labName: "",
        labParams: null,
        labActive: false,
        currentTimer: 0,
        labSubmitted: false,
    }),
});
