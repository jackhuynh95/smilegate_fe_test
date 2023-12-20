<script>
import AppNamingSection from './AppNamingSection.vue'; 
import AppLabelGender from './AppLabelGender.vue';
import AppCardsFeatured from './AppCardsFeatured.vue';
export default {
    name: 'Main',
    components: {
        AppNamingSection,
        AppLabelGender,
        AppCardsFeatured,
    }
};
</script>
    
<template>
    <AppNamingSection></AppNamingSection>
    <AppLabelGender></AppLabelGender>
    <AppCardsFeatured></AppCardsFeatured>
</template>

<style lang="scss" scoped>
</style>