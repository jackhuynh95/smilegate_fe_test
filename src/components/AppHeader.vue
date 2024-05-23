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
   hr {
    margin:0;
   }
}
</style>