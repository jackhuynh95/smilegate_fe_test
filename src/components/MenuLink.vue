<script>
export default {
    name: 'MenuLink',
    props: {
        name: String,
    }
};
</script>

<template>
<li class="no-hover text-uppercase py-2 px-4">
        <a
          class="nav-link ec-color-primary rounded-pill"
          aria-current="page"
          href="#"
          >{{ name  }}</a
        >
      </li>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.no-hover {
  background-color: transparent;
  border-color: $white;
  color: $white;
  border: 1px solid;
  border-radius: 8px;
  &:hover {
    background-color: $color-primary;
  }

  a {
    color: $white;
    text-decoration: none;
  }
}
</style>