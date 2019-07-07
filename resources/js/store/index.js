import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        items: [],
        feedback: ''
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        SET_FEEDBACK(state, feedback) {
            state.feedback = feedback;
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
    },
    actions: {
        saveCategories({ commit, state }) {
            axios.post('/api/categories/upsert', {
                categories: state.categories
            })
                .then((res) => {
                    if (res.data.success) {
                        commit('SET_FEEDBACK', 'Changes saved.');
                        setTimeout(() => commit('SET_FEEDBACK', ''), 3000);
                        commit('SET_CATEGORIES', res.data.categories);
                    }
                });
        },
        removeCategories({ commit, state }, index) {
            let id = state.categories[index].id;

            if (id > 0) {
                axios.delete('/api/categories/' + id)
                    .then(res => commit('REMOVE_CATEGORY', index));
            }

            commit('REMOVE_CATEGORY', index);
        }
    }
});