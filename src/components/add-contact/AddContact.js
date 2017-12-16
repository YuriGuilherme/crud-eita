import { TheMask } from 'vue-the-mask';
import VeeValidate from 'vee-validate';
import service from '../../shared/service';

const getDefaultData = () => {
  return {
    sending_contact: false,
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
  components: {
    TheMask,
  },
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
      this.$validator.validateAll();
      if (!!this.newContact.name && !this.errors.any()) {
        this.sending_contact = true;
        this.submitForm();
      }
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
    submitForm() {
      service.addContact(this.handleData(this.newContact))
        .then(response => {
          this.sending_contact = false;
          this.resetData();
        });
    },
    resetData() {
      this.$data.newContact = getDefaultData().newContact
    }
  }
};