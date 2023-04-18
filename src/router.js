import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import Pages from './pages/pages.vue'
import Admin from './pages/Admin.vue'

const routes = [
    {
        path: '/',
        name: 'Pages',
        component: Pages
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
