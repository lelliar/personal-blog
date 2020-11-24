<template>
  <div>
    <div class="logidtext">
        <img :src="log.cover" alt="" class="logidtext2">
    </div>
    <div class="loghead">
        
    </div>
    <div class="logidtitle">
            {{ log.title }}
        </div>
    <div class="logidcenter" v-html="log.text">
        
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({params , $axios}) {
        const { id } = params
        const log = await $axios.$get(`log/${id}`)//根据id查询判断对应地点
        return {
            id,
            log
        }
    },
}
</script>

<style>

</style>