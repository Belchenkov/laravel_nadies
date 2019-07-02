<template>
    <div>
        <h1>Menu Editor</h1>
        <router-link :to="{name: 'categories'}">Categories</router-link>
        <router-link :to="{name: 'add-item'}">Add Item</router-link>
        <router-view
            :initial-categories="categories"
        ></router-view>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use('VueRouter');

    import CategoryManager from './CategoryManager.vue';
    import MenuItem from './MenuItem.vue';

    export default {
        props: [
            'categories'
        ],
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
    a {
        border: solid 1px black;
        padding: 10px;
        margin: 0;
    }

    .router-link-active {
        font-weight: bold;
        border-bottom: none;
    }
</style>