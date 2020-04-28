import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
// import Contact from './components/Contact.vue';
import Senna from './components/pages/Senna';
import Fiadventures from './components/pages/Fiadventures';
import Nightmarket from './components/pages/Nightmarket';
import Stripchurch from './components/pages/Stripchurch';
import Truerevival from './components/pages/Senna';
import Hello from './components/pages/Hello';
import ContentCreation from './components/pages/ContentCreation';
import SocialMedia from './components/pages/SocialMedia';
import Portfolio from './components/pages/Portfolio';


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
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/contentcreation',
      name: 'contentcreation',
      component: ContentCreation,
    },
    {
      path: '/socialmedia',
      name: 'socialmedia',
      component: SocialMedia,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
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