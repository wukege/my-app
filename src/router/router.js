/**
 * Created by kege on 2017/6/7.
 */
import Home from '../page/home.vue'
import Item from '../page/item.vue'
import Test from '../page/test.vue'

export default {
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home,
    children:[{path:'test',component:Test}]},
    {path: '/item', component: Item},
    {path: '*',redirect: '/'}//重定向
  ]
}