import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from './../components/home/home.vue'
import Record from './../components/record/record.vue'
import Friend from './../components/friend/friend.vue'

import Login from './../components/containers/login.vue'
import Reg from './../components/containers/reg.vue'
import Search from './../components/containers/search.vue'
import Page from './../components/containers/page.vue'

const router = new VueRouter({
    routes : [{
        path:'/home',
        name:'home',
        component:Home,
        
    },{ 
        path:'/friend',
        name:'friend',
        component:Friend
    },{ 
        path:'/record',
        name:'record',
        component:Record
    },{ 
        path:'/login',
        name:'login',
        component:Login
    },{ 
        path:'/reg',
        name:'reg',
        component:Reg
    },{ 
        path:'/search',
        name:'search',
        component:Search
    },{ 
        path:'/page',
        name:'page',
        component:Page
    }]
})

export default router;