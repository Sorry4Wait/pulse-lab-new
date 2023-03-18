<template>
    <div class="grid grid-cols-12">
        <div
                class="mx-auto min-h-screen w-[450px] overflow-y-hidden py-28 col-span-12 md:col-span-6 px-5"
        >
            <img src="@/assets/img/brand.png" class="mx-auto mb-5"/>
            <h1>{{ $t("loginwelcome") }}</h1>
            <h2>{{ $t("pleaseRegist") }}</h2>
            <c-input :label="$t('enterEmail')" class="mt-11" v-model="username"/>
            <c-inputp :label="$t('parolLabel')" class="mt-3" v-model="password"/>
            <p class="zabil__parol">
                <!-- forgotPassword -->
                {{ $t("forgotPassword") }}
                <a
                        href="mailto:pulselabcat@gmail.com"
                        class="text-blue-800 hover:text-[#2574e1] cursor-pointer"
                >pulselabcat@gmail.com</a
                >
            </p>
            <div>
                <c-checkbox class="mt-[21px]">
                    <!-- saveLogin -->
                    {{ $t("saveLogin") }}
                </c-checkbox>
            </div>
            <div class="btns flex flex-col items-center mt-11">
                <div class="flex flex-col">

                    <CButton class="login_btn" :disabled="isLoading" @click.prevent="validateBeforeSubmit">
                        <CSpinner size="sm" class="mt-[1.5px]" v-if="isLoading"></CSpinner>
                        {{ $t("enter") }}
                    </CButton>
                    <CButton class="login_btn mt-[10px]" @click.prevent="goToHome">
                        {{
                        $t("loginGuest")
                        }}
                    </CButton>

                    <!--          <router-link to="/" class="login_btn mt-[10px]"></router-link>-->
                    <router-link to="/registration" class="reg_link hover:text-[#2574e1]">{{
                        $t("regist")
                        }}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="image h-full col-span-6 hidden md:block"></div>
    </div>
</template>
<script setup>
    import CInputp from "../../components/custom/C-Inputp.vue";
    import CInput from "../../components/custom/C-Input.vue";
    import CCheckbox from "../../components/custom/C-Checkbox.vue";
    import CSpinner from "../../components/custom/C-Spinner.vue";
    import CButton from "@/components/custom/C-Button.vue";

    import {computed, onMounted, ref} from "vue";
    import {auth} from "@/stores/auth";

    let username = ref("developer");
    let password = ref("devel0per");
    let isLoading = ref(false);
    const authUser = auth();
    const validateBeforeSubmit = () => {
        if (username.value && password.value) {
            isLoading.value = true;
            authUser.login({username: username.value, password: password.value}).then(
                (response) => {
                    if (!response) {
                        // this.$myMakeToast(
                        //         this.$globalCreateErrorMessageFromArray(
                        //                 this.authenticationError),
                        //         this.$t("actions.error"),
                        //         "danger"
                        // );
                    }
                    isLoading.value = false;
                    //this.getSidebarFromBackend();
                }
            );
        } else {
            isLoading.value = false;
        }
    };
</script>

<style scoped lang="scss">
    h1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 35px;
        line-height: 35px;
        text-align: center;
        color: #00366b;
        margin-bottom: 5px;
    }

    h2 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 35px;
        text-align: center;
        color: #00366b;
    }

    .reg_link {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #00366b;
        @apply mt-3;
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
            background: #2574e1;
            color: #ffffff;
            transition: 0.3s;
        }
    }

    .image {
        background: url("@/assets/img/login.png");
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain 0;
    }

    .zabil__parol {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #00366b;
        @apply mt-3;
    }
</style>
