<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'Avaida',
    components: {
        AppHeader,
        AppMain,
    }
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain class="app-main"></AppMain>
</template>

<style lang="scss" scoped>
@use '../src/assets/styles/partials/variables' as *;

.app-main {
  padding-top: $header-height;
}
</style>
