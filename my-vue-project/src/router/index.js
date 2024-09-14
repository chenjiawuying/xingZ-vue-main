import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import index from '../views/index.vue'
import text from '../views/text.vue'
import destination from '../views/destination.vue'
import tourismProduct from '../views/tourismProduct.vue'
import My from '../views/My.vue'
import indexBanner from '../views/index-Banner.vue'
import SightSpot from '../views/SightSpot.vue'
import Dining from '../views/Dining.vue'

const routes = [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/Dining',
    name: 'Dining',
    component: Dining
  }, {
    path: '/SightSpot',
    name: 'SightSpot',
    component: SightSpot
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/Home',
    name: 'Home',
    component: HomeView
  }, {
    path: '/text',
    name: 'text',
    component: text
  }, {
    path: '/tourismProduct',
    name: 'tourismProduct',
    component: tourismProduct
  }, {
    path: '/destination',
    name: 'destination',
    component: destination
  }, {
    path: '/My',
    name: 'My',
    component: My
  }, {
    path: '/indexBanner',
    name: 'indexBanner',
    component: indexBanner
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
