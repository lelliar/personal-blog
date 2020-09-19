<template>
  <div>
       <el-form class="center" style="opacity:0.8" @submit.native.prevent="save">
           <el-form-item label="账号：" class="percent"  style="display:flex;">
               <el-input style="width:300px;" v-model="data.username"></el-input>
           </el-form-item>
           <el-form-item label="密码：" class="percent" style="display:flex;">
               <el-input style="width:300px;" v-model="data.password"></el-input>
           </el-form-item>
          <el-form-item>
               <el-button style="width:100px;margin:0 auto;margin-top:850px; " type="primary" native-type="submit">确认</el-button>
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
    data(){
        return {
            data:{
                
            }
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get(`user/${this.id}`)
            this.data = res.data
        },
        async save(){
            if(this.id){
                const res = await this.$http.put(`user/${this.id}` , this.data)
            }
            else{
                const res = await this.$http.post('user' , this.data)
            }
            this.$router.push('/user/list')
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