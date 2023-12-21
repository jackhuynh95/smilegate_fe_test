<script>
import ListMenuNav from './ListMenuNav.vue';
export default {
    name: 'NavBarBottomComponent',
    components: {
        ListMenuNav,
    }
}
</script>

<template>
    <div id="ec-bottom-header" class="container d-flex align-items-center justify-content-between">
        <div class="ec-box-logo">
            <img class=ec-logo src="../../classic_shop_logo2x.png" alt="logo-big">
        </div>
        <ListMenuNav></ListMenuNav>
    </div>
</template>

<style lang="scss" scoped>

@use '../../src/assets/styles/partials/variables' as *;

#ec-bottom-header {

    .ec-logo {
        max-width: 180px;
        }
    }
</style>