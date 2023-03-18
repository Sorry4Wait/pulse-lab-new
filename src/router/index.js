import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

import Home from "../views/home/Home.vue";
import Guest from "../views/guest/guestProfil.vue";
import Profile from "../views/profile/pages/Index.vue";
import Notifications from "../views/profile/pages/Notifications.vue";
import Login from "../views/login/index.vue";
import Registration from "../views/registration/index.vue";
import ElasticModule from "../views/laboratory/pages/elastic-module/Index.vue"
import Seismology from "../views/laboratory/pages/seismology/lab1.vue"
import VerticalElectricalSounding1 from "../views/laboratory/pages/vertical-electrical-sounding/lab1.vue"
import VerticalElectricalSounding2 from "../views/laboratory/pages/vertical-electrical-sounding/lab2.vue"

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path:"seismic",
        name:"side-menu-seismic",
        component:ElasticModule,
        meta:{
          public:false
        }
      },
      {
        path:"seismology",
        name:"seismology",
        component:Seismology,
        meta:{
          public:false
        }
      },
      {
        path:"vertical-electrical-sounding/lab1",
        name:"vertical-electrical-sounding-lab1",
        component:VerticalElectricalSounding1,
        meta:{
          public:false
        }
      },
      {
        path:"vertical-electrical-sounding/lab2",
        name:"vertical-electrical-sounding-lab2",
        component:VerticalElectricalSounding2,
        meta:{
          public:false
        }
      },
      {
        path: "/",
        name: "side-menu-home",
        component: Home,
      },
      {
        path: "/guest",
        name: "side-menu-guest",
        component: Guest,
      },
      {
        path: "/profile",
        name: "side-menu-profile",
        component: Profile,
      },
      {
        path: "/profile/notifications",
        name: "side-menu-notifications",
        component: Notifications,
      },

    ],
    meta:{
      public: false,
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      public:true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
    meta:{
      public:true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

// router.beforeEach((to, from, next) => {
//   const isPublic = to.matched.some(record => record.meta.public)
//   const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
//   const loggedIn = !!TokenService.getToken();
//   if (!isPublic && !loggedIn && to.name !== 'register') {
//     return next({
//       path: '/login',
//       query: {redirect: to.fullPath === '/login' ? '/' : to.fullPath}  // Store the full path to redirect the user to after login
//     });
//   }
//   // Do not allow user to visit login page or register page if they are logged in
//   if (loggedIn && onlyWhenLoggedOut) {
//     return next('/')
//   }
//
//   next()
//
// });

export default router;
