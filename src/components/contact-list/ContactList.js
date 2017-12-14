import service from '../../shared/service';

export default {
  data() {
    return {
      searchText: '',
      filterTags: {
        starred: true,
        notStarred: true
      },
      contacts: [],
      isLoadingData: true,
    }
  },
  created() {
    service.getContacts() 
      .then(data => {
        this.contacts = data.contacts;
        this.isLoadingData = false;
      })
      .catch(error => this.isLoadingData = false)
  },
  computed: {
    filteredList() {
      return this.contacts.filter(contact => {
        const isNameIncludeInArray = contact.name.toLowerCase().includes(this.searchText.toLowerCase());
        return (
          (this.filterTags.notStarred && !contact.starred && isNameIncludeInArray) || 
          (this.filterTags.starred && contact.starred && isNameIncludeInArray)
        ) 
      })
    }
  },
  methods: {
    changeFilterTag(tag) {
      this.filterTags[tag] = !this.filterTags[tag]
    }
  }
};