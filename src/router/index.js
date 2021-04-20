import Vue from 'vue'
import VueRouter from 'vue-router'
import Patient from '../views/Patient.vue'
import Staff from '../views/Staff.vue'
import Monitor from '../views/Monitor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Patient',
    component: Patient
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: Monitor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
