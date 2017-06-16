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
      /*beforeEnter: (to, from, next) => {
       setTimeout(function() {
       next('/register');
       }, 2000);
       },*/
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
  // console.log('from', String(from.path));
  if (String(to.path) === '/register') {
    console.log(111);
    next();
  } else {
    fetch('is_login').then(res => {
      console.log(res.code);
      if (String(res.code) === '0') {
        next('/register');
      } else {
        next();
      }
    });
  }

  /* setTimeout(function() {
   console.log(JSON.stringify(window.lll));
   if (!(window.lll === '232323')) {
   console.log(1);
   window.lll = '232323';
   next('/register');

   } else {
   console.log(2);
   next();
   }

   }, 2000);*/
});

export default router;
