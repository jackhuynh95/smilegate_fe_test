<script>
export default {
    name: 'PostsBlogComponent',
};
</script>

<template>
    <section id="from-blog">
        <!-- <div class="container">
            <div class="">
                <img src="../../post_img_12-700x441.jpg" alt="post-1">
                <h5>Aenean lobortis enim viverra</h5>
                <span>September 9th, 2015 | 0 Comments</span>
                <p>Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
            </div>
        </div> -->
        <div class="container">
            <div class="card-group gap-4">
                <div class="card">
                    <img src="../../post_img_12-700x441.jpg" class="card-img-top" alt="...">
                    <div>
                        <h6 class="card-title">Aenean lobortis enim viverra</h6>
                        <p class="card-text"><small class="text-body-secondary">September 9th, 2015 | 0 Comments</small></p>
                        <p class="card-text">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../post_img_11-700x441.jpg" class="card-img-top" alt="...">
                    <div>
                        <h6 class="card-title">Duis ac massa semper maximus</h6>
                        <p class="card-text"><small class="text-body-secondary">September 9th, 2015 | 0 Comments</small></p>
                        <p class="card-text">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../post_img_10-700x441.jpg" class="card-img-top" alt="...">
                    <div>
                        <h6 class="card-title">Nunc fermint nulla eu justo sem id</h6>
                        <p class="card-text"><small class="text-body-secondary">September 9th, 2015 | 0 Comments</small></p>
                        <p class="card-text">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr class="my-2">
</template>

<style lang="scss" scoped>
#from-blog {
    padding-bottom: 80px;
    .card {
        --bs-card-border-width: 0;
    }
}
</style>