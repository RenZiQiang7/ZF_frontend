import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


import HomeRouter from './routes/Home/Home'
import ReserveRouter from './routes/reserve/Reserve'
import RoomDetailRouter from './routes/RoomDetail'
import bookRoomRouter from './routes/reservation/bookroom'
const routes = [
  HomeRouter,
  {
    path: '/',
    redirect: '/home',
  },
  ReserveRouter,
  RoomDetailRouter,
  bookRoomRouter,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
