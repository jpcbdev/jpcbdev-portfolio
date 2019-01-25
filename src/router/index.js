import Vue from 'vue';

Vue.use(VueRouter);

import VueRouter from 'vue-router';
import TheIndex from '../pages/TheIndex.vue';
import Hero from '../components/Hero.vue';
import Services from '../components/Services.vue';
import About from '../components/About.vue'
import Contact from '../components/Contact.vue';
import notFound from '../pages/notFound.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: TheIndex,
            children: [{
                    path: "/",
                    name: "home",
                    component: Hero
                }, {
                    path: "/services",
                    name: 'services',
                    component: Services
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About,
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: Contact
                },
            ]
        },
        {
            path: '*',
            component: notFound
        }
    ]
});

export default router;