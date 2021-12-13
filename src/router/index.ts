import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Calculating from '../views/Calculating.vue';
import Failed from '../views/Failed.vue';
import Login from '../views/Login.vue';
import Customers from '../views/Customers.vue';
import Start from '../views/Start.vue';
import YearInReview from '../views/YearInReview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/failed',
    name: 'Failed',
    component: Failed,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/calculating',
    name: 'Calculating',
    component: Calculating,
  },
  {
    path: '/year-in-review',
    name: 'YearInReview',
    component: YearInReview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
