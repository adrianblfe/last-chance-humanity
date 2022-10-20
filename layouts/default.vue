<template>
  <v-app>
    <v-main>
      <v-container class="d-flex align-center">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.96), rgba(0, 0, 0, 0.96)), url('@/assets/tv-old.gif');
  background-repeat: repeat;
  color: $font-color;
  font-family: $font-family;
}
</style>
