import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      auth: true,
      title: 'My Account - In-Charge',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About In-Charge',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue'),
    meta: {
      auth: false,
      title: 'Login to your account - In-Charge',
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Signup.vue'),
    meta: {
      auth: false,
      title: 'Create a new account - In-Charge',
    },
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "password-rest" */ '../views/Auth/Reset.vue'),
    meta: {
      auth: false,
      title: 'Reset Password - In-Charge',
    },
  },
  {
    path: '*',
    name: 'page-not-found',
    component: () => import(/* webpackChunckName: "page-not-found" */ '../views/Errors/NotFound404.vue'),
    meta: {
      title: 'Page Not Found - In-Charge',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
