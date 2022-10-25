import QUIZ from '@/assets/questions.json';

export const state = () => ({
    quiz: QUIZ.quiz,
    answers: [],
    counter: 0
});

export const getters = {
    getQuestion(state) {
        return state.quiz[state.counter];
    }
};

export const mutations = {
    INCREMENT_COUNTER(state, value) {
        state.counter++;
    },
    SET_ANSWER(state, value) {
        state.answers.push(value);
    },
    REMOVE_VALUE(state, value) {
        state.answers = state.answers.filter((answer) => answer !== value);
    }
};

export const actions = {
    counterUp({ state, commit }) {
        commit('INCREMENT_COUNTER');
    },
    setAnswer({ state, commit }, value) {
        commit('SET_ANSWER', value);
    },
    removeAnswer({ state, commit }, value) {
        commit('REMOVE_ANSWER', value);
    }
}
