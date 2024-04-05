import { createRouter, createWebHistory } from 'vue-router'
import PropsEmitDemo from '../components/PropsEmitDemo/Parent.vue'
import CustomEventDemo from '../components/CustomEventDemo/Brother1.vue'
import AttrsListenersDemo from '../components/AttrsListenersDemo/Parent.vue'
import ParentRefsDemo from '../components/ParentRefsDemo/Parent.vue'
import ProvideInjectDemo from '../components/ProvideInjectDemo/Parent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/props-emit',
      component: PropsEmitDemo
    },
    {
      path: '/custom-event',
      component: CustomEventDemo
    },
    {
      path: '/attrs-listeners',
      component: AttrsListenersDemo
    },
    {
      path: '/parent-refs',
      component: ParentRefsDemo
    },
    {
      path: '/provide-inject',
      component: ProvideInjectDemo
    }
  ]
})

export default router
