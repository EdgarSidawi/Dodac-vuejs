import Vue from 'vue'
import VueRouter from 'vue-router'

import Patient from '../views/Patient.vue'
import Staff from '../views/Staff.vue'
import Monitor from '../views/Monitor.vue'
import ManageStaff from '../views/ManageStaff.vue'
import ManageLocation from '../views/ManageLocation.vue'
import ManageDisease from '../views/ManageDisease.vue'

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
    component: Staff,
    children: [
      {
        path: '/staff/manageStaff',
        name: 'ManageStaff',
        component: ManageStaff
      },
      {
        path: '/staff/manageLocation',
        name: 'ManageLocation',
        component: ManageLocation
      },
      {
        path: '/staff/manageDisease',
        name: 'ManageDisease',
        component: ManageDisease
      },
    ]
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
