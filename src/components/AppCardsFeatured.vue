<script>
export default {
    name: 'CardsFeaturedComponent',
};
</script>

<template>
    <div class="container d-flex justify-content-center mb-5">
        <div class="ec-card-featured">
            <img src="../../black_elegant_leather_jacket-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6>Black Leather Jacket</h6>
                <p>Men, Jackets, Jeans</p>
                <span>$235 $200</span>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../black_leather_suit-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6>Black Leather Suit</h6>
                <p>Men, Jackets</p>
                <span>$176</span>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../blue_jacket_and_white_stripe_tee-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6>Blue Jacket & Stripe Tee</h6>
                <p>Men, Jackets, Suits</p>
                <span>$580</span>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../black_elegant_leather_jacket-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6>Modern Black Leather Suit</h6>
                <p>Men, Jackets</p>
                <span>$96</span>
            </div>
        </div>
        <div class="ec-card-featured">
            <img src="../../modern_black_leather_suit-400x520.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6>Black Leather Jacket</h6>
                <p>Men, Jackets, Jeans</p>
                <span>$235 $200</span>
            </div>
        </div>
    </div>
        
</template>

<style lang="scss" scoped>

 .ec-card-featured {
    width: calc(100% / 5);
 }

</style>