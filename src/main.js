import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Global store dove salvare variabili utili per ogni componente, la prima che utilizzerò è flashMessages
const GStore = reactive({ flashMessages: '' })

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')
