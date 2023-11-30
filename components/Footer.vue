<script setup>

import footer from '@/cms/queries/footer';
const { data: footerPosts, pending: footerPending, error: footerError } = await useLazyAsyncQuery(footer);

console.log(footerPosts);

</script>

<template class="template">
    <div v-if="footerPending">Loading...</div>
    <div v-else-if="footerError">{{ footerError.message }}</div>
    <div id="content" v-else>
        <div class="footer">
            <div class="column" v-for="(menu, index) in footerPosts.homepage.menus" :key="index">
                <h2>{{ menu.menu }}</h2>
                <ul>
                    <li v-for="(link, linkIndex) in menu.links" :key="linkIndex">
                        <a :href="link.url">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: self-start;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: black;
    color: white;
    padding: 50px;
}

h2 {
    color: grey;
}

ul,
li,
a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    color: white;
    margin: 0;
    padding: 0;
}

a:hover {
    color: grey;
}
</style>