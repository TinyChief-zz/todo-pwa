import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StartPage from '@/components/StartPage'
// import Register from '@/components/Register'
// import Login from '@/components/Login'
// import Calendar from '@/components/Calendar'
// import Overview from '@/components/Overview'
// import Groups from '@/components/Groups'
// import Lists from '@/components/Lists'
// import Profile from '@/components/Profile'
// import Timeline from '@/components/Timeline'
// import New from '@/components/New'
// import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Login.vue')
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Calendar.vue')
    },
    {
      path: '/overview',
      name: 'Overview',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Overview.vue')
    },
    {
      path: '/groups',
      name: 'Groups',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Groups.vue')
    },
    {
      path: '/lists/:type',
      name: 'Lists',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Lists.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Profile.vue')
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Timeline.vue')
    },
    {
      path: '/new',
      name: 'New',
      component: () => import(/* webpackChunkName: "about" */ '@/components/New.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Settings.vue')
    }
  ]
})
