<template>
    <div>
        <h1>Menu Editor</h1>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use('VueRouter');

    import CategoryManager from './CategoryManager.vue';
    import MenuItem from './MenuItem.vue';

    export default {
        name: "MenuEditor",
        router: new VueRouter({
            routes: [
                {
                    path: '/categories',
                    name: 'categories',
                    component: CategoryManager
                },
                {
                    path: '/add-item',
                    name: 'add-item',
                    component: MenuItem
                },
                {
                    path: '/',
                    redirect: { name: 'categories' }
                },
            ]
        })
    }
</script>

<style scoped>

</style>