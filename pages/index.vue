<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <p id="typer"></p>
    </v-col>
    
    <v-col v-if="showInitGameButton" cols="12" sm="8" md="6" class="d-flex justify-end">
      <!-- <nuxt-link to="/quiz">Comenzar</nuxt-link> -->
      
    </v-col>
  </v-row>
</template>

<script>
import typer from 'typer-js';
import GLink from '@/components/genericLink.vue'

export default {
  name: 'IndexPage',
  component: {
    GLink
  },
  data() {
    return {
      showInitGameButton: false
    };
  },
  mounted() {
    this.typeIntroduction();
  },
  methods: { 
    typeIntroduction() {
      const element = document.querySelector('#typer');
      typer(element, 90)
        .line('Hola humano, eres el último de tu especie')
        .line('está en tus manos la oportunidad')
        .line('de salvar a la humanidad, para ello,')
        .line('deberás contestar correctamente a 10 preguntas...')
        .line('¿Estás preparado?')
        .end(() => {
          this.showInitGameButton = true
        });
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
