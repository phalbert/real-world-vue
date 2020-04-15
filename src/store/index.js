import Vue from "vue";
import Vuex from "vuex";
import { getEvents } from '@/services/events.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    fetchEvents({ commit }) {
      getEvents().then(events => commit('SET_EVENTS', events))
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});
