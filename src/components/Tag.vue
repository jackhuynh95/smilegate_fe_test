<script>
    export default {
        name: 'TagComponent',
        props: {
            tag: Array,
        }
    }
</script>

<template>
    <li class="ec-tag"> 
        <ul class="d-flex gap-2 pb-2">
            <li v-for="li in tag" class="badge border border-dark-subtle">
                {{ li }}
            </li>
        </ul>
    </li>
</template>

<style lang="scss" scoped>
.badge {
    border-radius: 0;
    opacity: 0.7;
}
</style>