import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import VueAuth from '@websanova/vue-auth';

import App from './App.vue';
import store from './store';
import router from './router';
import { BASE_API } from './config';


Vue.use(Vuelidate);
Vue.router = router;
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

/* eslint-disable global-require, no-use-before-define */
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x'),
  loginData: {
    method: 'POST',
    fetchUser: true,
    url: `${BASE_API}/user/login`,
  },
  logoutData: {
    method: 'POST',
    url: `${BASE_API}/user/logout`,
  },
  refreshData: {
    interval: 30,
    method: 'GET',
    enabled: true,
    url: `${BASE_API}/user/refresh`,
    error: () => $vm.$auth.logout(),
  },
  registerData: {
    method: 'POST',
    autoLogin: true,
    url: `${BASE_API}/user/register`,
  },
  fetchData: {
    method: 'GET',
    enabled: true,
    url: `${BASE_API}/user`,
  },
  forbiddenRedirect: '/403',
  parseUserData: ({ data }) => data,
});
/* eslint-enable global-require, no-use-before-define */

const $vm = new Vue({
  router,
  store,
  render: h => h(App),
});
$vm.$mount('#app');
