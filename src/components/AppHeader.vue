<script>
import AppNavbarTop from './AppNavbarTop.vue';
import AppNavbarBottom from './AppNavbarBottom.vue';
import AppJumbotron from './AppJumbotron.vue';
export default {
    name: 'HeaderApp',
    components: {
        AppNavbarTop,
        AppNavbarBottom,
        AppJumbotron,
    }
}
</script>
<template>
    <header>
        <AppNavbarTop></AppNavbarTop>
        <hr>
        <AppNavbarBottom></AppNavbarBottom>
    </header>
    <AppJumbotron></AppJumbotron>
</template>
<style lang="scss" scoped>

header {
   hr {
    margin:0;
   }
}
</style>