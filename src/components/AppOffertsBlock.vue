<script>
    export default {
        name: 'OffertBlock',
    }
</script>

<template>
 <div id="offert-block">
    <!-- <img class="img-fluid" src="../assets/images/bkgd_confetti-compressor.jpg" alt="confetti_bg"> -->
    <div class="container d-flex gap-4">
        <div class="box-offert">
            <img class="img-fluid" src="../../promo_box_1_bg.jpg" alt="promo1">
            <div class="ec-overlay">
                <h2 class="text-white">70% Off</h2>
                <p class="text-white">Vivamus tempor leo iacus, feugiat ut magna aliquam erat.</p>
                <div class="d-flex mt-4 gap-2">
                    <a href="#" class="btn btn-outline-light rounded-pill px-4 text-uppercase" role="button" data-bs-toggle="button" aria-pressed="true">View more</a>
                </div>
            </div>
        </div>
        <div class="box-offert">
            <img class="img-fluid" src="../../promo_box_2_bg.jpg" alt="promo1">
            <div class="ec-overlay">
                <h2 class="text-white">Free Shipping</h2>
                <p class="text-white">Vivamus tempor leo iacus, feugiat ut magna aliquam erat.</p>
                <div class="d-flex mt-4 gap-2">
                    <a href="#" class="btn btn-outline-light rounded-pill px-4 text-uppercase" role="button" data-bs-toggle="button" aria-pressed="true">View more</a>
                </div>
            </div>
        </div>
    </div>

 </div>
</template>

<style lang="scss" scoped>
    #offert-block {
        background-image: url(../assets/images/bkgd_confetti-compressor.jpg);
        background-size: 90%;
        background-position: center;

        .container {
            position: relative;
            .box-offert {
                position: relative;
                padding: 100px 0;
                .ec-overlay {
                    position: absolute;
                    top: 50%;
                    left: 10%;
                    transform: translateY(-50%);

                    h2 {
                        font-weight: 800;
                    }
                    p {
                        width: 60%;
                    }
                }
            }
        }
    }

</style>