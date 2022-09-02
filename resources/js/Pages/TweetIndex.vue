<script setup>
defineProps({
    tweets: Array,
});
</script>
<template>
    <div class="p-4">
        <h1 class="text-lg font-bold">ユーザ一覧</h1>
        <ul>
            <li v-for="tweet in tweets" :key="tweet.id">{{ tweet.content }}</li>
        </ul>
    </div>
</template>
