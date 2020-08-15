import Vue from 'vue';
import Vuex from 'vuex';
import { Stats } from 'webpack';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2020,
        currentMonth: 8
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        }
    }
});