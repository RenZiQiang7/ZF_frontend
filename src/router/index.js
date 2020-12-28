import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import PerRouter from './routes/personal';
import VipRouter from './routes/Vipmember/Vipmenber';
import BillRouter from './routes/Bill/Bill';
import Pysuccess from './routes/pysuccess/Pysuccess';
import AddressRouter from './routes/Address/Address';

const routes = [
  ...BillRouter,
  ...PerRouter,
  ...VipRouter,
  ...Pysuccess,
  ...AddressRouter,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
