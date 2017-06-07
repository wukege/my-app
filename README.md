## vue项目使用
### 使用vue-cli搭建vue项目
1. 全局安装vue-cli构建工具
```
//全局安装 vue-cli
$ npm install --global vue-cli
```
2. 使用vue --help查看vue-cli命令
3. 使用vue list 查看vue-cli提供的模板
4. 创建一个基于 webpack 模板的新项目（ 简单模板构建）
```
//创建了一个my-project
vue init webpack-simple my-project
```
5. 安装依赖
```
cd my-project
npm install
```
6. 开启本地服务器localhost:端口
```
npm run dev
```
###  安装常用插件
> 插件安装注意--save 和--save-dev 之间的却别
####  安装[vue-router](https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html)（路由）
```
//安装vue-router并添加到依赖中（dependencies）
npm install vue-router --save
```
1. 配置路由
```
import App from '../App.vue'
import Test from '../page/test.vue'
import Item from '../page/item.vue'
//导出配置的路由
export default [{
  path: '/', //配置跟路由
  component: App,
  children: [{ //配置子路由
    path: '/test',
    component: Test
  }, {
    path: '/item',
    component: Item
  }]
},{
  path: '*',
  redirect: '/' //重定向
}]
```
2. 路由导入和使用
```
//1.导入路由
import VueRouter from 'vue-router'
//2.导入路由配置
import routes from './router/router'
//3.使用路由
Vue.use(VueRouter);
//4.实例化路由
const router = new VueRouter({routes});
//5.挂载路由
new Vue({
  router, //挂载
  el: '#app',
  render: h => h(App)
});
```
3. 渲染路由
```
<div id="app">
	<!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
```
####  安装 [Mint UI 组件库 ](http://mint-ui.github.io/#!/zh-cn)
```
//安装vue-router并添加到依赖中（dependencies）
npm install mint-ui --save或(-S)
```
1. 引入Mint UI组件样式
```
//导入Mint组件库
import Mint from 'mint-ui'
//导入MInt组件库样式
import 'mint-ui/lib/style.css'
//使用
Vue.use(Mint);
```
2. 引入Mint UI后需要在webpack中配置（css）loader
```
{
  test: /\.css$/,
  loader: 'style-loader!css-loader'
}
```
#### 安装axios 数据请求
```
npm install axios --save或(-S)
```
1. axios的使用
```
import axios from 'axios';
let urlPho = '/test/';
/**
 *@description 找到待我已审核的文章
 *@method getUnAuditArticles
 */
const getUnAuditArticles = (obj, cb)=> {
  axios.post(urlPho + 'sysUser/getAuditedArticles', obj)
      .then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          cb(response.data);
        }
      })
      .catch(function (error) {
        return Promise.reject(error);
      });
};
export{ //导出模块
    getUnAuditArticles
}
```
































