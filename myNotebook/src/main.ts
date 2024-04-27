import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import store from '@/store';
import router from '@/router';
import '@/styles/index.less'
const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app',true)
