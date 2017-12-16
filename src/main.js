// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueTheMask from 'vue-the-mask';
import VeeValidate from 'vee-validate';
import App from './components/App';
import router from './router';
import store from './store';

import './core/http';
import './shared/filters';

Vue.use(VueTheMask);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
