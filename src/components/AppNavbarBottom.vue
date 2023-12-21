<script>
export default {
    name: 'NavBarBottomComponent',
}
</script>

<template>
    <div id="ec-bottom-header" class="container d-flex align-items-center justify-content-between">
        <div class="ec-box-logo">
            <img class=ec-logo src="../../classic_shop_logo2x.png" alt="logo-big">
        </div>
        <nav id="ec-box-menu">
            <ul class="nav nav-pills d-flex align-items-center">
                <li class="nav-item dropdown">
                    <a class="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                        Home
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
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
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
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
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
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
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
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
                        <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-down" />
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="no-hover text-uppercase">
                    <a class="nav-link ec-color-primary rounded-pill py-1 px-4" aria-current="page" href="#">Shop now!</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <font-awesome-icon class="icon-small px-3" icon="fa-solid fa-magnifying-glass" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

@use '../../src/assets/styles/partials/variables' as *;

#ec-bottom-header {

    .ec-logo {
        max-width: 180px;
        }
        .nav {
            .nav-item {
                border-top: 2px solid transparent;
                padding: 30px 0;
            
                &:hover {
                    border-top: 2px solid $color-primary;
                }            
            }
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
        }
    }
</style>