<script>
export default {
    name: 'FooterTopComponent',
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
        <div id="ec-featured" class="col-3">
            <h6 class="text-uppercase">Top Rated products</h6>
            <ul class="d-flex justify-content-between px-0">
                <li class="d-flex flex-column">
                    <span>Black Jacket <strong>$215</strong></span>
                    <span><font-awesome-icon v-for="n in 5" class="icon-small" icon="fa-solid fa-star" /></span>
                    <span>$45</span>
                 </li>
                 <hr>
                <li>
                    <img class="img-top-sell" src="../../black_leather_jacket-120x156.jpg" alt="model1">
                </li>
            </ul>
            <hr>
        </div>
        
        <div id="ec-tags" class="col-3">
            <h6 class="text-uppercase">Tags</h6>
            <ul class="d-flex px-0">
                <li class="d-flex gap-1">
                    <a href=""><span class="badge border border-dark-subtle">New</span></a>
                    <a href=""><span class="badge border border-dark-subtle">New</span></a>
                    <a href=""><span class="badge border border-dark-subtle">New</span></a>
                </li>
                <hr>
            </ul>
        </div>
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