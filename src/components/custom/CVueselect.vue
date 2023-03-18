<template>
    <label
            :class="{ focus: focus }"
            :for="id"
            class="flex items-center cursor-text justify-between cutom__vue-select"
    >
        <div class="flex flex-col flex-grow">
            <span>{{ label }}</span>
            <v-select class="border-none" :id="id" :options="options"
                      label="value"
                      taggable v-model="model"
                      :reduce="item => item.value"
            ></v-select>
        </div>
    </label>
</template>

<script>
    export default {
        data() {
            return {};
        },
        props: {
            type: {
                default: "text",
                id: "text",
            },
            options: {
                default: [],
            },
            label: {
                default: "Введите e-mail",
            },
            keylabel: {
                default: "label",
            },
            modelValue:''
        },
        data() {
            return {
                focus: false,
                model: ""
            };
        },
        created() {
            this.model = this.modelValue;
            this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
        },
        watch:{
            model:{
                handler(newValue){
                    this.$emit('update:modelValue', newValue)
                }
            }
        }
    };
</script>

<style lang="scss">
    label.cutom__vue-select {
        background: #ffffff;
        border-top: 1px solid #fff;
        border-left: 4px solid #fff;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        transition: 0.3s;

        .vs__selected {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            color: #00366b;
        }

        &.focus {
            border-top: 1px solid #3a86f3;
            border-left: 4px solid #3a86f3;
            border-bottom: 1px solid #3a86f3;
            border-right: 1px solid #3a86f3;
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.1));
            border-radius: 2.5px 8px 8px 2.5px;

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
            padding: 9px 19px 9px 15px;

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

    .vs__dropdown-toggle {
        border: none !important;
    }
</style>
