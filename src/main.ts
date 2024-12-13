import 'primeicons/primeicons.css'
import './assets/main.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'vue3-toastify/dist/index.css'
import ToastPlugin from 'vue-toast-notification'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vue3Toastify, {
  autoClose: 3000,
  clearOnUrlChange: false,
} as ToastContainerOptions)
app.use(router)
app.use(ToastPlugin)

app.mount('#app')
