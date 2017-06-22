import Vue from 'vue';
import Router from 'vue-router';

import fetch from '../lib/server';

import Index from '@/components/Index';
import Single from '@/components/Single';
import New from '@/components/New';
import Register from '@/components/Register';
import Sign from '@/components/Sign';
import FindPassword from '@/components/FindPassword';

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
    }, {
      path: '/sign/',
      name: 'Sign',
      component: Sign,
    }, {
      path: '/find-password/',
      name: 'FindPassword',
      component: FindPassword,
    }],
});

router.beforeEach((to, from, next) => {
  if (String(to.path) === '/sign') {
    next();
  } else {
    fetch('is_login').then(res => {
      if (String(res.code) === '0') {
        dhtmlx.message({ text: '请登录', type: 'error' });
        next('/sign');
      } else {
        next();
      }
    });
  }
});

export default router;
