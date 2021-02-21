import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import VueSlimScroll from 'vue-slimscroll';

import App from './App.vue';
import IndexContainer from './containers/IndexContainer.vue';
import ArtsContainer from './containers/ArtsContainer.vue';
import TipsContainer from './containers/TipsContainer.vue';
import MoreContainer from './containers/MoreContainer.vue';

import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css';
import './assets/fontawesome-free-5.13.0-web/css/all.min.css';
import './assets/css/style.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: IndexContainer },
        { path: '/arts', component: ArtsContainer },
        { path: '/tips', component: TipsContainer },
        { path: '/more', component: MoreContainer },
        { path: '/:notFound(.*)', redirect: '/' }
    ],
    linkActiveClass: 'current-page'
});

const app = createApp(App);

app.use(router);
app.use(VueReCaptcha, { siteKey: '6LdTJmEaAAAAAPzK4Ywnckd_wTtwX0xsmIkpvNYQ' })
app.use(VueSlimScroll);

app.mount('#app');