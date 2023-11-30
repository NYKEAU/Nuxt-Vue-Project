<script setup>

import allReviews from '@/cms/queries/reviews';
const { data: reviewsPosts, pending: reviewsPending, error: reviewsError } = await useLazyAsyncQuery(allReviews);

</script>

<template>
    <div v-if="reviewsPending">Loading…</div>
    <div v-else-if="reviewsError">{{ reviewsError.message }}</div>
    <div v-else>
        <div class="slider">
            <div v-for="review in reviewsPosts.homepage.reviews" :key="review.id">
                <h2>{{ review.title }} - {{ review.note }}/10</h2>
                <div v-html="review.content"></div>
                <i>{{ review.author }}<br />{{ review.date }}</i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: self-start;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    margin: 0;
    padding: 25px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.slider>div {
    display: inline;
    white-space: normal;
    width: 20%;
    padding: 15px 20px;
    margin: 20px;
    border-radius: 1rem;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    transition: transform 0.25s ease;
}

.slider>div:hover {
    transform: scale(1.05);
}

.slider>div>h2 {
    margin: 0;
    padding: 0;
}

@media screen and (max-width: 768px) {
    .slider {
        flex-direction: column;
        align-items: center;
    }

    .slider>div {
        width: 80%;
    }
}
</style>