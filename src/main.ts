import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.scss';

import App from './App.vue';
import MainPage from './pages/MainPage.vue';
import CardPage from './pages/CardPage.vue';
import CardOverview from "./pages/CardOverview.vue";

const routes = [
  { path: '/', component: MainPage },
  { path: '/posts', component: CardOverview },
  { path: '/posts/:cardId', name: 'postsSwitch', component: CardPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);

app.use(router)

app.mount('#app')