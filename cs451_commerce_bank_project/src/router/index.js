import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../pages/LoginPage';
import NotificationRulesPage from '../pages/NotificationRulesPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/notification-rules',
      component: NotificationRulesPage
    }
  ]
})
