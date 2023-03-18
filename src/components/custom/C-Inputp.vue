<template>
    <label
            :class="{ focus: focus }"
            :for="id"
            class="flex items-center cursor-text justify-between"
    >
        <div class="flex flex-col flex-grow">
            <span>{{ label }}</span>
            <input
                    @focus="focus = true"
                    @blur="focus = false"
                    :type="type"
                    :id="id"
                    v-model="model"
                    @input="$emit('update:modelValue', model)"
                    class="outline-none border-none w-full bg-inherit"
            />
        </div>
        <div class="icon cursor-pointer">
            <svg
                    @click="show = false"
                    v-if="show"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="eye"
            >
                <path
                        d="M2.12891 9.3125C2.12891 9.3125 5.38871 13.0375 11.4426 13.0375C17.4966 13.0375 20.7564 9.3125 20.7564 9.3125"
                        stroke="#818A93"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M20.7564 13.0378L18.8973 10.8475M3.99165 10.8447L2.12891 13.0378L3.99165 10.8447Z"
                        stroke="#818A93"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
                <path
                        d="M14.2931 12.7467L15.1658 15.3654M8.56612 12.7393L7.71484 15.3654L8.56612 12.7393Z"
                        stroke="#818A93"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                />
            </svg>
            <svg
                    @click="show = true"
                    v-if="!show"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="show"
            >
                <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.93799 8.5797C7.55608 2.47343 16.4439 2.47343 20.062 8.5797C21.3127 10.6905 21.3127 13.3095 20.062 15.4203C16.4439 21.5266 7.55608 21.5266 3.93799 15.4203C2.68734 13.3095 2.68734 10.6905 3.93799 8.5797ZM9.36532 12.0548C9.36532 10.5934 10.5446 9.41018 11.9995 9.41018C13.4547 9.41018 14.6347 10.5937 14.6347 12.0548C14.6347 13.5148 13.4548 14.6984 11.9995 14.6984C10.5444 14.6984 9.36532 13.5151 9.36532 12.0548ZM11.9995 8.17147C9.86264 8.17147 8.13103 9.90954 8.13103 12.0548C8.13103 14.1992 9.86276 15.9371 11.9995 15.9371C14.136 15.9371 15.869 14.1995 15.869 12.0548C15.869 9.90928 14.1361 8.17147 11.9995 8.17147Z"
                        fill="#818A93"
                />
            </svg>
        </div>
    </label>
</template>

<script>
    export default {
        data() {
            return {
                focus: false,
                show: false,
                id: "",
                model: ''
            };
        },
        props: {
            label: {
                default: "Enter the password",
            },
            modelValue: ''
        },
        computed: {
            type() {
                if (this.show) return "text";
                else return "password";
            },
        },
        created() {
            this.model = this.modelValue;
            this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
        },
    };
</script>

<style lang="scss" scoped>
    .icon {
        @apply flex w-[22px] w-[22px] justify-center items-center;
        svg {
            @apply flex w-full h-full items-center justify-center;
        }
    }

    label {
        padding: 9px 19px 9px 15px;
        background: #ffffff;
        border-top: 1px solid #fff;
        border-left: 4px solid #fff;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        transition: 0.3s;

        &.focus {
            border-top: 1px solid #3a86f3;
            border-left: 4px solid #3a86f3;
            border-bottom: 1px solid #3a86f3;
            border-right: 1px solid #3a86f3;
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1));
            border-radius: 2.5px 8px 8px 2.5px;

            input {
                border: none !important;
                box-shadow: none;
            }

            svg {
                path {
                    transition: 0.3s;
                }

                &.show {
                    path {
                        fill: #00366b;
                    }
                }

                &.eye {
                    path {
                        stroke: #00366b;
                    }
                }
            }
        }

        span {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 10px;

            color: rgba(4, 22, 40, 0.5);
        }

        input {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #00366b;
        }
    }
</style>
