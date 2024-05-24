<script>
export default {
    name: 'PostBlogComponent',
};
</script>

<template>
    <div class="card shadow-sm">
        <img src="../../2MM9Jqo.png" class="card-img-top aspect-3-2 w-full" alt="...">
        <div class="px-2 py-1">
            <h6 class="card-title truncate my-0">Product name is quite long in some cases.</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

.card {
    border: 1px solid $color-primary;
    border-radius: 8px;
    overflow: hidden;
}
</style>