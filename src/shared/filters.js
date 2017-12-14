import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', value => moment(String(value)).format('DD [de] MMMM [de] YYYY, [às] hh[h]mm'));

Vue.filter('formatPhoneNumber', (value) => {
  if (value) {
    const newValue = value.toString().split('');
    newValue.splice(5, 0, '-');
    return newValue.join('');
  }
  return '';
});
