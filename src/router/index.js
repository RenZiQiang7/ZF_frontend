import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
import PerRouter from './routes/personal';
import VipRouter from './routes/Vipmember/Vipmenber';
import BillRouter from './routes/Bill/Bill';
import Pysuccess from './routes/pysuccess/Pysuccess';
import AddressRouter from './routes/Address/Address';

import goodsListRouter from "./routes/goodslist";
import DetailRouter from "./routes/detail";
import FillRouter from "./routes/fillorder";
import payRouter from "./routes/pay"
import HomeRouter from './routes/Home/Home'
import ReserveRouter from './routes/reserve/Reserve'
import RoomDetailRouter from './routes/RoomDetail'
import bookRoomRouter from './routes/reservation/bookroom'
import suggestRouter from './routes/suggest/suggest'
import goodsOrderRouter from './routes/goodsorder/goodsorder'
import DiscountRouter from "./routes/Discount/Discount"
import IntRouter  from "./routes/Integral/Integral"
import OrderRouter  from "./routes/Order/Order"
import TopupRouter  from "./routes/Topup/Topup"


import QRcodeRouter from './routes/QRcode'
const routes = [
  ...BillRouter,
  ...PerRouter,
  ...VipRouter,
  ...Pysuccess,
  ...AddressRouter,
  ...DiscountRouter,
  ...IntRouter,
  ...OrderRouter,
  ...TopupRouter,

  goodsOrderRouter,
  goodsListRouter,
  DetailRouter,
  FillRouter,
  payRouter,

  suggestRouter,
  QRcodeRouter,


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
