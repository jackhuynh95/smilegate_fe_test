<script>
import AppNavbarBottom from './AppNavbarBottom.vue';
export default {
    name: 'HeaderApp',
    components: {
        AppNavbarBottom,
    }
}
</script>
<template>
    <header>
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