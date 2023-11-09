<script setup>

import allReviews from '@/cms/queries/reviews';
const { data: reviewsPosts, pending: reviewsPending, error: reviewsError } = await useLazyAsyncQuery(allReviews);

console.log(reviewsPosts);
</script>

<template>
    <div v-if="reviewsPending">Loading...</div>
    <div v-else-if="reviewsError">{{ reviewsError.message }}</div>
    <div v-else>
        <ul>
            <li v-for="review in reviewsPosts.homepage.reviews" :key="review.id">
                <h2>{{ review.title }} - {{ review.note }}/10</h2>
                <p>{{ review.content }}</p>
                <i>{{ review.author }}<br />{{ review.date }}</i>
            </li>
        </ul>
    </div>
</template>