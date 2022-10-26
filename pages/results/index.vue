<template>
    <div class="row">
        <div class="col-12 d-flex justify-center">
            <p id="results-typer-header"></p>        
        </div>
        <div class="col-12 d-flex justify-center">
            <div id="results-typer"></div>
        </div>
        <div class="col-12 d-flex justify-center">
            <p id="result-end" class="text-center"></p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import typer from 'typer-js';

export default {
    data() {
        return {
            numberCorrectAnswers: 0,
            textResultEnd: null,
        };
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

            typer(element, 90)
                .line('De acuerdo, ya vemos que has finalizado la prueba...')
                .line('A continuación vamos a proceder a revisar tus respuesta...')
                .end(() => {
                    this.initReview();
                });
        },

        initReview() {
            const element = document.querySelector('#results-typer');
            const typerResults = typer(element, 90);

            typerResults.pause(1000);
            this.answers.forEach((answer, index) => {
                typerResults.line(`${ index + 1 }. ${ answer}... ${ this.getResult(answer, index) }`);

                if (index + 1 === this.quiz.length) {
                    this.calculateResultEnd();
                }
            });
        },

        getCorrectAnswerIcon() {
            this.numberCorrectAnswers++;
            return '&#10003;';
        },

        getIncorrectAnswerIcon() {
            return '&#215;';
        },

        getResult( answerUser, index ) {
            const { answer, type } = this.quiz[index];

            if (['select', 'text', 'radiobutton'].includes(type)) {
                return answer.trim().toLowerCase().includes(answerUser.trim().toLowerCase()) ? this.getCorrectAnswerIcon() : this.getIncorrectAnswerIcon();
            }

            if (type === 'number') {
                return answer.toString() === answerUser ? this.getCorrectAnswerIcon() : this.getIncorrectAnswerIcon();
            }

            if (type === 'checkbox') {
                return answer.length === 2 && answerUser.every((item) => answer.includes(item)) ? this.getCorrectAnswerIcon() : this.getIncorrectAnswerIcon();
            }
        },

        calculateResultEnd() {
            const element = document.querySelector('#result-end');
            const typerResultEnd = typer(element, 90);
            const percentage = (100 * this.numberCorrectAnswers) / this.quiz.length;
            const successText = `¡¡Enhorabuena humano!! Has acertado el ${ percentage }%. La humanidad podrá seguir su curso gracias a ti...`;
            const failedText = `Lamentable... Solo has acertado el ${ percentage }%. La humanidad perecerá y el reinado de las máquinas empieza ahora...`;
            
            this.textResultEnd = percentage > 60 ? successText : failedText; 
            typerResultEnd.pause(19000).line(this.textResultEnd);
        },
    }
}
</script>
