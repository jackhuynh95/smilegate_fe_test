<script>
import RatedProduct from './RatedProduct.vue';
export default {
    name: 'ListRatedProductsComponent',
    components: {
        RatedProduct,
    },
    data() {
        return {
            ratedProducts: [{
                name: 'Leather Gloves',
                stars: 5,
                salePrice: '',
                price: '$45',
                path: '../../leather_gloves-120x156.jpg'
            },
            {
                name: 'Black Leather Jacket',
                stars: 5,
                salePrice: '$235',
                price: '$200',
                path: '../../black_elegant_leather_jacket-120x156.jpg'
            },
            {
                name: 'Spring Printed Dress',
                stars: 5,
                salePrice: '',
                price: '$47',
                path: '../../spring_printed_dress-120x156.jpg'
            }]
        }
    }
};
</script>

<template>
    <div id="ec-featured" class="col-3">
        <h6 class="text-uppercase">Top Rated products</h6>
        <ul class="d-flex flex-column">
            <RatedProduct
                v-for="product in ratedProducts"
                :model="product.name"
                :feedback="product.stars"
                :sale="product.salePrice"
                :price="product.price"
                :img="product.path">
            </RatedProduct>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
h6 {
    padding-bottom: 20px;
}
</style>