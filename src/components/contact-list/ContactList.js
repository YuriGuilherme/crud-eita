import { mapGetters, mapActions } from 'vuex';

import ShowContactInformation from './show-contact-information/ShowContactInformation.vue';

export default {
  created() {
    this.$store.dispatch('getContacts');
  },
  computed: mapGetters({
    contacts: 'getContacts',
    isLoadingData: 'isLoadingData',
    searchText: 'searchText',
    filterTags: 'filterTags',
    filterContacts: 'filterContacts',
    contactInfoExpanded: 'contactInfoExpanded',
  }),
  methods: mapActions([
    'changeFilterTag',
    'inputSearchText',
    'showContactInformations'
  ]),
  components: { ShowContactInformation },
};