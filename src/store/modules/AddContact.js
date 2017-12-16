import service from '../../shared/service';
import * as types from '../mutation-types';


function newContact() {
  return {
    name: '',
    background: '',
    phones: [
      {
        code: '',
        number: '',
      },
    ],
    emails: [
      {
        address: '',
      },
    ],
    contact_source_id: null,
  };
}

const initialState = {
  isSendingContact: false,
  contactSources: [],
  newContact: newContact(),
};

const getters = {
  newContact: state => state.newContact,
  getContactSources: state => state.contactSources,
  isSendingContact: state => state.isSendingContact,
};

const actions = {
  getContactSources({ commit }) {
    service.getContactSources()
      .then((data) => {
        commit(types.RECEIVE_CONTACTS_SOURCES, {
          contactSources: data,
        });
      });
  },
  addPhoneNumber({ commit }) {
    commit(types.ADD_PHONE_NUMBER);
  },
  addEmailAddress({ commit }) {
    commit(types.ADD_EMAIL_ADDRESS);
  },
  changeIsSendingData({ commit }) {
    commit(types.CHANGE_IS_SENDING_DATA);
  },
  resetFormData({ commit }) {
    commit(types.RESET_STATE);
  },
};

const mutations = {
  [types.RECEIVE_CONTACTS_SOURCES](state, { contactSources }) {
    state.contactSources = contactSources;
  },
  [types.ADD_PHONE_NUMBER](state) {
    const phoneNumber = {
      code: '',
      number: '',
    };
    state.newContact.phones.push(phoneNumber);
  },
  [types.ADD_EMAIL_ADDRESS](state) {
    const emailAddress = {
      address: '',
    };
    state.newContact.emails.push(emailAddress);
  },
  [types.CHANGE_IS_SENDING_DATA](state) {
    state.isSendingContact = !state.isSendingContact;
  },
  [types.RESET_STATE](state) {
    Object.assign(state.newContact, newContact());
  },
};

export default {
  state: initialState,
  mutations,
  actions,
  getters,
};
