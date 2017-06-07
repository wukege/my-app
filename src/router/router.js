/**
 * Created by kege on 2017/6/7.
 */
import App from '../App.vue'
import Test from '../page/test.vue'
import Item from '../page/item.vue'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/test',
    component: Test
  }, {
    path: '/item',
    component: Item
  }]
},{
  path: '*',
  redirect: '/' //重定向
}
]