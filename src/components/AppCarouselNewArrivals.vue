<script>
export default {
    name: 'CarouselNewArrivalsComponent',
};
</script>

<template>
    <section id="ec-carousel-arrivals">
        <div class="ec-content-images d-flex justify-content-center">
            <img class="ec-image-carousel" src="../../black_elegant_leather_jacket-400x520.jpg" alt="spring1">
            <img class="ec-image-carousel" src="../../hipster_black_top.jpg" alt="spring1">
            <img class="ec-image-carousel" src="../../black_leather_suit.jpg" alt="spring1">
            <img class="ec-image-carousel" src="../../spring_printed_dress.jpg" alt="spring1">
            <img class="ec-image-carousel" src="../../modern_love_tee.jpg" alt="spring1">
        </div>
        <font-awesome-icon class="ec-prev" icon="fa-solid fa-chevron-left" />
        <font-awesome-icon class="ec-next" icon="fa-solid fa-chevron-right" />
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#ec-carousel-arrivals {
    position: relative;
    padding-bottom: $size-distance;
    .ec-content-images {
        width: 100%;
        .ec-image-carousel {
            width: calc(100% / 5);
        }
    }
    .ec-prev {
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        background-color: $light-gray;
        padding: 30px 10px;
        color: $white;
        position: absolute;
    }
    .ec-next {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: $light-gray;
        padding: 30px 10px;
        color: $white;
        position: absolute;
    }
}
</style>