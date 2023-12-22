<script>
import ListRecentPost from './ListRecentPost.vue';
import ListTags from './ListTags.vue';
import ListRatedProducts from './ListRatedProducts.vue';
export default {
    name: 'FooterTopComponent',
    components: {
        ListRecentPost,
        ListTags,
        ListRatedProducts,
    }
}
</script>

<template>
<div id="footer-top">
    <div class="container d-flex gap-4">
        <div id="ec-info-shop" class="col-3">
            <img class="ec-img-logo-footer" src="../../classic_shop_logo_footer.png" alt="logo-small">
            <p>12345 North Main Street, New York, NY 55555555 Phone: 1.800.555.6789 Email: info@company.com Web: Theme-fusion.com </p>
            <ul class="ec-socials d-flex gap-3">
                <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            </ul>
        </div>
        <ListRatedProducts></ListRatedProducts>
        <ListRecentPost></ListRecentPost>
        <ListTags></ListTags>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#footer-top {
    background-color: $text;
    color: $white;
    padding: 60px 0 80px;

    #ec-info-shop {
        padding-right: 120px;
    
        .ec-img-logo-footer{
            width:100%;
            padding-bottom: 30px;
        }
        .ec-socials {
            padding-top: 30px;
        }
    }

    ul {
        padding: 0;
        li {
            list-style-type: none;
        }
        .img-top-sell {
            width: 50px;
            height: auto;
        }
    }
}

#ec-tags {
    .badge {
        border-radius: 0;
    }
}
</style>