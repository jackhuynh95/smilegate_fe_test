<script>
import RecentPost from './RecentPost.vue';
export default {
    name: 'ListRecentPostsComponent',
    components: {
        RecentPost,
    },
    data() {
        return {
            posts: [ 
            {
                title: 'Aenean lobortis sapien enim viverra',
            },
            {
                title: 'Duis ac messa saper maxiumus',
            },
            {
                title: 'Nunc fermint nulla el justo seam id',
            },   
            {
                title: 'Aliquam posuere magna eget niht',
            }, 
            {
                title: 'Cras ac nulla ac consect nutrudm',
            },
            {
                title: 'Frasce mattis mucni au aliquam',
            },
            ] 
        }
    }
};
</script>

<template>
    <div id="ec-recent-posts" class="col-3">
        <h6 class="text-uppercase">Recent Posts</h6>
        <ul class="d-flex flex-column px-0">
            <RecentPost
                v-for="post in posts"
                :title="post.title">
            </RecentPost>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
h6 {
    padding-bottom: 20px;
}
</style>