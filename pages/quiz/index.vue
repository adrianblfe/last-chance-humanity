<template>
    <v-row>
        <v-col cols="6" offset="3">
            <div class="container-quiz">
                <p id="question-quiz"></p>
                <div class="answers-quiz">
                    <QuizQuestion :quiz="question" @next-question="nextQuestion" />
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Quiz',
    component: {
        QuizQuestion: () => import('@/components/quizQuestion.vue'),
    },
    data() {
        return {
            question: {},
        };
    },
    computed: {
        ...mapGetters(['getQuestion']),
    },
    mounted() {
        this.nextQuestion();
    },
    methods: {
        ...mapActions(['counterUp']),
        nextQuestion() {
            this.question = this.getQuestion;
            this.counterUp();
        },
    }
}
</script>

<style lang="scss">
</style>
