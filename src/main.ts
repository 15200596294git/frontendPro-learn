import { createApp } from 'vue'
import App from './App.vue'
// main.ts
import 'virtual:uno.css'
import '@unocss/reset/eric-meyer.css'
import router from  './route/index'
import './assets/base.css'

// debugger
const app = createApp(App)

app.use(router)
app.mount('#app')
