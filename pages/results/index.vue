<template>
    <div class="row">
        <div class="col-12 d-flex justify-center">
            <p id="results-typer-header"></p>        
        </div>
        <div class="col-12 d-flex justify-center">
            <div id="results-typer"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import typer from 'typer-js';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(['quiz', 'answers'])
    },
    mounted() {
        this.typeResultsHeader();
    },
    methods: {
        typeResultsHeader() {
            const element = document.querySelector('#results-typer-header');
            typer(element, 9) // Añadir 90 de velocidad
                .line('De acuerdo, ya vemos que has finalizado la prueba...')
                .line('A continuación vamos a proceder a revisar tus respuesta...')
                .end(() => {
                    this.initReview();
                });
        },

        initReview() {
            const element = document.querySelector('#results-typer');
            const typerResults = typer(element, 9); 
            this.answers.forEach((answer, index) => {
                typerResults.line(`${ index + 1 }. ${ answer}... ${ this.getResult(answer, index) }`);
            });
        },

        getResult( answerUser, index ) {
            const { answer, type } = this.quiz[index];
            const correctIcon = '&#10003;';
            const incorrectIcon = '&#215;';

            if (['select', 'text', 'radiobutton'].includes(type)) {
                return answer.trim().toLowerCase().includes(answerUser.trim().toLowerCase()) ? correctIcon : incorrectIcon;
            }

            if (type === 'number') {
                return answer.toString() === answerUser ? correctIcon : incorrectIcon;
            }

            if (type === 'checkbox') {
                return answer.length === 2 && answerUser.every((item) => answer.includes(item)) ? correctIcon : incorrectIcon;
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>