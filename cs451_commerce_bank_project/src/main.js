import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import TransactionPage from './pages/TransactionPage.vue';
import UserRegistrationPage from './pages/UserRegistrationPage.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: { title: '' }
  },
  {
    path: '/user-registration',
    name: 'User Registration',
    component: UserRegistrationPage
  },
  {
    path: '/notification-rules',
    name: 'Home Page',
    component: HomePage,
    meta: { title: 'Home' }
  },
  {
    path: '/transactions',
    name: 'Transaction Page',
    component: TransactionPage,
    meta: { title: 'Transaction' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h =>h(App)
}).$mount('#app');
