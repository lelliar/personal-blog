<template>
  <div>
      <el-form class="center" style="opacity:0.8" @submit.native.prevent="save">
          <el-form-item label="百分比:" class="percent">
            <el-progress type="dashboard" :percentage="percentage" style="margin-left:120px;"></el-progress>
<div>
  
  <el-button-group style="margin-left:130px;">
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>
          </el-form-item>
          
          <el-form-item label="文章" style="margin-top:20%;margin-left:-14%;">
            <Editor v-model="model.text"  style="width:800px;"></Editor>
          </el-form-item>
          <el-form-item label="上传背景图:" class="percent">
            <el-upload
              class="avatar-uploader"
              style="margin-left:150px;margin-top:30px;"
              :action="$http.defaults.baseURL+'/upload'"
              :show-file-list="false"
              :on-success="res => model.cover = res.url"
              >
              <img v-if="model.cover" :src="model.cover" class="avatar" style="width:400px;height:200px;line-height:200px;">
              <i v-else class="el-icon-plus avatar-uploader-icon" style="width:400px;height:200px;line-height:200px;"></i>
          </el-upload>
          </el-form-item>
          <el-form-item label="上传图片" style="margin-top:20%;margin-left:-30%;">
            <el-upload
                class="avatar-uploader"
                style="margin-left:150px;margin-top:30px;"
                :action="$http.defaults.baseURL+'/upload'"
                :show-file-list="false"
                :on-success="res => model.img = res.url"
                >
                <img v-if="model.img" :src="model.img" class="avatar" style="width:350px;height:200px;line-height:200px;">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="width:350px;height:200px;line-height:200px;"></i>
          </el-upload>
          </el-form-item>
          <el-form-item label="歌曲" style="margin-top:36%;margin-left:-300px;">
            <el-upload
            
              class="upload-demo"
              :action="$http.defaults.baseURL+'/upload'"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              multiple
              :on-success="res => model.song = res.url "
              :limit="1"
              :before-remove="beforeRemove"
              :on-exceed="handleExceed"
              >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item >
            <el-button style="width:100px;margin-left:-380%;margin-top:850%; "  type="primary" native-type="submit">确认</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import Editor from '../../components/editor/index.vue'

export default{
    props:{
      id:String
    },
    components:{ Editor },
     data(){
      return {
        percentage:0,
        model:{
          text:'',
        cover:'',
        song:'',
        img:'',
        percentage:0,
        }
      };
    },
    
    methods: {
      async fetch(){
        const res = await this.$http.get(`mygirl/${this.id}`)
        this.model = res.data
        this.percentage = this.model.percentage
      },
     
      async save(){
        if(this.id){
          const res = await this.$http.put(`mygirl/${this.id}` , this.model)
        }
        else{
          const res = await this.$http.post('mygirl' , this.model)
        }
        this.$router.push('/love/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      increase(){
        this.percentage += 2;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
         this.assignment()
      },

      decrease(){
        this.percentage -= 2;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
        this.assignment()
      },
      assignment(){
          this.model.percentage = this.percentage
      },
     
    },
     created(){
        this.id && this.fetch()
      }
}

</script>

<style>
.el-form-item__label{
    font-size: 20px;
    font-weight:bold;
}
.percent{
    margin-left:100px;
    margin-top:50px;
}
</style>