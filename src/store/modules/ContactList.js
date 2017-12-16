import service from '../../shared/service';
import * as types from '../mutation-types';

const initialState = {
  contacts: [],
  searchText: '',
  isLoadingData: true,
  filterTags: {
    starred: true,
    notStarred: true,
  },
};

function filterContacts(state) {
  return state.contacts.filter((contact) => {
    const isNameIncludeInArray = contact.name.toLowerCase().includes(state.searchText);
    return (
      (state.filterTags.notStarred && !contact.starred && isNameIncludeInArray) ||
      (state.filterTags.starred && contact.starred && isNameIncludeInArray)
    );
  });
}

const getters = {
  getContacts: state => state.contacts,
  searchText: state => state.searchText,
  isLoadingData: state => state.isLoadingData,
  filterTags: state => state.filterTags,
  filterContacts: state => filterContacts(state),
};

const actions = {
  getContacts({ commit }) {
    service.getContacts()
      .then((data) => {
        commit(types.RECEIVE_CONTACTS, {
          contacts: data.contacts,
        });
        commit(types.CHANGE_IS_LOADING_DATA);
      })
      .catch(() => commit(types.CHANGE_IS_LOADING_DATA));
  },
  changeFilterTag({ commit }, tag) {
    commit(types.CHANGE_FILTER_TAG, { tag });
  },
  inputSearchText({ commit }, searchText) {
    commit(types.INPUT_SEARCH_TEXT, { searchText });
  },
};

const mutations = {
  [types.RECEIVE_CONTACTS](state, { contacts }) {
    state.contacts = contacts;
  },
  [types.CHANGE_IS_LOADING_DATA](state) {
    state.isLoadingData = !state.isLoadingData;
  },
  [types.CHANGE_FILTER_TAG](state, { tag }) {
    state.filterTags[tag] = !state.filterTags[tag];
  },
  [types.INPUT_SEARCH_TEXT](state, { searchText }) {
    state.searchText = searchText;
  },
};

export default {
  state: initialState,
  mutations,
  actions,
  getters,
};
