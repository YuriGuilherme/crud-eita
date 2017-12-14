import Vue from 'vue';
import Router from 'vue-router';

import ContactList from '@/components/contact-list/ContactList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList,
    },
  ],
});
