import Service from '../../../shared/service';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    contact: 'selectedContact',
  }),
  methods: mapActions([
    'closeContacInformations',
  ])
}