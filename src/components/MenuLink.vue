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
.nav {
    .nav-item {
        border-top: 2px solid transparent;
        padding: 30px 0;

        &:hover {
            border-top: 2px solid $color-primary;
        }            
    }
    .nav-link {
        color: $text;
        &:hover {
        color: $color-primary;
    }
}
    .ec-color-primary {
                background-color: $color-primary;
                color: $white;

                &:hover {
                    background-color: $color-secondary;
                    color: $white;
                }
            }
        }

</style>