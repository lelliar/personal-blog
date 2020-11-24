<template>
  <div>
    <div class="logidtext">
        <img :src="technology.cover" alt="" class="logidtext2">
        
    </div>
        <div class="logidtitle">
            {{ technology.title }}
        </div>
            
        <div class="logidcenter" v-html="technology.text">
            
        </div>
  </div>
</template>

<script>
export default {
    async asyncData({params , $axios}) {
        const { id } = params
        const technology = await $axios.$get(`technology/${id}`)//根据id查询对应点击页面
        return {
            id,
            technology
        }
    },
}
</script>

<style>

</style>