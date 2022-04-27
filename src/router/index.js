import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp/MainComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainComp',
      component: MainComp
    },
    {
      path: '/infopersonal',
      name: 'InfoPersonal',
      component: ()=> import ('../components/InfoPersonal/InfoPersonal.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ()=> import ('../components/Contact/Contact.vue')
    },
    {
      path: '/tools',
      name: 'ToolsComponent',
      component: ()=> import ('../components/ToolsComponent/ToolsComponent.vue')
    }
  ]
})

export default router
