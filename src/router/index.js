import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/components/Index';
import Single from '@/components/Single';
import New from '@/components/New';
import Register from '@/components/Register';

Vue.use(Router);

export default new Router({
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
      path: '/register/',
      name: 'Register',
      component: Register,
    }],
});
