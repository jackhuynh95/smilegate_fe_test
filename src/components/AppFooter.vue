<script>
import AddFooterLegacy from './AddFooterLegacy.vue';
import AddFooterTop from './AppFooterTop.vue';
export default {
    name: 'Footer',
    components: {
        AddFooterLegacy,
        AddFooterTop,
    }
}
</script>

<template>
    <footer>
        <AddFooterTop></AddFooterTop>
        <AddFooterLegacy></AddFooterLegacy>
    </footer>
</template>

<style lang="scss" scoped>

</style>