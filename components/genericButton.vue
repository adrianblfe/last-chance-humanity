<template>
    <v-btn class="generic-button" outlined @click="$emit('on-click')">
        <slot />
    </v-btn>
</template>

<script>
export default {
    name: 'GButton',
}
</script>

<style lang="scss">
.generic-button {
    border: 3px solid $font-color;
    border-radius: 0px;
    color: $font-color !important;
    text-transform: capitalize;
}
</style>