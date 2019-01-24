import Vue from 'vue';

Vue.use(VueRouter);

import VueRouter from 'vue-router';
import TheIndex from '../pages/TheIndex.vue'
import TheBlog from '../pages/TheBlog.vue';
import notFound from '../pages/notFound.vue';


const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: TheIndex
        },
        {
            path: '/blog',
            name: 'blog',
            component: TheBlog
        },
        {
            path: '*',
            component: notFound
        }
    ]

});

export default router;