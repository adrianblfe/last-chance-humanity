<template>
  <v-row>
    <v-col cols="6" offset="3">
      <p id="typer"></p>
    </v-col>
    
    <v-col v-if="showInitGameButton" cols="6" offset="3" class="d-flex justify-end">
      <GenericLink :to="'/quiz'">Comenzar</GenericLink>
    </v-col>
  </v-row>
</template>

<script>
import typer from 'typer-js';

export default {
  name: 'IndexPage',
  component: {
    GenericLink: () => import('@/components/genericLink.vue')
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
      typer(element, 9) // Añadir 90 de velocidad
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
