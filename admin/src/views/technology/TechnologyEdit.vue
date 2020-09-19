<template>
   <div>
        <el-button class="botton" @click="$router.push('/technology/edit')" style="margin-bottom:20px;">+ 添 加</el-button>
        <el-table style="opacity:0.6;" :data="data.data" border stripe>
           <el-table-column v-for="(item,name) in field" :key="name" :prop="name" :label="item.label"></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="$router.push(`/technology/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
                </template>
             </el-table-column>
       </el-table>
   </div>
</template>

<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'

@Component({})
export default class TechnologyList extends Vue{
    [x: string]: any
    data={}
    field={
        _id:{ label:"ID" },
        cover:{ label:'背景图' },
        title:{ label:'标题' },
        category:{ label:'分类' },
        watch:{ label:'观看量' },
        text:{ label:'富文本' },
        love:{ label:'小心心' },
        comment:{ label:'评论' },
        head:{ label:'头像' },
        name:{ label:'作者' }
    }
    async fetch(){
        const res = await this.$http.get('technology')
        this.data = res
    }
    async remove(row){
        await this.$confirm('是否确认删除？')
        await this.$http.delete(`technology/${row}`)
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