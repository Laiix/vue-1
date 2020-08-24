import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBus from './vue-bus';
import App from './app.vue';


Vue.use(VueRouter);
Vue.use(VueBus);

// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '*',  //当访问的路径不存在时，重定向到首页
        redirect: '/index'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);


new Vue({
    el: '#app',
    router: router,
    render: h => {
        return h(App)
    }
});