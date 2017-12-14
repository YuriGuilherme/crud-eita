import service from '../../shared/service';

const getDefaultData = () => {
  return {
    loading_contacts: false,
    contact_sources: [],
    newContact: {
      name: "",
      background: "",
      phones: [
        {
          code: "",
          number: ""
        }
      ],
      emails: [
        {
          address: ""
        }
      ],
      contact_source_id: null,
    },
  }
}

export default {
  data: getDefaultData,
  created() {
    this.getContactSources()
  },
  methods: {
    handleData(data) {
      return Object.assign({}, data, {
        phones: data.phones.map(phone => {
          return {
            code: phone.number.substring(0, 2),
            number: phone.number.substring(2, 12),
          }
        })
      })
    },
    getContactSources() {
      service.getContactSources()
        .then(data => this.contact_sources = data);
    },
    validateBeforeSubmit() {
      service.addContact(this.handleData(this.newContact))
        .then(res => this.resetData());
    },
    AddPhoneNumber() {
      this.newContact.phones.push({
        code: '',
        number: '',
      });
    },
    AddEmailAddress() {
      this.newContact.emails.push({
        address: '',
      });
    },
    resetData() {
      this.$data.newContact = getDefaultData().newContact
    }
  }
};