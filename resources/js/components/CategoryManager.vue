<template>
    <form>
        <a
            href="#"
            @click="addCategory"
            class="add"
        >+ Add Category</a>
        <div v-for="category in categories" :key="category.id">
            <input
                type="text"
                v-model="category.name"
                :ref="category.name"
            >
            <input type="number" v-model="category.display_order">
            <a
                href="#"
                @click="removeCategory(category.id)"
                class="remove"
            >delete</a>
            <div>
                <img
                    v-if="category.image"
                    :src="`/images/${category.image}`"
                    :alt="category.name"
                    width="100"
                />
                <label v-else>Image:</label>
                <input type="text" v-model.lazy="category.image">
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
            addCategory() {
                this.categories.push({
                    id: 0,
                    name: '',
                    image: '',
                    display_order: this.categories.length + 1
                });
                this.$nextTick(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                    this.$refs[''][0].focus();
                });
            },
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