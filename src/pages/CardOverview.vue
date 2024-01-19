
<script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import Card from '../components/Card.vue'
    const postsId = ref([])
    interface Post {
        id: Number;
    }
    onMounted(async () => {
        try{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?page=1`);
            postsId.value = data.map((el : Post) => el.id)
        }
        catch(err){
            alert("Возникла ошибка: " + err)
        }
    })
    
    const deletePost = (evt : Event, id : Number): void => {
        postsId.value = postsId.value.filter((el : Number) => el != id)
        evt.preventDefault()
    }
</script>

<template>
    <div class="breedcrumbs">
        <router-link to="/">
            <h1>Главная/</h1>
        </router-link>
        <h1>Список постов</h1>
    </div>
    
    <div class="myGrid">       
        <Card
            v-for="el in postsId"
            :key="el"
            :id="el"
            @contextmenu.native = "deletePost($event, el)"
        />
    </div>
</template>

<style lang="scss" scoped>
.breedcrumbs{
    display: flex;
    margin: 10px;
    a:link { text-decoration: none; color: black;}
    a:visited { text-decoration: none; color: black;}
    a:hover { text-decoration: none; color: black;}
    a:active { text-decoration: none; color: black;}
    h1{
        margin: 0;
    }
}
//mixin on mobile
.myGrid{
    width: 100%;
    margin-top: 20px;
    display: grid;
    @media only screen and (max-width: 1024px) {
        grid-template-columns: 50% 50%;
    }
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: auto;
    justify-items: center;
    &>*{
        margin-bottom: 10px;
    }
}
</style>