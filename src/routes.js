import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import users from './views/users/users.vue'
import categoryfirst from './views/goods/categoryfirst.vue'
import categorysecond from './views/goods/categorysecond.vue'
import goods from './views/goods/goods.vue'
import orders from './views/orders/orders.vue'
import echarts from './views/charts/echarts.vue'
import ordersearch from './views/charts/ordersearch.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '用户信息管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
           { path: '/main', component: Main, name: '主页', hidden: true },
           { path: '/users', component: users, name: '用户信息列表' }
           
           
        ]
    },
    {
        path: '/',
        component: Home,
        name: '商品信息管理',
        iconCls: 'fa fa-id-card-o',
        children: [
           { path: '/categoryfirst', component: categoryfirst, name: '商品大分类' },
           { path: '/categorysecond', component: categorysecond, name: '商品详细分类' },
           { path: '/goods', component: goods, name: '在售商品列表' }


        ]
    },
    {
        path: '/',
        component: Home,
        name: '成交订单管理',
        iconCls: 'fa fa-address-card',
        //leaf: true,//只有一个节点
        children: [
          
           { path: '/orders', component: orders, name: '成交商品订单' }
  
          
        ]
    },
    {
        path: '/',
        component: Home,
        name: '销售业绩管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            //{ path: '/echarts', component: echarts, name: '销售分析图表' },
            { path: '/ordersearch', component: ordersearch, name: '卖家销售业绩查询' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;