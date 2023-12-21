<script>
export default {
    name: 'CardsTopSellComponent',
};
</script>

<template>
    <section id="top-sell">
        <div class="container">
            <div class="row">
                <div  id="featured" class="col-3">
                    <h6 class="text-uppercase">Featured</h6>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Black Jacket <strong>$215</strong></span>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../black_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Black Jacket $215</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p><span class="text-decoration-line-through">$235</span> <span class="text-decoration-underline">$200</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../black_elegant_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Hipster Black Top <strong>$57</strong></span>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../hipster_black_top-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                </div>
                <div id="on-sale" class="col-3">
                    <h6 class="text-uppercase">On Sale</h6>
                    <ul id="featured" class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Black Leather Jacket<strong>$215</strong></span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p><span class="text-decoration-line-through">$235</span> <span class="text-decoration-underline">$200</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../black_elegant_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Blue Leather Jacket <span class="text-decoration-line-through">$80</span></span>
                            <p><span class="text-decoration-underline">$60</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../blue_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Modern Leather Boots<span class="text-decoration-line-through">$50</span></span>
                            <p><span class="text-decoration-underline">$30</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../modern_leather_boots-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                </div>
                <div  id="top-rated" class="col-3">
                    <h6 class="text-uppercase">Top rated</h6>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Leather Gloves</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p><span>$45</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../leather_gloves-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Black Leather Jacket</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p><span class="text-decoration-line-through">$235</span> <span class="text-decoration-underline">$200</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../black_elegant_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Spring Printed Dress</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p><span>$47</span></p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../spring_printed_dress-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                </div>
                <div  id="latest-review" class="col-3">
                    <h6 class="text-uppercase">Latest review</h6>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Black Leather Jacket</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p>by admin</p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../black_elegant_leather_jacket-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Leather Gloves</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p>by Beardman</p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../leather_gloves-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                    <ul class="d-flex justify-content-between px-0">
                        <li class="d-flex flex-column">
                            <span>Spring Printed Dress</span>
                            <span><font-awesome-icon class="icon-small" v-for="n in 5" icon="fa-solid fa-star" /></span>
                            <p>by admin</p>
                        </li>
                        <li>
                            <img class="img-top-sell" src="../../spring_printed_dress-120x156.jpg" alt="model1">
                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#top-sell{
    margin: 80px 0 $size-distance;

    ul {
        li {
            list-style-type: none;
        }
        .icon-small {
            color: $color-primary;
        }
        .img-top-sell {
            width: 50px;
            height: auto;
        }
        p {
            margin: 0;
        }
    }
}
</style>