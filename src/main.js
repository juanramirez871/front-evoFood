import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './shared/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import vueCookies from 'vue-chartjs'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(vueCookies)
app.use(ElementPlus)

app.mount('#app')