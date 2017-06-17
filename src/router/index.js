import Vue from 'vue';
import Router from 'vue-router';

import fetch from '../lib/server';

import Index from '@/components/Index';
import Single from '@/components/Single';
import New from '@/components/New';
import Register from '@/components/Register';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/single/:id',
      name: 'Single',
      component: Single,
    }, {
      path: '/new/',
      name: 'New',
      component: New,
    }, {
      path: '/edit/:id',
      name: 'Edit',
      component: New,
    }, {
      path: '/register/',
      name: 'Register',
      component: Register,
    }],
});

router.beforeEach((to, from, next) => {
  if (String(to.path) === '/register') {
    next();
  } else {
    fetch('is_login').then(res => {
      if (String(res.code) === '0') {
        dhtmlx.message({ text: '请登录', type: 'error' });
        next('/register');
      } else {
        next();
      }
    });
  }
});

export default router;
