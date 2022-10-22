<template>
    <nuxt-link class="generic-link" :to="to">
        <slot />
    </nuxt-link>
</template>

<script>
export default {
    name: 'GLink',
    props: {
        to: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.generic-link {
    border: 3px solid $font-color;
    border-radius: 0px;
    color: $font-color !important;
    text-transform: capitalize;
    text-decoration: none;
    padding: 5px;
}
</style>
