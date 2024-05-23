<script>
import AppPostBlog from './AppPostBlog.vue';

export default {
    name: 'PostsBlogComponent',
    components: {
        AppPostBlog,
    }
};
</script>

<template>
    <section id="from-blog">
        <div class="container">
            <div class="card-group gap-4">
                <AppPostBlog v-for="(item, idx) in Array(15).fill(1)" :key="idx" />
            </div>
        </div>
    </section>
    <hr class="my-2">
</template>

<style lang="scss" scoped>
#from-blog {
    padding-bottom: 80px;
    .card {
        --bs-card-border-width: 0;
    }
}
</style>