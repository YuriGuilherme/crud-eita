import Vue from 'vue';
import Vuex from 'vuex';

import ContactList from './modules/ContactList';

export const INCREMENT = 'INCREMENT';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ContactList,
  },
});
