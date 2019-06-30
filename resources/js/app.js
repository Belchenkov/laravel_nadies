import Vue from 'vue';
window.Vue = require('vue');

require('./bootstrap');

import CategoryManager from './components/CategoryManager';
import MenuEditor from './components/MenuEditor';


Vue.component('category-manager', CategoryManager);
Vue.component('menu-editor', MenuEditor);

const app = new Vue({
    el: '#app',
});
