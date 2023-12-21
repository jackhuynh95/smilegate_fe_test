<script>
export default {
    name: 'BrandsListComponent',
};
</script>

<template>
    <section id="brands">
        <h6 class="text-center text-uppercase">Brand logos</h6>
        <div class="container d-flex justify-content-between">
            <div class="ec-logo-content text-center">
                <img class="img-fluid" src="../../public/b_logotype_5.png" alt="logo1">
            </div>
            <div class="ec-logo-content text-center">
                <img class="img-fluid" src="../../public/b_logotype_7.png" alt="logo1">
            </div>
            <div class="ec-logo-content text-center">
                <img class="img-fluid" src="../../public/b_logotype_1.png" alt="logo1">
            </div>
            <div class="ec-logo-content text-center">
                <img class="img-fluid" src="../../public/b_logotype_2.png" alt="logo1">
            </div>
            <div class="ec-logo-content text-center">
                <img class="img-fluid" src="../../public/b_logotype_3.png" alt="logo1">
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
#brands {
    background-color: #f6f6f6;
    padding: 60px 0;
    h6 {
        margin-bottom: 50px;
        letter-spacing: 4px;
    }
    .ec-logo-content {
        width: calc(100vw / 5);
    }
}

</style>