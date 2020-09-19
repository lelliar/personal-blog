<template>
   <div>
       <el-button class="botton" @click="$router.push('/user/edit')" style="margin-bottom:20px;">+ 添 加</el-button>
       <el-table style="opacity:0.6" :data="data.data" border stripe >
           <el-table-column v-for="(item,name) in field" :key="name" :prop="name" :label="item.label"></el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="$router.push(`/user/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
            </template>
    </el-table-column>
       </el-table>
   </div>
</template>

<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'

@Component({})
export default class UserList extends Vue{
    [x: string]: any
    data = {}
    field={
        _id:{ label:'ID' },
        username:{ label:'账号' }
    }
    
    async fetch(){ 
        const res = await this.$http.get('user')
        this.data = res
    }
    async remove(row){
        await this.$confirm('是否确认删除？')
        await this.$http.delete(`user/${row}`)
        this.$message.success('删除成功')
        this.fetch()
    }
    created(){
        this.fetch()
    }
}
</script>

<style>

</style>