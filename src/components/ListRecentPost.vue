<script>
import RecentPost from './RecentPost.vue';
export default {
    name: 'ListRecentPostsComponent',
    components: 'RecentPost',
    data {
        return {
            posts:[ 
                {
                title: 'lorem ipsum fhs rlsldj sldf',
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
                v-for="post in posts ">
            </RecentPost>
            <hr>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>