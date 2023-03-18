<template>
    <div class="grid grid-cols-12">
        <div
                class="mx-auto min-h-screen overflow-y-hidden py-28 col-span-12 md:col-span-6 px-5 md:px-1 md:w-4/6"
        >
            <img src="@/assets/img/brand.png" alt="img" class="mx-auto"/>
            <h1 class="text-blue-800 text-center text-[35px] pt-[20px]">
                {{ $t("reg") }}
            </h1>
            <CInput class="mt-[35px]" :label="$t('nameSurname')" v-model="userForm.username"></CInput>
            <CInput class="mt-[10px]" :label="$t('email')" v-model="userForm.email"></CInput>
            <c-vueselect
                    :label="$t('placeStudy')"
                    :options="options"
                    :keylabel="'label'"
                    v-model="userForm.placeStudy"
                    class="mt-3"
            />
            <CInputp class="mt-[10px]" :label="$t('parolLabel2')" v-model="userForm.password"></CInputp>
            <CCheckbox class="mt-[12px]">
                {{ $t("agreement") }}
            </CCheckbox>
            <div class="btns flex flex-col items-center mt-11">
                <button class="login_btn" @click.prevent="registrationFunc">
                    {{ $t("regist") }}
                </button>
            </div>
        </div>
        <div class="image h-full col-span-6 hidden md:block"></div>
    </div>
</template>
<script setup>
    import CInput from "../../components/custom/C-Input.vue";
    import CInputp from "../../components/custom/C-Inputp.vue";
    import CCheckbox from "../../components/custom/C-Checkbox.vue";
    import CSelect from "../../components/custom/C-Select.vue";
    import CVueselect from "../../components/custom/CVueselect.vue";
    import {computed, onMounted, reactive, ref} from "vue";
    import {auth} from "@/stores/auth";
    import { useI18n } from "vue-i18n";

    let {t} = useI18n();

    const userForm = reactive({
        username: "",
        email: "",
        password: "",
        placeStudy: ""
    });
    let isLoading = ref(false);
    const registrationFunc = async () => {
        // await SignService.up(this.userForm).then(response => {
        //     console.log(response)
        // })
    };
    const options = computed(() => [
        {
            value: t("region.label1"),
        },
        {
            value: t("region.label2"),

        },
        {
            value: t("region.label3"),
        },
    ]);
</script>

<style scoped lang="scss">
    .image {
        background: url("@/assets/img/sing-up.png");
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain 0;
    }

    .login_btn {
        border: 1px solid #00366b;
        border-radius: 5px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #00366b;
        @apply px-5 py-[10px] min-w-[190px];
        &:hover,
        &:focus {
            border-color: transparent;
            color: #ffffff;
            transition: 0.3s;
            background: #2574e1;
        }
    }

    :root {
        --vs-border-width: 5px;
    }
</style>
