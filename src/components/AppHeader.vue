<script>
export default {
    name: 'HeaderApp',
}
</script>
<template>
    <header>
        <div id="top-header" class="container py-2 d-flex align-items-center justify-content-between">
            <div class="ec-socials d-flex gap-3">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </div>
            <div class="ec-shop-list">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" class="btn">Shopping Cart</button>
                    <button type="button" class="btn">
                        My Account
                        <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </button>

                    <div class="btn-group" role="group">
                        <button type="button" class="btn" data-bs-toggle="dropdown">
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                            Cart
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                            <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="bottom-header" class="container d-flex align-items-center justify-content-between">
            <div>logo</div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse gap-2" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <button type="button" class="btn btn-primary ec-btn">
                                Primary
                            </button>
                        </ul>
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<style lang="scss" scoped>

header {
    height: 160px;

    #top-header {
        height: 35%;
    }
    #bottom-header {
        height: 100%;
        .ec-btn {
            border-radius:20px;
        }
    }
}


</style>