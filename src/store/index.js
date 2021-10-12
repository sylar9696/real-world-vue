//import { reactive } from 'vue'
import { createStore } from 'vuex'

//Global store dove salvare variabili utili per ogni componente, la prima che utilizzerò è flashMessages
//export default reactive({ flashMessages: '', event: null })

//Vuex
export default createStore({
  state: {
    user: 'Adam Jahr',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})
