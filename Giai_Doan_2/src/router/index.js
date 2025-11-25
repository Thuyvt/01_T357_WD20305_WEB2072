import { createRouter, createWebHistory } from 'vue-router'
import Day10_P1 from '@/component/Day10_P1.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/D10_P1',
      name: 'D10_P1',
      component: Day10_P1
    }
  ],
})

export default router
