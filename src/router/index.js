import { createRouter, createWebHistory } from 'vue-router'
import MainComp from '../components/MainComp/MainComp.vue'
import InfoPersonal from '../components/InfoPersonal/InfoPersonal.vue'
import Studies from '../components/Studies/Studies.vue'
import Contact from '../components/Contact/Contact.vue'
import ToolsComponent from '../components/ToolsComponent/ToolsComponent.vue'
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
      component: InfoPersonal
    },
    {
      path: '/studies',
      name: 'Studies',
      component: Studies
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/tools',
      name: 'ToolsComponent',
      component: ToolsComponent
    }
  ]
})

export default router
