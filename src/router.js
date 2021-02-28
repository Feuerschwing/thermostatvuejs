import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Prog from './components/Prog.vue';
import Graph from './components/Graph.vue';


Vue.use(VueRouter)


export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'',
            redirect: '/Home', // default child path
        },
        {
            path:"/Home",
            name:"home",
            component:Home,
        },
        {
            path:"/Prog",
            name:"prog",
            component:Prog
        },
        {
            path:"/Graph",
            name:"graph",
            component:Graph
        },

    ]
})