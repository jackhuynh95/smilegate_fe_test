<script>
import AppPostsBlog from './AppPostsBlog.vue';
export default {
    name: 'Main',
    components: {
        AppPostsBlog,
    }
};
</script>
    
<template>
    <div class="container">
        <h2>Photo Cards:</h2>
        <AppPostsBlog></AppPostsBlog>
    </div>
</template>