import { defineStore } from "pinia";

export const useGuestStore = defineStore("useGuestStore", {
    state: () => ({
        currentCourse : "seismic",
        labTypes : [
            {
                name: 'seismicName',
                id:'elastic-module',
                color: "#2FA1DB",

            },
            {
                name: 'electricalName',
                id:'vertical-electrical-sounding',
                color: "#D95123",
            },
            {
                name: 'magneticName',
                id:'elastic-module',
                color: "#2222DC",
            },
            {
                name: 'gravityName',
                id:'elastic-module',
                color: "#9F330F",
            },
            {
                name: 'seismologicName',
                id:'earthquake-epicenter',
                color: "#15BBBB",
            },
        ],
        defaultSelectedCourse:{
            name: 'seismicName',
            id:'elastic-module',
            color: "#2FA1DB",
        },
    }),
});
