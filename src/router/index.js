import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  */
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;