import Vue from 'vue';
window.Vue = require('vue');

require('./bootstrap');

import CategoryManager from './components/CategoryManager';
//Vue.component('category-manager', require('./components/CategoryManager'));

const app = new Vue({
    el: '#app',
    components: {
        CategoryManager
    }
});
