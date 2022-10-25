<template>
    <div class="quizQuestion">
        <p>{{ counter }}. {{ quiz.question }}</p>
        <div>
            <v-text-field
                v-if="['number', 'text'].includes(quiz.type)"
                v-model="value"
                hide-details
                single-line
                :type="quiz.type"
                color="green"
            />

            <v-select
                v-if="quiz.type === 'select'"
                v-model="value"
                :items="quiz.options"
                color="green"
                hide-details
            ></v-select>

            <v-radio-group v-if="quiz.type === 'radiobutton'" v-model="value">
                <v-radio
                    v-for="option in quiz.options"
                    :key="option"
                    :value="option"
                    color="green"
                >
                <template #label>
                    <div class="radio-color">{{option}}</div>
                </template>
                </v-radio>
            </v-radio-group>

            <span v-if="quiz.type === 'checkbox'">
                <v-checkbox
                    v-for="option in quiz.options"
                    :key="option"
                    v-model="checkboxValue"
                    color="green"
                    :value="option"
                    hide-details
                >
                    <template #label>
                        <span class="checkbox-color">{{ option }}</span>
                    </template>
                </v-checkbox>
            </span>
        </div>
        <div class="d-flex justify-end mt-5">
            <GenericButton :disabled="isDisabled()" @on-click="setValue">
                {{ isLastQuestion() ? 'Finalizar' : 'Siguiente' }}
            </GenericButton>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    components: {
        GenericButton: () => import('@/components/genericButton.vue'),
    },
    props: {
        quiz: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            value: null,
            checkboxValue: []
        };
    },
    computed: {
        ...mapState({
            questions: 'quiz',
            counter: 'counter',
        }),
    },
    methods: {
        resetValues() {
            this.checkboxValue = [];
            this.value = null;
        },
        setValue() {
            const value = this.quiz.type !== 'checkbox' ? this.value : this.checkboxValue;
            this.$store.dispatch('setAnswer', value);
            this.resetValues();

            if (this.isLastQuestion()) {
                this.$router.push('/results');
            } else {
                this.$emit('next-question');
            }
        },
        isLastQuestion() {
            return this.questions.length === this.counter;
        },
        isDisabled() {
            return (this.quiz.type !== 'checkbox' && !this.value) || (this.quiz.type === 'checkbox' && !this.checkboxValue.length);
        }
    }
}
</script>

<style lang="scss">
input, .v-select__selection, .radio-color, .checkbox-color {
    color: green !important;
}
</style>