// main CSS
import '../src/assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// main.js/ts
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import App from './App.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')
