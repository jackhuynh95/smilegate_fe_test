<script>
export default {
    name: 'CardsBestSellComponent',
};
</script>

<template>
    <div id="ec-carousel">
        <div class="container">
            <div class="ec-content-images d-flex justify-content-center">
                <img class="ec-image-carousel" src="../../spring_printed_dress-200x260.jpg" alt="spring1">
                <img class="ec-image-carousel" src="../../modern_love_tee-200x260.jpg" alt="spring1">
                <img class="ec-image-carousel" src="../../black_leather_jacket-200x260.jpg" alt="spring1">
                <img class="ec-image-carousel" src="../../black_elegant_leather_jacket-200x260.jpg" alt="spring1">
                <img class="ec-image-carousel" src="../../hipster_black_top-200x260.jpg" alt="spring1">
            </div>
            <div class="ec-button-carousel">
                <font-awesome-icon class="ec-prev" icon="fa-solid fa-chevron-left" />
                <font-awesome-icon class="ec-next" icon="fa-solid fa-chevron-right" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.container {
    position: relative;
    .ec-image-carousel {
        width: calc(100% / 5);
    }
    .ec-button-carousel {
        .ec-prev, .ec-next {
            background-color: $elements;
            padding: 30px 10px;
            color: $white;
            position: absolute;
        }
        .ec-prev {
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        .ec-next {
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>