<script>
export default {
    name: 'PostBlogComponent',
    data() {
        return {
            thumbnail: '',
        };
    },
    mounted() {
        // Generate a random value from an array of two elements
        let options = ['2MM9Jqo', 'unmma82'];
        let randomValue = options[Math.floor(Math.random() * options.length)];

        this.thumbnail = randomValue
    },
};
</script>

<template>
    <div class="card shadow">
        <img :src="`/${thumbnail}.png`" class="card-img-top aspect-3-2 w-full object-fit-cover" alt="...">
        <div class="px-2 py-1">
            <div class="card-title truncate my-0 two-xl:text-xl">Product name is quite long in some cases.</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

.card {
    border: 1px solid $white;
    border-radius: 8px;
    overflow: hidden;
}
</style>