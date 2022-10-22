<template>
    <v-row>
        <v-col cols="6" offset="3">
            <div class="container-quiz">
                <p id="question-quiz"></p>
                <div class="answers-quiz">
                    
                </div>
            </div>
        </v-col>
        
        <v-col cols="6" offset="3" class="d-flex justify-end">
            <GenericButton @on-click="nextQuestion">Siguiente</GenericButton>
        </v-col>
    </v-row>
</template>

<script>
import QUIZ from '@/assets/questions.json';

function* getQuestionsGenerator(questions) {
    for(const question in questions.quiz) {        
        if (questions.quiz.length === question + 1) {
            return questions.quiz[question];
        } else {
            yield questions.quiz[question];
        }
    }
}

export default {
    name: 'Quiz',
    component: {
        GenericButton: () => import('@/components/genericButton.vue')
    },
    data() {
        return {
            quiz: QUIZ,
            generatorQuiz: null,
            question: null,
        };
    },
    mounted() {
        this.generatorQuiz = getQuestionsGenerator(this.quiz);
    },
    methods: {
        nextQuestion() {
            this.question = this.generatorQuiz.next();
        }
    }
}
</script>

<style lang="scss">
</style>
