<script>
export default {
    name: 'MenuLink',
    props: {
        name: String,
    }
};
</script>

<template>
<li class="no-hover text-uppercase">
        <a
          class="nav-link ec-color-primary rounded-pill py-1 px-4"
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
  border-radius: 40px;
  &:hover {
    background-color: $color-primary;
  }
}
</style>