<script>
export default {
    name: 'NavBarSocialSell.vue',
};
</script>

<template>
<div id="top-header" class="container py-2 d-flex align-items-center justify-content-between">
        <ul class="ec-socials d-flex gap-3">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
        </ul>
        <div class="ec-shop-list">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Shopping Cart
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        My Account
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                        Cart
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;


.nav-link {
    color: $text;

    &:hover {
        color: $color-primary;
    }
}
</style>