import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
    state: {
        currentYear: 2020,
        currentMonth: 8,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            {description: 'Random event 1', date: moment('2020-08-03', 'YYYY-MM-DD')},
            {description: 'Random event 2', date: moment('2020-08-17', 'YYYY-MM-DD')},
            {description: 'Random event 3', date: moment('2020-08-19', 'YYYY-MM-DD')}
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            state.events.push({
                description: payload,
                date: state.eventFormDate
            });
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});