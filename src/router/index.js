import {createRouter, createWebHistory} from 'vue-router'
import ListViewProduct from '@/components/product/ListView.vue'
import Home from '@/components/HuongDan/D4_App.vue'
import Day5 from '@/components/HuongDan/D5_App.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/list-product',
            name: 'list-product',
            component: ListViewProduct
        },
        {
            path: '/Day5',
            name: 'Day5',
            component: Day5
        }
    ]
});
export default router;