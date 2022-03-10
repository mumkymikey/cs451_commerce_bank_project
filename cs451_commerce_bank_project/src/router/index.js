import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../pages/LoginPage';
import HelloWorld from '../components/HelloWorld';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/notification-rules',
      component: HelloWorld
    }
  ]
})
