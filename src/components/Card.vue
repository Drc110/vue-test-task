<script setup lang="ts">
    defineProps({
        id: Number
    })
</script>

<template>
    <router-link :to="{ name: 'postsSwitch', params: { cardId: id }}" class="card">
        <p>Пост № {{id}}</p>
    </router-link>
</template>

<style scoped>
a:link { text-decoration: none; color: black;}
a:visited { text-decoration: none; color: black;}
a:hover { text-decoration: none; color: black;}
a:active { text-decoration: none; color: black;}
.card{
    width: 90%;
    height: 100px;
    background-color: antiquewhite;
    border-radius: 10px;
    text-align: start;
    p{
        margin: 20px auto auto 20px;
        font-weight: 500;
        font-size: 20px;
    }
}
</style>
