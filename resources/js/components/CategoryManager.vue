<template>
    <form @submit.prevent="saveCategories">
        <a
            href="#"
            @click="addCategory"
            class="add"
        >+ Add Category</a>
        <div v-for="(category, index) in categories" :key="category.id">
            <input
                type="text"
                v-model="category.name"
                :ref="category.name"
            >
            <input type="number" v-model="category.display_order">
            <a
                href="#"
                @click="removeCategory(index)"
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
        <button type="submit">Save</button>
        <div>{{ feedback }}</div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                feedback: ''
            }
        },
        computed: {
            categories() {
                return this.$store.state.categories;
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
                    console.log(index);
                    let id = this.categories[index].id;

                    if (id > 0) {
                        axios.delete('/api/categories/' + id);
                    }

                    this.categories.splice(index, 1);
                }
            },
            saveCategories() {
                axios.post('/api/categories/upsert', {
                   categories: this.categories
                })
                    .then((res) => {
                        if (res.data.success) {
                            this.feedback = 'Changes saved.';
                            this.categories = res.data.categories;
                        }
                    });
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