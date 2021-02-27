import { createRouter, createWebHashHistory } from 'vue-router'
import HomeGreeting from '../components/HomeGreeting.vue'
import Navbar from '../components/ui/Navbar.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      HomeGreeting,
      Navbar

    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import('../views/Services.vue')

  },
  {
    path: '/Team',
    name: 'Team',
    component: () => import('../views/Team.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
