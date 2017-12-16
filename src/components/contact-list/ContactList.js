import { mapGetters, mapActions } from 'vuex';

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
  }),
  methods: mapActions([
    'changeFilterTag',
    'inputSearchText'
  ])
};