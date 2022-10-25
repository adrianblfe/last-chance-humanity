<template>
    <v-btn :class="['generic-button', { 'disabled-btn': disabled }]" outlined :disabled="disabled" @click="$emit('on-click')">
        <slot />
    </v-btn>
</template>

<script>
export default {
    name: 'GButton',
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style lang="scss">
.generic-button {
    border: 3px solid $font-color;
    border-radius: 0px;
    color: $font-color !important;
    text-transform: capitalize;
}

.disabled-btn {
    border-color: rgba(16, 16, 16, 1);
}
</style>