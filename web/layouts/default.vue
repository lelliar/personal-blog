<template>
  <div >
    
    <!-- 抽屉 -->
   

    <v-app-bar
      color="deep-purple accent-4"
      dark
      class="chouti"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="background-color:#272727"
    >
      <v-list-item >
        <v-list-item-avatar>
          <img src="../assets/pdx.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="margin-left:5px;color:white;">万希客栈</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          style="margin-top:10px;"
        >
          <v-list-item-icon >
            <v-icon style="color:white;">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.to" style="margin-left:5px;"><v-list-item-title>{{ item.title }}</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div class="head" >
      <div class="name">
        万 希 客 栈
      </div>
        
      <div class="left">
        <div class="box">
          <router-link class="link" to="/">
          <i class="iconfont icon-shouye" style="margin-right:5px;"></i>
          首页
          </router-link>
        </div>
        <div class="box">
          <router-link class="link" to="/mygirl">
           <i class="iconfont icon-079aiqing" style="margin-right:5px;"></i>
           关于她
          </router-link>
        </div>
        <div class="box">
          <router-link class="link" to="/log">
        <i class="iconfont icon-xinicon_huabanfuben" style="margin-right:5px;"></i>
           日志
          </router-link>
        </div>
        <div class="box">
           <router-link class="link" to="/technology">
          <i class="iconfont icon-jishutong" style="margin-right:5px;"></i>
          技术
           </router-link>
        </div>
        <div class="box">
          <router-link to="/item" class="link">
          <i class="iconfont icon-xing" style="margin-right:5px;"></i>
           开源项目
          </router-link>
        </div>
        <div class="box">
          <router-link to="/login" class="link" style="margin:0 auto;">
          <i class="iconfont icon-yonghu" style="margin-right:5px;"></i>
          登录
          </router-link>
        </div>
      </div>
    </div>


    <nuxt-child />


  </div>
</template>

<script>
export default {
    data () {
      return {
         drawer: false,
      group: null,
        items: [
          { title: '首页', icon: 'mdi-view-dashboard' , to:'/' },
          { title: '关于她', icon: 'mdi-arrow-up-bold-box-outline' , to:'/mygirl'},
          { title: '日志', icon: 'mdi-email'  , to:'/log'},
          { title: '技术', icon: 'mdi-call-split' , to:'/technology'},
          { title: '开源项目', icon: 'mdi-dialpad' , to:'/item'},

        ],
         drawer: null,
        right: null,
      }
    },
      head(){
            return {
                title:'关于'
            }
        },
     async asyncData({ $axios }) {
    const home = await $axios.$get("home");//首页
    return {
      home,
    };
  },
    methods: {
      
    },
     watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style>

</style>