import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

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
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta: {
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
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

const store = new Vuex.Store({
    state: {
        count: 0,
        list: [1, 5, 8, 10, 30, 50]
    },
    mutations: {
        //increment(state, n=2) {
        //    state.count += n;
        //},
        increment(state, params) {
            state.count += params.count;
        },
        decrement(state) {
            state.count --;
        }
    },
    actions: {
        actionsIncrement(context) {
            context.commit('increment',{
                count: 1
            });
        },
        asyncIncrement (context) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('increment',{
                        count: 9
                    });
                    resolve();
                }, 1000)
            });
        }
    },
    getters: {
        filteredList: state => {
            return state.list.filter(item => item<10);
        },
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }
    }

})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    //使用vuex
    store: store,
    render: h => {
        return h(App)
    }
});