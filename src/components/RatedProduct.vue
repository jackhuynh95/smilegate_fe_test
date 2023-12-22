<script>
export default {
    name: 'RatedProductComponent',
    props: {
        model: String,
        feedback: Number,
        sale: String,
        price: String,
        img: String,
    }
}
</script>

<template>
    <li class="d-flex justify-content-between">
        <ul>
            <li><h6>{{ model }}</h6></li>
            <li>
                <font-awesome-icon v-for="n in this.feedback" class="icon-small" icon="fa-solid fa-star" />
            </li>
            <li><span class="text-decoration-line-through">{{ price }}</span> <span>{{ sale }}</span></li>
        </ul> 
        <img class="img-top-sell" :src="img" alt="model1">
    </li>
    <hr> 
</template>

<style lang="scss" scoped>
.img-top-sell {
    width: 60px;
}

</style>