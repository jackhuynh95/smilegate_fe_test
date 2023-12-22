<script>
import Tag from './Tag.vue';
    export default {
        name: 'ListTags',
        components: {
            Tag,
        },
        data() {
            return {
                tags: [
                {
                    name: ['Black', 'Boots', 'Brown', 'Casual']
                },
                {
                    name: ['D&G', 'Fabric', 'Flowers', 'Grey']
                },
                {
                    name: ['Hat', 'Hipster', 'Lines']
                },
                {
                    name: ['Multi-porpose', 'New York']
                },
                {
                    name: ['Outdoors', 'Red', 'Responsive']
                },
                {
                    name: ['Summer', 'Sweater', 'Travel']
                },
                {
                    name: ['Warm', 'White', 'Winter']
                },
                ]
            }
        }
    };
</script>

<template>
    <div id="ec-tags" class="col-3">
        <h6 class="text-uppercase">Tags</h6>
        <ul class="ec-list-tags">
            <Tag 
                v-for="tag in tags"
                :tag="tag.name">
            </Tag>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
h6 {
    padding-bottom: 20px;
}
</style>