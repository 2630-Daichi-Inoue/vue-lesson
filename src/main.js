import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from './components/BaseIcon.vue'
import 'animate.css'
import router from './router'
import { createPinia } from 'pinia'
import { useCounterStore } from './stores/counter'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const counterStore = useCounterStore()
console.log('main.js', counterStore.count)
app.component('BaseIcon', BaseIcon)

app.use(router)
app.mount('#app')
