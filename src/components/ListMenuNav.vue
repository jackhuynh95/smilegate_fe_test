<script>
import MenuLink from './MenuLink.vue';
export default {
    name: 'ListMenuNavComponent',
    components: {
        MenuLink,
    },
    data () {
        return {
            menuLinks: [
                {
                name: 'Home',
                chevron: true,
                options: ['Home1', 'Home2', 'Home3']
                },
                {
                name: 'Shop',
                chevron: true,
                options: ['Shop1', 'Shop2', 'Shop3']
                },
                {
                name: 'Products',
                chevron: true,
                options: ['Products1', 'Products2']
                },
                {
                name: 'Categories',
                chevron: true,
                options: ['Categories1']
                },
                {
                name: 'News',
                chevron: false
                },
                {
                name: 'Elements',
                chevron: true,
                options: ['Elements1', 'Elements2', 'Elements3']
                }
            ]
        }
    }
};
</script>

<template>
    <nav id="ec-box-menu">
        <ul class="list-links-menu d-flex align-items-center gap-4">
            <MenuLink
                v-for="(link, index) in this.menuLinks"
                :name="link.name"
                :subtitle="link.chevron"
                :options="link.options">
            </MenuLink>
            <li class="no-hover text-uppercase">
                <a class="nav-link ec-color-primary rounded-pill py-1 px-4" aria-current="page" href="#">Shop now!</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <font-awesome-icon class="icon-small px-3" icon="fa-solid fa-magnifying-glass" />
                </a>
            </li> 
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

.no-hover {
    background-color: $color-primary;
    color: $white;
    border-radius: 40px;
    &:hover {
        background-color: $color-secondary;
    }
}
</style>

