<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="./images/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="./images/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="./images/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" src="./images/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected: "3"
    }
  },
  watch:{
    selected(val,oldVal){
     switch (val){
       case "1":
         this.$router.replace({ path: 'test'});
         break;
       case "2":
         this.$router.replace({ path: 'item'});
         break;
       case "3":
         this.$router.replace({ path: 'item'});
         break;
       case 4:
         break;
       default:

     }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
