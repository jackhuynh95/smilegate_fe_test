<script>
export default {
    name: 'RecentPostComponent',
    props: {
        title: String,
    }
};
</script>

<template>
    <li class="recent-post">
        <a href="#" class="text-white d-flex align-items-center gap-1 text-decoration-none"> 
            <font-awesome-icon class="icon-small" icon="fa-solid fa-chevron-right" />
            <span>{{ title }}</span>
        </a>
    </li>
    <hr>
</template>