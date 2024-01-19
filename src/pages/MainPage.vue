<template>

  <h1>
    Главная страница
  </h1>
  
  <div class="wrapper">
    <div class="sidebar">
      <ul>
        <li v-for="index in 10" :key="index">
          <router-link to="/posts">
            Лента постов
          </router-link>
        </li>
      </ul>
    </div>

    <div class="useless">
      <img src="/pGaJKtOnYzE.jpg" draggable="false" width="300px" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor magna. Dolor sit amet consectetur adipiscing. Sapien pellentesque habitant morbi tristique. Sed elementum tempus egestas sed sed risus pretium. Posuere lorem ipsum dolor sit amet consectetur. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Ultrices sagittis orci a scelerisque purus semper eget duis at. Placerat in egestas erat imperdiet sed euismod nisi porta. Consequat ac felis donec et odio. Quis auctor elit sed vulputate mi. Consequat nisl vel pretium lectus quam id. Nec feugiat nisl pretium fusce id. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Euismod in pellentesque massa placerat duis ultricies lacus sed. Egestas erat imperdiet sed euismod nisi. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Quam vulputate dignissim suspendisse in est ante in nibh. Amet tellus cras adipiscing enim. Vel pharetra vel turpis nunc eget lorem dolor. At varius vel pharetra vel. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Viverra mauris in aliquam sem fringilla ut. Justo donec enim diam vulputate ut pharetra sit. Egestas integer eget aliquet nibh praesent tristique magna sit. Velit sed ullamcorper morbi tincidunt. Nunc mi ipsum faucibus vitae aliquet nec. Quam pellentesque nec nam aliquam sem. Consequat mauris nunc congue nisi vitae suscipit. Massa enim nec dui nunc mattis. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Sed euismod nisi porta lorem mollis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Donec et odio pellentesque diam. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Bibendum arcu vitae elementum curabitur vitae nunc sed. Quisque id diam vel quam. Id ornare arcu odio ut sem nulla. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet dictum sit amet justo. Hendrerit dolor magna eget est lorem. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Porta lorem mollis aliquam ut porttitor leo a diam.</p>
    </div>
  </div>

</template>

<style scoped lang="scss">
h1{
  margin: 10px;
}
.wrapper{
  display: flex;
  .sidebar{
    flex: 1;
    padding: 20px 0;
    width: 100%;
    background-color: rgba(251, 247, 240, 1);
    ul{
      margin: 0;
      list-style-type: none;
      li{
        font-size: 20px;
        margin-bottom: 15px;
      }
    }
  }
  .useless{
    flex: 4;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      border-radius: 50%;
    }
    p{
      margin: 20px 0 0 0;
      font-weight: 400;
      font-size: 22px;
    }
  }
}
</style>
