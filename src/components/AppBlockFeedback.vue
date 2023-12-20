<script>
export default {
    name: 'FeedbackComponent',
};
</script>

<template>
    <section id="ec-carousel-feedback">
        <!-- <img class="ecimg-fluid" src="../../testimonials_home_1_bg.jpg" alt="jumbotron_images"> -->
        <div class="ec-overlay container">
            <div class="ec-testimonial">
                <img src="../../man_testimonial.png" alt="man-testimonial">
            </div>
            <p class="text-white">Curabitur non tristique tortor. Vestibulum aliqeut suscipit ipsum in volutpat. Donec vel lcinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bidendum.</p>
            <span class="text-white">Darìo Pineda, Thema Fusion</span>
            <div class="d-flex justify-content-center my-4 gap-2">
                <a href="#" role="button">
                    <font-awesome-icon icon="fa-solid fa-circle" />
                </a>
                <a href="#" role="button">
                    <font-awesome-icon icon="fa-regular fa-circle" />
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#ec-carousel-feedback {
    background-image: url(../../testimonials_home_1_bg.jpg);
    position: relative;
    text-align: center;
    padding: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .ec-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>