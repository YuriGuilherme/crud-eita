import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://staging.api.meuprospere.com.br/v1';
Vue.http.options.headers = {
  'access-token': 'vNxE72a7bWqbtcsgQRQMcKXg',
  uid: 'yurigm97@hotmail.com',
};
