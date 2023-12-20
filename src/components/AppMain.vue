<script>
import AppNamingSection from './AppNamingSection.vue'; 
import AppLabelGender from './AppLabelGender.vue';
import AppCardsFeatured from './AppCardsFeatured.vue';
import AddCardsCollection from './AppCardsCollection.vue';
import AppCardsBestSell from './AppCardsBestSell.vue';
import AppOffertsBlock from './AppOffertsBlock.vue';
export default {
    name: 'Main',
    components: {
        AppNamingSection,
        AppLabelGender,
        AppCardsFeatured,
        AddCardsCollection,
        AppCardsBestSell,
        AppOffertsBlock,
    }
};
</script>
    
<template>
    <div class="section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">Feature Products</h2>
        <span>Must heave products from our top sellers</span>
    </div>
    <AppLabelGender></AppLabelGender>
    <AppCardsFeatured></AppCardsFeatured>
    <AddCardsCollection></AddCardsCollection>
    <div class="section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">Best Seller</h2>
        <span>Must heave products from our top sellers</span>
    </div>
    <AppCardsBestSell></AppCardsBestSell>
    <AppOffertsBlock></AppOffertsBlock>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *; 
.section {
    h2 {
        &::before {
            content: '';
            display: inline-block;
            width: 200px;
            height: 1px;
            max-width: 250px;
            background-color: $elements;
            opacity: 0.5;
        }
        &::after {
            content: '';
            display: inline-block;
            width: 200px;
            height: 1px;
            max-width: 250px;
            background-color: $elements;
            opacity: 0.5;
        }
    }
}
</style>