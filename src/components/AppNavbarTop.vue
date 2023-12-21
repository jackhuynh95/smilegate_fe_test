<script>
export default {
    name: 'NavBarSocialSell.vue',
};
</script>

<template>
    <div id="top-header" class="container d-flex align-items-center justify-content-between">
        <ul class="ec-socials d-flex m-0 align-items-center gap-3">
            <li>
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </li>
            <li>
                <font-awesome-icon icon="fa-brands fa-twitter" />
            </li>
            <li>
                <font-awesome-icon icon="fa-brands fa-instagram" />
            </li>
            <li>
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </li>
        </ul>
        <div class="ec-shop-list">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Shopping Cart
                    </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link border-start border-end" href="#">
                        My Account
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-5" href="#">
                        <font-awesome-icon class="icon-small px-2" icon="fa-solid fa-cart-shopping" />
                        Cart
                    <font-awesome-icon class="px-2" icon="fa-solid fa-chevron-down" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;


.ec-socials {
    padding: 0;
}
.nav-link {
    color: $text;

    &:hover {
        background-color: rgb(236, 235, 235);
    }
}
</style>