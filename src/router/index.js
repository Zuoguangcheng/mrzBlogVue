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
      path: '/register/',
      name: 'Register',
      component: Register,
    }],
});

router.beforeEach((to, from, next) => {
  /*fetch('is_login').then(res => {
    console.log(res);
    next('/register')
  })*/

  setTimeout(function() {
    console.log(12121);
    // next('/register')
  }, 100)
});

export default router;
