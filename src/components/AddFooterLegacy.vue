<script>
export default {
    name: 'LegacyComponent'
}
</script>

<template>
    <div id="bottom-footer" class="text-center py-3">
        <p class="pt-4">Copyright 2012-2020 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by WorldPress</p>
        <img src="../../payment_cards_footer.png" alt="payment">
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
#bottom-footer {
    color: $white;
    background-color: $footer-bottom;
    p {
        font-size: 10px;
    }
}
</style>