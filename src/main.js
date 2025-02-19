import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import '@/assets/styles/base.css'
import '@/assets/styles/main.css'
import { Loading } from '@element-plus/icons-vue'

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.mount('#app')

app.component('Loading', Loading)
