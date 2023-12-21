<script>
export default {
    name: 'LabelGenderComponent',
};
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center py-4">
            <li class="page-item active">
                <a class="page-link px-4" href="#">Men</a>
            </li>
            <li class="page-item">
                <a class="page-link px-4" href="#">Woman</a>
            </li>
            <li class="page-item">
                <a class="page-link px-4" href="#">Accessories</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
 .page-item {
    --bs-pagination-border-radius: 0;
    --bs-pagination-color: $text;
    background-color: $elements;
        .page-link {
        background-color: rgb(227, 227, 227);
        color: $text;
        border: 1px solid $light-gray;
        font-weight: 800;
    }
}

.active > .page-link {
   background-color: $white;
   border: 1px solid $light-gray;
   color: $text;
}

</style>