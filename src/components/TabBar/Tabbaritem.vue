<template>
<div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon2"></slot></div>
     <div :class="{active:isactive}"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name:"Tabbritem",
  props:{
    path:String
},
    data() {  
      return {
        isactive:false
       }
      },
      methods:{
        itemClick(){
          this.$router.replace('/home')
          // console.log(this.path)
         
      }
      }
  }
</script>
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align:middle;
    }
    .active{
      color: rgb(212, 35, 122);
    }
</style>