import { Main } from 'element-ui'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import  HomeList  from '../views/Home/HomeList.vue'
import Home from '../views/Home.vue'
import HomeEdit from '../views/Home/HomeEdit.vue'
import LoveList from '../views/Love/LoveList.vue'
import LoveEdit from '../views/Love/LoveEdit.vue'

import LogList from '../views/log/LogList.vue'
import LogEdit from '../views/log/LogEdit.vue'

import TechnologyList from '../views/technology/TechnologyList.vue'
import TechnologyEdit from '../views/technology/TechnologyEdit.vue'

import ItemList from '../views/item/ItemList.vue'
import ItemEdit from '../views/item/ItemEdit.vue'

import UserList from '../views/user/UserList.vue'
import UserEdit from '../views/user/UserEdit.vue'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    component: Home,
    children:[
      { path:'/', name:'main',component:HomeList },
      { path:'/home/edit' , name:'edit' , component:HomeEdit},
      { path:'/home/edit/:id' , name:'edit' , component:HomeEdit ,props:true},

      { path:'/love/edit' , name:'lovecreate' , component:LoveEdit},
      { path:'/love/list' , name:'lovelist' , component:LoveList},
      { path:'/love/edit/:id' , name:'loveedit' , component:LoveEdit ,props:true},

      { path:'/log/edit' , name:'logcreate' , component:LogEdit },
      { path:'/log/list' , name:'loglist' , component:LogList },
      { path:'/log/edit/:id' , name:'logedit' , component:LogEdit ,props:true },

      { path:'/technology/edit' , name:'technologyedit' , component:TechnologyList },
      { path:'/technology/list' , name:'technologylist' , component:TechnologyEdit },
      { path:'/technology/edit/:id' , name:'technologyedit' , component:TechnologyList ,props:true },

      { path:'/item/edit' , name:'itemedit' , component:ItemEdit },
      { path:'/item/list' , name:'itemlist' , component:ItemList },
      { path:'/item/edit/:id' , name:'itemedit' , component:ItemEdit ,props:true },

      { path:'/user/edit' , name:'usercreate' , component:UserEdit},
      { path:'/user/list' , name:'userlist' , component:UserList},
      { path:'/user/edit/:id' , name:'useredit' , component:UserEdit ,props:true},
    ]
  },  
]

const router = new VueRouter({
  routes
})

export default router
