<script>
export default {
    name: 'NamingSectionComponent',
};
</script>

<template>
    <div class="section d-flex flex-column align-items-center justify-content-center">
        <h2 class="gap-2 d-flex align-items-center">Feature Products</h2>
        <span>Must heave products from our top sellers</span>
    </div>
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