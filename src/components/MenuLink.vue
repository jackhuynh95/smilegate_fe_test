<script>
export default {
    name: 'MenuLink',
    props: {
        name: String,
        subtitle: Boolean,
        options: String,
    }
};
</script>

<template>
    <li class="nav-item dropdown">
        <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            {{ name }}
        <span v-show="this.subtitle !== false">
            <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
        </span>
        </a>
        <ul class="dropdown-menu">
            <li v-for="option in options">
                <a class="dropdown-item" href="#">{{ option }}</a>
            </li>
        </ul>
    </li>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.nav-item {
    padding: 40px 0;
    border-top: 2px solid transparent;
     &:hover {
        color: $color-primary;
        border-top: 2px solid $color-primary;
    }
}
</style>