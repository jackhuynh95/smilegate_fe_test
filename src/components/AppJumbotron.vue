<script>
export default {
    name: 'JumbrotronComponent',
}
</script>

<template>
    <div id="header-bottom">
        <img class="ec-img-fluid" src="../../home1_slide_three_bg_2.jpg" alt="jumbotron_images">
        <div class="ec-overlay">
            <h1 class="text-white">Brand New Arrivals</h1>
            <span class="text-uppercase text-white">New collection form New York</span>
            <div class="d-flex justify-content-center mt-4 gap-2">
                <a href="#" class="btn btn-outline-light rounded-pill px-4" role="button" data-bs-toggle="button" aria-pressed="true">View all</a>
                <a href="#" class="btn btn-outline-light rounded-pill px-4" role="button" data-bs-toggle="button" aria-pressed="true">Lookbook</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#header-bottom {
    position: relative;
    text-align: center;
    .ec-img-fluid {
        object-fit: cover;
        width: 100%;
    }
    .ec-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>