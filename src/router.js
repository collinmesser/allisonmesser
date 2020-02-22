import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/pages/Contact.vue';
import Senna from './components/pages/Senna';
import Fiadventures from './components/pages/Fiadventures';
import Nightmarket from './components/pages/Nightmarket';
import Stripchurch from './components/pages/Stripchurch';
import Truerevival from './components/pages/Senna';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/senna',
      name: 'senna',
      component: Senna,
    },
    {
      path: '/nightmarket',
      name: 'nightmarket',
      component: Nightmarket,
    },
    {
      path: '/fiadventures',
      name: 'fiadventures',
      component: Fiadventures,
    },
    {
      path: '/stripchurch',
      name: 'stripchurch',
      component: Stripchurch,
    },
    {
      path: '/truerevival',
      name: 'truerevival',
      component: Truerevival,
    }
  ],
});