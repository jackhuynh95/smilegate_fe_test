<script>
import MenuLink from "./MenuLink.vue";
export default {
    name: "ListMenuNavComponent",
    components: {
        MenuLink,
    },
    data() {
        return {
            menuLinks: [
                {
                    name: "Indie Game",
                },
                {
                    name: "Entry Game",
                },
                {
                    name: "Community",
                },
            ],
        };
    },
};
</script>

<template>
    <nav id="ec-box-menu">
        <ul class="list-links-menu d-flex align-items-center gap-4">
            <MenuLink v-for="(link, index) in menuLinks" :key="index" :name="link.name">
            </MenuLink>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <font-awesome-icon class="icon-small px-3" icon="fa-solid fa-magnifying-glass" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use "../../src/assets/styles/partials/variables" as *;
</style>
