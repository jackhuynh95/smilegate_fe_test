<script>
export default {
    name: 'JumbrotronComponent',
}
</script>

<template>
    <div id="header-bottom">
        <img class="img-fluid my-3" src="../../public/home1_slide_three_bg_2.jpg" alt="jumbotron_images">
        <div class="ec-overlay">
            <h1 class="text-white">Brand New Arrivals</h1>
            <span class="text-uppercase text-white">New collection form New York</span>
            <div class="d-flex justify-content-center">
                <a href="#" class="btn active rounded-pill" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
                <a href="#" class="btn active rounded-pill" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#header-bottom {
    position: relative;
    text-align: center;
    .ec-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>