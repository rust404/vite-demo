import { createApp } from 'vue'
import App from './App.vue'
import About from './views/About.vue'
import Index from './views/Index.vue'
import PopUp from './components/PopUp.vue'
import './index.css'
import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/about',
    component: About,
  }, {
    path: '/',
    component: Index
  }]
})

const app = createApp(App)
app.use(router)
app.component('Index', Index)
app.component('About', About)
app.component('PopUp', PopUp)
app.mount('#app')
