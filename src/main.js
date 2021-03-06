import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Loading from './components/loading'
//导入路由配置
import routes from './router/router'
//导入Mint组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//使用MIntUI库
Vue.use(Mint);
//使用路由
Vue.use(VueRouter);
//实例化路由
Vue.use(Loading);
const router = new VueRouter(routes);

new Vue({
  router,
  el:'#app',
  render: h => h(App)
});


