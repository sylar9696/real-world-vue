import { reactive } from 'vue'

//Global store dove salvare variabili utili per ogni componente, la prima che utilizzerò è flashMessages
export default reactive({ flashMessages: '', event: null })
