import { createRouter, createWebHistory } from 'vue-router'
import Day10_P1 from '@/component/Day10_P1.vue';
import Day10_P2 from '@/component/Day10_P2.vue';
import CreateView from '@/component/CreateView.vue';
import UpdateView from '@/component/UpdateView.vue';
import ShowView from '@/component/ShowView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/D10_P1',
      name: 'D10_P1',
      component: Day10_P1
    },
    {
      path: '/list',
      name: 'list',
      component: Day10_P2
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateView
    },
    {
      path: '/show/:id',
      name: 'show',
      component: ShowView
    }
  ],
})

export default router
