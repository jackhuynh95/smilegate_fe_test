<script>
export default {
    name: 'CardsFeaturedComponent',
};
</script>

<template>
    <section class="container d-flex justify-content-center mb-5">
        <div class="ec-card-featured">
            <img src="../../black_elegant_leather_jacket-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <strong>Black Leather Jacket</strong>
                <p>Men, Jackets, Jeans</p>
                <p class="price"><span class="text-decoration-line-through">$235</span> $200</p>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../black_leather_suit-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <strong>Black Leather Suit</strong>
                <p>Men, Jackets</p>
                <p class="price">$176</p>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../blue_jacket_and_white_stripe_tee-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <strong>Blue Jacket & Stripe Tee</strong>
                <p>Men, Jackets, Suits</p>
                <p class="price">$580</p>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../modern_black_leather_suit-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <strong>Black Leather Jacket</strong>
                <p>Men, Jackets, Jeans</p>
                <p class="price">$96</p>
            </div>
        </div>
    </section>
        
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
 .ec-card-featured {
    width: calc(100% / 4);
    margin-bottom: 140px;
    .card-body {
        margin-top: 36px;
        .price {
            color: $color-primary;
        }
    }
}
</style>