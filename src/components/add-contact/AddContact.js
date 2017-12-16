import { mapGetters, mapActions } from 'vuex';
import { TheMask } from 'vue-the-mask';
import VeeValidate from 'vee-validate';

import service from '../../shared/service';


const validateBeforeSubmit = function() {
  this.$validator.validateAll();
  if (!!this.newContact.name && !this.errors.any()) {
    this.sending_contact = true;
    this.submitForm();
  }
}

const submitForm = function() {
  this.changeIsSendingData();
  
  service.addContact(this.handleData(this.newContact))
    .then(response => {
      this.changeIsSendingData()
      this.resetFormData();
    })
    .catch(error => this.changeIsSendingData());
}

const handleData = (data) => {
  return Object.assign({}, data, {
    phones: data.phones.map(phone => {
      return {
        code: phone.number.substring(0, 2),
        number: phone.number.substring(2, 12),
      }
    })
  })
}

export default {
  created() {
    this.$store.dispatch('getContactSources');
  },
  computed: mapGetters({
    newContact: 'newContact',
    contactSources: 'getContactSources',
    isSendingContact: 'isSendingContact',
  }),
  methods: {
    ...mapActions([
      'addPhoneNumber',
      'addEmailAddress',
      'changeIsSendingData',
      'resetFormData',
    ]),
    handleData,
    validateBeforeSubmit,
    submitForm,
  },
  components: {
    TheMask,
  },
};