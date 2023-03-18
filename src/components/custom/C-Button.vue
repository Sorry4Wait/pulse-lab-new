<template>
    <component
            class="font-medium flex justify-center cursor-pointer"
            :is="buttonType"
            :disabled="disabled"
            :href="href"
            :type="type"
            :class="btnClasses"
            v-on="$listeners"
    >
        <slot></slot>
    </component>
</template>
<script>
    export default {
        name: "CButton",
        props: {
            href: {
                required: false,
                type: String,
                default: null
            },
            type: {
                type: String,
                default: "button" //button, submit
            },
            id: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: false
            },
            variant: {
                type: String,
                default: ""
            },
            size: {
                type: String,
                default: "" //sm, md, lg
            },
            outline: {
                type: Boolean,
                default: false
            },
            icon: Boolean,
            round: Boolean,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            colorClasses() {
                const variant = this.variant;
                const baseClasses = `btn-${variant}`;
                const outlineClasses = `btn-outline-${variant}`;
                return this.outline ? outlineClasses : baseClasses;
            },
            sizeClasses() {
                const isIcon = this.icon;
                const sizeMappings = {
                    sm: `h-8 text-sm ${isIcon ? "px-2" : "px-4"}`,
                    md: `h-10 ${isIcon ? "px-3" : "px-6"}`,
                    lg: `text-lg h-12 ${isIcon ? "px-4" : "px-12"}`
                };

                return sizeMappings[this.size] || sizeMappings.md;
            },
            btnClasses() {
                const borderRadiusClasses = this.round ? "rounded-full" : "rounded";
                const disabledClass = this.disabled ? "disabled" : "";
                let finalClasses = ``;
                if(this.variant){
                    finalClasses += this.colorClasses + " "
                }
                if(this.size){
                    finalClasses += this.sizeClasses + " "
                }
                finalClasses += `${borderRadiusClasses} ${disabledClass}`
                return `${borderRadiusClasses} ${disabledClass}`;
            },
            buttonType() {
                if (this.href) {
                    return "a";
                } else {
                    return "button";
                }
            }
        },
    };
</script>