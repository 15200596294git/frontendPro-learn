import { createApp } from 'vue'
import App from './App.vue'
// main.ts
import 'virtual:uno.css'
import '@unocss/reset/eric-meyer.css'

const app = createApp(App)

app.mount('#app')
