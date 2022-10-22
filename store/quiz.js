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

export const state = () => ({
    quizGenerator: getQuestionsGenerator(QUIZ)
})
  
export const getters = {
    getQuestion(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}