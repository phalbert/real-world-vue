import Vue from "vue";
import Vuex from "vuex";
import { getEvents, getEvent } from '@/services/events.js'

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
    fetchEvent({ commit, getters, dispatch }, id) {
      let event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', id)
        return event
      }
      else {
        // api call to get event
        return getEvent(id).then(response => {
          commit('SET_EVENT', response.data)
        }).catch(error => {
          const notification = {
            type: 'error',
            message: `There was a problem fetching the event: ${error.message}`
          }
          //TODO: add notification store as a vuex module
          dispatch('notification/add', notification, { root: true })
          throw error
        })
      }

    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});
