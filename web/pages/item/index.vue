<template>
  <div>
      <img src="../../assets/bgc3.png" alt="" class="itemcover">
      <div class="itemcenter" >
        <div class="itembox" v-for="(item,i) in res" :key ="i" >
          <a :href="item.github">
          <div class="itemboxtop">
            <img :src="item.head" alt="" class="itemboximg">
          </div>
          <div class="itemboxbottom">
            {{ item.title }}
          </div>
        </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
   async asyncData({$axios}) {
    const res = await $axios.$get('item')
    return {
      res
    }
  },
  methods:{
   
  }
}
</script>

<style>

</style>