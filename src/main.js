import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import store from './store';
import router from './router';


Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
