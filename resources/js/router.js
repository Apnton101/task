import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/users', component: () => import('./components/User/Index'),
            name: 'user.index'
        },
        {
            path: '/user', component: () => import('./components/User/Store'),
            name: 'user.store'
        },
        {
            path: '/user/:id', component: () => import('./components/User/Show'),
            name: 'user.show'
        },
    ]
})
