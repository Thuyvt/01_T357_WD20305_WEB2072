import {createRouter, createWebHistory} from 'vue-router'
import ListViewProduct from '@/components/product/ListView.vue'
import Home from '@/components/HuongDan/D4_App.vue'
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
        }
    ]
});
export default router;