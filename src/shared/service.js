import Vue from 'vue';

export default {
  getContacts() {
    return Vue.http.get('contacts')
      .then(this.extractData)
      .catch(this.handleError);
  },
  extractData(response) {
    const body = response.json();
    return body || {};
  },
  handleError(error) {
    const errMsg = `${error.status} - ${error.statusText || ''} ${error.url}`;
    throw new Error(errMsg);
  },
};
