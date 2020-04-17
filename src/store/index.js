import Vue from 'vue'
import Vuex from 'vuex'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    event,
    notification
  }
})
