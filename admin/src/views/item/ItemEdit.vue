<template>
  <div>
       <el-form class="center" style="opacity:0.8;flex-direction:column;" @submit.native.prevent="save">
           <el-form-item label="标题:" class='sty' style="margin-top:60px;">
               <el-input style="width:300px;" v-model="data.title"></el-input>
           </el-form-item>
            
           <el-form-item label="内容:"  class='sty' style="margin-left:40px;height:500px;">
               <vue-editor style="color:black; height:400px;" v-model="data.text"></vue-editor>
           </el-form-item>
           <div style="margin-left:60%;margin-top:-43%">
                <el-form-item label="上传背景图:"  class='sty' style="margin-left:30px;height:400px;margin-top:180px;">
                    <el-upload
                    style="margin-left:20px;"
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="res => this.$set(this.data , 'cover' , res.url)"
                    >
                    <img v-if="data.cover" :src="data.cover" class="avatar" style="width:400px;height:250px;">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="width:400px;height:250px;line-height:250px;"></i>
                </el-upload>
                </el-form-item>
                <el-form-item label="上传头像：" class="sty" style="margin-left:40px;">
                    <el-upload
                    style="margin-left:20px;"
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="res => this.$set(this.data , 'head' , res.url)"
                    >
                    <img v-if="data.head" :src="data.head" class="avatar" style="width:280px;height:250px;border-radius:50%;">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="width:250px;height:250px;line-height:250px;border-radius:60%;"></i>
                </el-upload>
                </el-form-item>
            <el-form-item>
               <el-button style="width:100px;margin-left:-25%;margin-top:40%; " type="primary" native-type="submit">确认</el-button>
          </el-form-item>
           </div>
           
       </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
     props:{
      id:String
    },
    components:{
        VueEditor
    },
    data(){
        return {
            data:{

            }
        }
    },
    methods: {
       async fetch(){
        const res = await this.$http.get(`item/${this.id}`)
        this.data = res.data
      },
        async save(){
            if(this.id){
               await this.$http.put(`item/${this.id}` , this.data)
            }
            else{
                 await this.$http.post('item' , this.data)
            }
            this.$router.push('/item/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>
    .sty{
        display:flex;
        margin-top:10px;
        margin-left:260px;
        height:50px;
    }
</style>