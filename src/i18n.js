import { createI18n } from 'vue-i18n'
import ru from "@/locales/ru";
import uz from "@/locales/uz";
import en from "@/locales/en";


function loadLocaleMessages() {
    const messages = {
        ru,
        uz,
        en,

    };
    return messages;
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'uz',// set locale
    fallbackLocale: 'ru', // set fallback locale
    messages: loadLocaleMessages() // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});
export default i18n;
