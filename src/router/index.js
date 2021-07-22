import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "ses",
    component: () => import("../views/forecast/SingleExponentialSmoothing.vue"),
  },
  {
    path: "/ses",
    redirect: "/",
  },
  {
    path: "/des-brown",
    name: "des-brown",
    component: () =>
      import("../views/forecast/DoubleExponentialSmoothingBrown.vue"),
  },
  {
    path: "/des-holt",
    name: "des-holt",
    component: () =>
      import("../views/forecast/DoubleExponentialSmoothingHolt.vue"),
  },

  { path: "/:catchAll(.*)", component: () => import("../views/Error404.vue") },

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
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
