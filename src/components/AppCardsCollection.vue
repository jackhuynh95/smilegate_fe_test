<script>
export default {
    name: 'CardsCollectionComponent',
};
</script>

<template>
    <div class="card-group">
        <div class="card">
            <img src="../../winter_collection_bg.jpg" class="card-img-top" alt="winter-clothes">
            <div class="ec-overlay">
                <h2 class="text-white">Winter Collection</h2>
                <span class="text-uppercase text-white">Stylish and warm</span>
                <div class="d-flex justify-content-center mt-4 gap-2">
                    <a href="#" class="btn btn-outline-light rounded-pill px-4 text-uppercase" role="button" data-bs-toggle="button" aria-pressed="true">View more</a>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../spring_collection_bg.jpg" class="card-img-top" alt="spring-clothes">
            <div class="ec-overlay">
                <h2 class="text-white">Spring Collection</h2>
                <span class="text-uppercase text-white">Bright and colorful</span>
                <div class="d-flex justify-content-center mt-4 gap-2">
                    <a href="#" class="btn btn-outline-light rounded-pill px-4 text-uppercase" role="button" data-bs-toggle="button" aria-pressed="true">View more</a>
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../autumn_collection_bg.jpg" class="card-img-top" alt="autumn-clothes">
            <div class="ec-overlay">
                <h2 class="text-white">Autumn Collection</h2>
                <span class="text-uppercase text-white">Rich and comfortable</span>
                <div class="d-flex justify-content-center mt-4 gap-2">
                    <a href="#" class="btn btn-outline-light rounded-pill px-4 text-uppercase" role="button" data-bs-toggle="button" aria-pressed="true">View more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    position: relative;
    text-align: center;
    --bs-card-border-width: 0;
    .ec-overlay {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
            font-weight: 800;
        }
    }
}
</style>