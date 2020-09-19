<template>
    <div>
      <el-button class="botton" @click="$router.push('home/edit')" style="margin-bottom:20px;">+ 添 加</el-button>
       <el-table style="opacity:0.6;" :data="data.data" border stripe>
        <el-table-column v-for="(field,name) in fields" :prop="name" :key="name" :label="field.label"></el-table-column>
           <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
          
        <el-button @click="$router.push(`home/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    </div>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'

@Component({})
export default class Main extends Vue {
    [x: string]: any
    data={}
    fields={
        _id:{label:'ID'},
        cover:{label:'背景图'},
        github:{label:'github地址'},
        qq:{ label:'qq' },
        vx:{  label:'微信' },
        qqkj:{ label:'空间' },
        bilibili:{ label:'微博' }
    }

    async fetch(){
        const res = await this.$http.get('home')
        this.data = res
    }

    async remove(row){
      await this.$confirm('是否确认删除？')
      await this.$http.delete(`home/${row}`)
      this.$message.success('删除成功')
      this.fetch()
    }

    created(){
        this.fetch()
    }
}
</script>

<style scope>
   .botton{
    margin-left:30px;
    border:none;
    width:150px;
    font-size: 20px;
    font-weight: bold;
    height:50px;
    background-color:rgb(68, 68, 177);
    color:white;
  }
</style>