import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CategoryRead from '../views/Category_read'
import Category_add from "../views/Category_add"
import Product_read from "../views/Product_read"
import Product_add from "../views/Product_add"
import Nav_menu from "../views/Nav_menu"
import Nav_add from "../views/Nav_add"
import Nav_update from "../views/Nav_update";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category_read',
    name: 'category_read',
    component: CategoryRead
  },
  {
    path: '/category_add',
    name: 'category_add',
    component: Category_add
  },
  {
    path: '/product_read',
    name: 'product_read',
    component: Product_read
  },
  {
    path: '/product_add',
    name: 'product_add',
    component: Product_add
  },
  {
    path: '/Nav_menu',
    name: 'Nav_menu',
    component: Nav_menu
  },
  {
    path: '/Nav_add',
    name: 'Nav_add',
    component: Nav_add
  },
  {
    path: '/Nav_update',
    name: 'Nav_update',
    component: Nav_update
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
