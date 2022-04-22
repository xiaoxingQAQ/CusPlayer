import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/stream',
    name: 'Stream',
    component: () => import('../views/Stream.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/Preview.vue')
  }
];

const router = new VueRouter({
  routes
});

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
