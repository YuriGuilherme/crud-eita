import Vue from 'vue';
import Vuex from 'vuex';

import ContactList from './modules/ContactList';
import AddContact from './modules/AddContact';

export const INCREMENT = 'INCREMENT';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ContactList,
    AddContact,
  },
});
