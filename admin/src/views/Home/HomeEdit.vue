<template>
  <div>
      <el-form @submit.native.prevent="save">
      <div class="top">{{ this.id? '编 辑' : '添 加' }} 首 页 内 容</div>
      <div class="center">
          <div class="right">
            <div class="box">
              <div style="line-height:50px;color:black;font-weight:bold;">QQ：</div>
              <el-input placeholder="请输入QQ账号" class="inputt" v-model="data.qq"></el-input>
          </div>
          <div class="box">
              <div style="line-height:50px;color:black;font-weight:bold;">VX：</div>
              <el-input placeholder="请输入微信账号" class="inputt" v-model="data.vx"></el-input>
          </div>
          <div class="box">
              <div style="line-height:50px;color:black;font-weight:bold;">Git：</div>
              <el-input placeholder="请输入github账号" class="inputt" v-model="data.github"></el-input>
          </div>
          <div class="box">
              <div style="line-height:50px;color:black;font-weight:bold;">空间：</div>
              <el-input placeholder="请输入空间地址" class="inputt" v-model="data.qqkj"></el-input>
          </div>
          <div class="box">
              <div style="line-height:50px;color:black;font-weight:bold;">微博：</div>
              <el-input placeholder="请输入微博账号" class="inputt" v-model="data.bilibili"></el-input>
          </div>
            </div>
            <div class="right">
                <div class="upload">
                    <div class="text">
                        上 传 头 像:
                    </div>
                    <div class="suc">
                        <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>this.$set(this.data , 'head' , res.url)"
                        >
                        <img v-if="data.head" :src="data.head" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </div>
                </div>
                 <div class="upload">
                    <div class="text">
                        上 传 背 景 图:
                    </div>
                    <div class="suc">
                        <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>this.$set(this.data , 'cover' , res.url)"
                        >
                        <img v-if="data.cover" :src="data.cover" class="avatar" style="width:400px;height:250px;">
                        <i v-else class="el-icon-plus avatar-uploader-icon" style="width:400px;height:250px;line-height:250px;"></i>
                        </el-upload>
                    </div>
                </div>
            </div>
      </div>
    <el-button type="primary" style="margin-left:50%;width:5%;margin-top:20px;" native-type="submit">确认</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue,Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HomeEdit extends Vue{
    [x: string]: any
    
   @Prop(String) id:string
    data={
        
    }

    async fetch(){
        const res = await this.$http.get(`home/${this.id}`)
        this.data = res.data
    }

    async save(){
        if(this.id){
            await this.$http.put(`home/${this.id}` , this.data)
        }
        else{
             await this.$http.post('home' ,  this.data)
        }
       
        this.$router.push('/')
        this.$message({
            type:'success',
            message:'保存成功'
        })
    }   
    created(){
        this.id && this.fetch()
    }
}
</script>

<style scope>
    .top{
        color:white;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
    }
    .center{
        display:flex;
        width:80%;
        height:800px;
        background-color: white;
        opacity: 0.6;
        margin: 0 auto;
        margin-top:50px;
        flex-direction: row;
    }
    .upload{
        height:40%;
        width:70%;
      
        margin-left:150px;
        margin-top:50px;
    }
    .text{
        height:50px;
        line-height: 50px;
        font-weight: bold;
        color:black;
        font-size: 20px;
        width:150px;
        text-align: center;
    }
    .suc{
        height:80%;
        width:60%;
       margin-top:-40px;
        margin-left:25%;
    }
   
    .box{
        display: flex;
        width:60%;
        margin-top:70px;
        border-radius: 10px;
        height:50px;
        margin-left:250px;
    }
    .inputt{
        width:80%;
        line-height:50px;
        border:1px solid black;
        border-radius: 10px;
        
    }
    .right{
        
        height:90%;
        width:50%;
    }
    /* 上传框css */
    .avatar-uploader .el-upload {
    border: 2px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: black;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>