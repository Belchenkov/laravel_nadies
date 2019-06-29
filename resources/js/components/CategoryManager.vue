<template>
    <form>
        <div v-for="category in categories" :key="category.id">
            <input type="text" v-model="category.name">
            <input type="number" v-model="category.display_order">
            <a
                href="#"
                @click="removeCategory(category.id)"
                class="remove"
            >delete</a>
            <div>
                <img
                    :src="`/images/${category.image}`"
                    :alt="category.name"
                    width="100"
                />
                <input type="text" v-model="category.image">
            </div>
            <hr>
        </div>
    </form>
</template>

<script>
    export default {
        props: [
            'initialCategories'
        ],
        data() {
            return {
                categories: _.cloneDeep(this.initialCategories)
            }
        },
        methods: {
            removeCategory(index) {
                if (confirm('Are you sure?')) {
                    this.categories.splice(index, 1);
                }
            }
        }
    }
</script>

<style scoped>
    img {
        vertical-align: middle;
    }

    hr {
        margin-bottom: 30px;
    }
</style>