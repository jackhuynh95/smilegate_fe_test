<script>
import AppNavbarTop from './AppNavbarTop.vue';
import AppNavbarBottom from './AppNavbarBottom.vue';
export default {
    name: 'HeaderApp',
    components: {
        AppNavbarTop,
        AppNavbarBottom,
    }
}
</script>
<template>
    <header>
        <AppNavbarTop></AppNavbarTop>
        <hr>
        <AppNavbarBottom></AppNavbarBottom>
    </header>
</template>
<style lang="scss" scoped>

header {
    height: 160px;

   hr {
    margin:0 0 1rem 0;
   }
}
</style>