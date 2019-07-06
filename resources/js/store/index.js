import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        items: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, category) {
            state.categories.push(category);
        },
        UPDATE_CATEGORY(state, { index, property, value }) {
            state.categories[index][property] = value;
        },
        REMOVE_CATEGORY(state, index) {
            state.categories.slice(index, 1);
        }
    }
});