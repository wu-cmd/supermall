<template>
  <div id="app">
   <TabBer>
     <Tabbaritem></Tabbaritem>
     <Tabbaritem></Tabbaritem>
     <Tabbaritem></Tabbaritem>
     <Tabbaritem></Tabbaritem>
     <!-- <div class="tab-bar-item">
        <img src="/src/assets/img/Tabbar/sy1.png">
        首页
        </div>
      <div class="tab-bar-item">
        <img src="/src/assets/img/Tabbar/fl1.png">
        分类
        </div>
      <div class="tab-bar-item">
       <img src="/src/assets/img/Tabbar/gwc1.png">
        购物车
        </div>
      <div class="tab-bar-item">
       <img src="/src/assets/img/Tabbar/wd1.png">
        我的
        </div> -->
   </TabBer>
  </div>
</template>

<script>
import TabBer from "./router/TabBar/TabBar"
import Tabbaritem from "./router/TabBar/Tabbaritem"
export default {
  name: 'App',
  components: {
    TabBer,
    Tabbaritem
  },
}
</script>

<style>
@import 'assets/css/base.css';
.tar-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 1px rgba(100,100,100,0.1);
}

</style>
