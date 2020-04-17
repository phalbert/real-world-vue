import Vue from "vue";
import Vuex from "vuex";
import { getEvents } from '@/services/events.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    event: null
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, id) {
      state.event = state.events.find(event => event.id === id)
    }
  },
  actions: {
    fetchEvents({ commit }) {
      getEvents().then(events => commit('SET_EVENTS', events))
    },
    fetchEvent({ commit }, id) {
      commit('SET_EVENT', id)
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});
