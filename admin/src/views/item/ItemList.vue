<template>
  <div>
    <el-button class="botton" @click="$router.push('/item/edit')" style="margin-bottom:20px;">+ 添 加</el-button>
    <el-table style="opacity:0.6;" border stripe :data="data.data">
        <el-table-column v-for="(item,name) in field" :key="name" :prop="name" :label="item.label"></el-table-column>
         <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="$router.push(`/item/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
            </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import {Vue , Component} from 'vue-property-decorator'

@Component({})
export default class ItemList extends Vue{
    [x: string]: any
    field={
        _id : { label:'ID' },
        head : {label:'标题'},
        text : { text:'富文本' },
        cover : { label:'背景图' }
    }
    data = {}
    async fetch(){
        const res = await this.$http.get('item')
        this.data = res
    }
    created(){
        this.fetch()
    }
    async remove(row){
        await this.$confirm('是否确认删除？')
        await this.$http.delete(`item/${row}`)
        this.$message.success('删除成功')
        this.fetch()
    }
}
</script>

<style>

</style>