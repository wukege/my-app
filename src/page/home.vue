<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="../images/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="../images/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="../images/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" src="../images/logo.png">
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
        selected: "1"
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