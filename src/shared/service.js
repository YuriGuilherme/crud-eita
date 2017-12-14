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
    let errMsg;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    throw new Error(errMsg);
  },
};
