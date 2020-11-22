<template>
  <div id="app">
     <router-view></router-view>
   <TabBer>
      <Tabbaritem path="/home">
       <img slot="item-icon" src="./assets/img/tabbar/sy1.png">
       <img slot="item-icon2" src="./assets/img/tabbar/sy2.png">
       <div slot="item-text"> 首页</div>
      </Tabbaritem>
     <Tabbaritem path="/category">
         <img slot="item-icon" src="./assets/img/tabbar/fl1.png">
          <img slot="item-icon2" src="./assets/img/tabbar/fl2.png">
        <div slot="item-text"> 分类 </div>
     </Tabbaritem>
     <Tabbaritem path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/gwc1.png">
         <img slot="item-icon2" src="./assets/img/tabbar/gwc2.png">
        <div slot="item-text"> 购物车 </div>
        
     </Tabbaritem>
     <Tabbaritem path="/profile">
       <img slot="item-icon" src="./assets/img/tabbar/wd1.png">
        <img slot="item-icon2" src="./assets/img/tabbar/wd2.png">
       <div slot="item-text"> 我的 </div>
     </Tabbaritem>
   </TabBer>
  
  </div>
</template>

<script>
import TabBer from "./components/TabBar/TabBar"
import Tabbaritem from "./components/TabBar/Tabbaritem"
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
</style>
