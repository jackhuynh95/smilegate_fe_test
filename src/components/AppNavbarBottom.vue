<script>
export default {
    name: 'NavBarBottomComponent',
}
</script>

<template>
    <div id="bottom-header" class="container d-flex align-items-center justify-content-between">
        <div>
            <img src="../../classic_shop_logo2x.png" alt="">
        </div>
        <nav>
            <ul class="nav nav-pills">
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Home
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Shop
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Products
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Categories
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Elements
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item text-uppercase">
                    <a class="nav-link ec-color-primary rounded-pill px-4" aria-current="page" href="#">Shop now!</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

@use '../../src/assets/styles/partials/variables' as *;
.nav-link {
    color: $text;

    &:hover {
        color: $color-primary;
    }
}
.ec-color-primary {
    background-color: $color-primary;
    color: $white;
    &:hover {
        background-color: $color-secondary;
        color: $white;
    }
}
</style>