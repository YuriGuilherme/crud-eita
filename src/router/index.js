import Vue from 'vue';
import Router from 'vue-router';

import ContactList from '@/components/contact-list/ContactList.vue';
import AddContact from '@/components/add-contact/AddContact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList,
    },
    {
      path: '/new',
      name: 'AddContact',
      component: AddContact,
    },
  ],
});
