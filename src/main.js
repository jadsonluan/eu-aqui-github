import Vue from "vue";
import App from "./App.vue";
import router from './router';
import VueCookie from 'vue-cookie';
import moment from 'moment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPowerOff, faCubes, faMapMarkerAlt, faCalendarAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const icons = [faPowerOff, faCubes, faMapMarkerAlt, faCalendarAlt, faBriefcase];
library.add(icons);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM-DD-YYYY');
  }
})

Vue.config.productionTip = false;
Vue.use(VueCookie);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
