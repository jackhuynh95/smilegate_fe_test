<script>
import AppNamingSection from './AppNamingSection.vue'; 
import AppLabelGender from './AppLabelGender.vue';
import AppCardsFeatured from './AppCardsFeatured.vue';
import AddCardsCollection from './AppCardsCollection.vue';
import AppCardsBestSell from './AppCardsBestSell.vue';
import AppOffertsBlock from './AppOffertsBlock.vue';
import AppBlockFeedback from './AppBlockFeedback.vue';
import AppPostsBlog from './AppPostsBlog.vue';
import AppCardsTopSell from './AppCardsTopSell.vue';
import AppBrandsList from './AppBrandsList.vue';
import AppCardsNewLetter from './AppCardsNewLetter.vue';
export default {
    name: 'Main',
    components: {
        AppNamingSection,
        AppLabelGender,
        AppCardsFeatured,
        AddCardsCollection,
        AppCardsBestSell,
        AppOffertsBlock,
        AppBlockFeedback,
        AppPostsBlog,
        AppCardsTopSell,
        AppBrandsList,
        AppCardsNewLetter,
    }
};
</script>
    
<template>
    <div class="ec-section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">Featured Products</h2>
        <span>Must heave products from our top sellers</span>
    </div>
    <AppLabelGender></AppLabelGender>
    <AppCardsFeatured></AppCardsFeatured>
    <AddCardsCollection></AddCardsCollection>
    <div class="ec-section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">Best Seller</h2>
        <span>Must heave products from our top sellers</span>
    </div>
    <div class="container">
        <AppCardsBestSell></AppCardsBestSell>
    </div>
    <AppOffertsBlock></AppOffertsBlock>
    <div class="ec-section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">New Arrivals</h2>
        <span>Brand new project from top designers</span>
    </div>
    <AppCardsBestSell></AppCardsBestSell>
    <AppBlockFeedback></AppBlockFeedback>
    <div class="ec-section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">From Our Blog</h2>
        <span>The latest Classic Shop news</span>
    </div>
    <AppPostsBlog></AppPostsBlog>
    <AppCardsTopSell></AppCardsTopSell>
    <AppBrandsList></AppBrandsList>
    <AppCardsNewLetter></AppCardsNewLetter>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *; 
.ec-section {
    margin: 80px 0 24px;
    h2 {
        &::before {
            display: inline-block;
            content: '';
            width: 520px;
            height: 1px;
            max-width: 550px;
            background-color: $elements;
            opacity: 0.5;
        }
        &::after {
            content: '';
            display: inline-block;
            width: 520px;
            height: 1px;
            max-width: 550px;
            background-color: $elements;
            opacity: 0.5;
        }
    }
}
</style>