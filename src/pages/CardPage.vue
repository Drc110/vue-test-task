<script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const author = ref({name: "Загрузка...", email: "Загрузка...", phone: "Загрузка...", website: "Загрузка..."});

    const id = useRoute().params.cardId;

    onMounted(async () => {
        try{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            author.value = data;
        }
        catch(err){
            alert("Возникла ошибка: " + err)
        }
    })
</script>

<template>
    <div class="breedcrumbs">
        <router-link to="/">
            <h1>Главная/</h1>
        </router-link>
        <router-link to="/posts">
            <h1>Список/</h1>
        </router-link>
        <h1>Пост №{{ id }}</h1>
    </div>
    <div class="wrapper">
        <h1>
            Текст "рыбка" никак не связан с рыбами
        </h1>
        <h2>
            Semper auctor neque vitae tempus quam pellentesque. Ut venenatis tellus in metus vulputate. Blandit turpis cursus in hac habitasse platea dictumst. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Risus quis varius quam quisque id diam. Feugiat sed lectus vestibulum mattis. Montes nascetur ridiculus mus mauris vitae ultricies. Quis auctor elit sed vulputate mi. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nibh sit amet commodo nulla facilisi nullam. Vitae congue eu consequat ac. Et netus et malesuada fames ac turpis. Dolor sit amet consectetur adipiscing. Nec ullamcorper sit amet risus nullam. Diam volutpat commodo sed egestas egestas fringilla. Mattis aliquam faucibus purus in massa. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dignissim convallis aenean et tortor at risus. Neque sodales ut etiam sit amet nisl purus in mollis. Convallis posuere morbi leo urna molestie. Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus dictum. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Amet facilisis magna etiam tempor orci eu lobortis. Blandit aliquam etiam erat velit scelerisque in dictum. Est pellentesque elit ullamcorper dignissim. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Laoreet id donec ultrices tincidunt. Hac habitasse platea dictumst quisque sagittis. Ultrices gravida dictum fusce ut.
        </h2>
        <h2>
            Об авторе
            <ul>
                <li>Имя: {{ author.name }}</li>
                <li>Email: {{ author.email }}</li>
                <li>Телефон: {{ author.phone }}</li>
                <li>
                    Сайт: 
                    <a href="{{ author.website }}">
                        {{ author.website }}
                    </a>
                </li>
            </ul>
            
        </h2>
    </div>

</template>

<style scoped>
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
.wrapper{
    margin: 10px;
    h1{
        font-weight: 500;
    }
    h2{
        font-weight: 400;
        &:last-of-type{
            font-weight: 700;
        }
    }
}
</style>
