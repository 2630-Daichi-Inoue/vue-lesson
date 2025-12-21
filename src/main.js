import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from './components/BaseIcon.vue'
import 'animate.css'
import router from './router'

const app = createApp(App)
app.component('BaseIcon', BaseIcon)

app.use(router)
app.mount('#app')
