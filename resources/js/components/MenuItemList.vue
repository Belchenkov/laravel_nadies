<template>
    <div class="menu-items-list">
        <select
            v-model="categoryId"
            required
            @change="fetchItems"
        >
            <option value="">Select a category</option>
            <option v-for="cat in initialCategories" :value="cat.id" :key="cat.id">{{cat.name}}</option>
        </select>
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link
                    :to="{name: 'edit-item', params: {id: item.id}}"
                >
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['initialCategories'],
        data() {
            return {
                categoryId: this.initialCategories[0].id,
                items: []
            }
        },
        methods: {
            fetchItems() {
                axios.get(`/api/categories/${this.categoryId}/items`)
                    .then(res => this.items = res.data);
            }
        },
        created() {
            this.fetchItems();
        }
    }
</script>