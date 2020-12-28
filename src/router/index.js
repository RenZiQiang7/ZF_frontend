import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
import goodsListRouter from "./routes/goodslist";
import DetailRouter from "./routes/detail";
import FillRouter from "./routes/fillorder";
import payRouter from "./routes/pay"
const routes = [
  goodsListRouter,
  DetailRouter,
  FillRouter,
  payRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
