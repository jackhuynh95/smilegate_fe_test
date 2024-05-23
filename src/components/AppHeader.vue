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
    <header class="fixed top-0 inset-x-0">
        <AppNavbarBottom></AppNavbarBottom>
    </header>
</template>
<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

header {
    background: $header-top;
    color: $white;

    hr {
        margin: 0;
    }
}
</style>