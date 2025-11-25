import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router';

// Day 1
// import App from '@/components/HuongDan/D1_App.vue';
// Day 2
// import App from '@/components/HuongDan/D2_App.vue';
// import App from '@/components/HuongDan/D3_App.vue';
// import App from '@/components/HuongDan/D4_App.vue';

// createApp(App).mount('#app').use(router)
const app = createApp(App)
app.use(router)
app.mount('#app')
