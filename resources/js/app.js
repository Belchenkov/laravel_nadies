require('./bootstrap');

window.Vue = require('vue');

Vue.component('category-manager', require('./components/CategoryManager'));

const app = new Vue({
    el: '#app',
});
