<template>
  <div>
    <el-header style="display:flex;flex-direction:row;">
      <div class="item">
        <router-link to="/" class="link">首页</router-link>
      </div>
      <div class="log">
        <router-link to="/love/list" class="link">love</router-link>
      </div>
      <div class="log">
        <router-link to="/log/list" class="link">日志</router-link>
      </div>
      <div class="log">
        <router-link to="/technology/list" class="link">技术</router-link>
      </div>
      <div class="log">
        <router-link to="/item/list" class="link">开源项目</router-link>
      </div>
      <div class="log">
        <router-link to="/user/list" class="link">用户</router-link>
      </div>
    </el-header>
    
    <el-main style="height:92vh;color:white">
      <router-view :key="$route.path"></router-view>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue{
    
}
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }
  body{
    background:url('../assets/timg.jpg') no-repeat;
    background-size:cover;
  }
  .item{
    margin-left:60%;
    width:5%;
    color:rgb(252, 86, 86);
    font-size:20px;
    
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    height:60px;
   
  }
  .log{
    margin-left:20px;
    width:5%;
    height:60px;
    color:rgb(252, 86, 86);
    font-size:20px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
  }
  .link{
    color:white;
    text-decoration: none;
  }
 
</style>