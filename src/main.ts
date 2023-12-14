import { createApp } from 'vue'
// 引入全局样式
import '@/styles/index.scss'
// 引入自定义指令
import directives from './directive'
// 引入路由
import router from './router'
// 引入pinia
import pinia from './store'
import App from './App.vue'

const app = createApp(App)
directives(app)
app.use(router)
app.use(pinia)
app.mount('#app')
