<template>
  <div>
       <el-form class="center" style="opacity:0.8" @submit.native.prevent="save">
           
           <el-form-item label="背景图：" class="percent">
               <el-upload
                    style="margin-left:100px;margin-top:30px;"
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL+'/upload'"
                    :show-file-list="false"
                    :on-success="res => this.$set(this.data , 'cover' , res.url)"
                    >
                    <img v-if="data.cover" :src="data.cover" class="avatar" style="width:400px;height:250px;">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="width:400px;height:250px;line-height:250px;"></i>
                </el-upload>
           </el-form-item>
           <el-form-item label="文章：" style="margin-left:220px;margin-top:50px;">
               <vue-editor v-model="data.text" style="margin-left:70px;margin-top:30px;height:500px;color:black;"></vue-editor>
           </el-form-item>
          <el-form-item>
               <el-button style="width:100px;margin-left:-900%;margin-top:830%; " type="primary" native-type="submit">确认</el-button>
          </el-form-item>
       </el-form>
  </div>
</template>

<script>
import { Vue,Component, Prop } from 'vue-property-decorator'
import { VueEditor } from "vue2-editor";

export default{
   props:{
      id:String
    },
    components:{
        VueEditor
    },
    data(){
        return {
            data:{
                text:''
            }
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`log/${this.id}`)
            this.data = res.data
        },
        async save(){
            if(this.id){
                const res = await this.$http.put(`log/${this.id}` , this.data)
            }
            else{
                const res = await this.$http.post('log' , this.data)
            }
            this.$router.push('/log/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>

</style>