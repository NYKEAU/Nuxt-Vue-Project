<script setup>

import topHeader from '@/cms/queries/header';
const { data: headerPosts, pending: headerPending, error: headerError } = await useLazyAsyncQuery(topHeader);

console.log(headerPosts);

</script>

<template class="template">
    <div v-if="headerPending">Loading...</div>
    <div v-else-if="headerError">{{ headerError.message }}</div>
    <div id="content" v-else>
        <h1>{{ headerPosts.header.title }}</h1>
        <div v-html="headerPosts.header.description"></div>
    </div>
</template>

<style scoped>
div#content {
    width: 100%;
    height: 20vh;
    background-color: #888;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

div#content h1 {
    margin-bottom: 0;
    padding: 0;
}
</style>