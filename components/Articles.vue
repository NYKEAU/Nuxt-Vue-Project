<script setup>

import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref, onMounted } from 'vue';

let carousel = ref(null);

let prev = () => { };
let next = () => { };

onMounted(() => {
    prev = () => carousel.value.prev();
    next = () => carousel.value.next();
});

import articles from '@/cms/queries/articles';
const { data: articlesPosts, pending: articlesPending, error: articlesError } = await useLazyAsyncQuery(articles);

</script>

<template>
    <div v-if="articlesPending">Loading…</div>
    <div v-else-if="articlesError">{{ articlesError.message }}</div>
    <div v-else class="articles">
        <Carousel ref="carousel" wrapAround="true">
            <Slide v-for="article in articlesPosts.homepage.articles" :key="article.title">
                <div class="article">
                    <div class="content">
                        <h2>{{ article.title }}</h2>
                        <p v-html="article.description" class="desc"></p>
                        <p>{{ article.datePubli }}</p>
                    </div>
                    <div class="image">
                        <img :src="article.image" alt="Article image">
                    </div>
                </div>
            </Slide>
        </Carousel>
        <div class="carousel-controls">
            <button @click="prev" class="carousel-control prev">←</button>
            <button @click="next" class="carousel-control next">→</button>
        </div>
    </div>
</template>

<style scoped>
.articles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
}

h2 {
    margin-top: 0;
}

.article {
    padding: 20px;
    width: 80%;
    height: 200px;
    display: flex;
    margin: 20px 0;
    border-radius: 1rem;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
}

.content {
    flex: 1;
    padding-right: 20px;
}

.image {
    flex: 1;
    overflow: hidden;
}

.image img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.carousel-controls {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    width: 100%;
}

.carousel-control {
    background: none;
    border: none;
    font-size: 2em;
    color: #000;
    margin: 20px 10px;
    cursor: pointer;
}

.carousel-control.prev {
    position: relative;
    left: 10px;
}

.carousel-control.next {
    position: relative;
    right: 10px;
}
</style>