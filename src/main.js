import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/font/font.css'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueAxios,Axios)
app.mount('#app')
Axios.defaults.baseURL = 'http://localhost:8081/'
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'