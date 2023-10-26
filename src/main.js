import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'

import HomePage from '../src/views/HomePage.vue'
import UsPage from '../src/views/UsPage.vue'
import ServicePage from '../src/views/ServicePage.vue'

const routes = [
  
    { 
        path : "/", 
        component : HomePage, 
    },
    { 
        path : "/nosotros", 
        component : UsPage, 
    },
    { 
        path : "/servicios", 
        component : ServicePage,
    },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// createApp(App).use(router).mount('#app')
const app = createApp(App)

app.use(router)
app.mount('#app')
