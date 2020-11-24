<template>
  <div>
       <div class="logtext">
              技 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 术
              
        </div>
        <div class="logimg">
             <img src="../../assets/bgc.jpg" alt="" class="logimg2">
         </div>
         <v-responsive class="text" v-for="(item,i) in res" :key="i">
               <v-lazy
        v-model="isActive"
        :options="{
          threshold: .7
        }"
        min-height="20"
        transition="fade-transition"
      >
       <v-card style="background-color:rgb(34, 34, 34);">
             <div style="color:white; text-decoration: none;" dark @click="FetchWatch(item._id)">
             <div class="textbox">
                 <div class="textimg">
                     <img :src="item.cover" alt="" class="textimg2">
                 </div>
                <div class="titdes">
                    <div class="texttitle">
                     {{ item.title }}
                    </div>
                    <div class="textline">
                        <div class="textwatch" style="margin-left:0px;">
                            <i class="iconfont icon-xihuan technologyicon" ></i>
                            star
                        </div>
                        <div class="textwatch">
                            <i class="iconfont icon-fenlei technologyicon"></i>
                            {{ item.category }}
                        </div>
                        <div class="textwatch">
                            <i class="iconfont icon-Icon-guankanliang technologyicon" ></i>
                            {{ item.watch }}
                        </div>
                    </div>
                    <div class="texthead">
                        <div class="texthead2" >
                          <img :src="item.head" alt="" class="textheadimg">
                        </div>
                        <div class="textname" >
                          {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="texttime">
                    {{ item.updatedAt | getTimeFormat}}
                </div>
             </div>
             </div>
       </v-card>
               </v-lazy>
         </v-responsive>
      </div>
</template>

<script>
export default {
  data() {
    return {
      isActive:false,
      i:{
        watch:0
      }
    }
  },
    async asyncData({$axios}) {
        const res = await $axios.$get('technology')
        return {
            res,
        }
    },
    methods:{
      async FetchWatch(id){
        const res = await this.$axios.$get(`technology/${id}`)
        if(res.watch == null){
          res.watch = 1
        }else{
          res.watch++
        }
        await this.$axios.$put(`technology/${id}` , res)
        this.$router.push(`/technology/${id}`)
      }
    },
    
    filters: {
  //时间戳显示格式为几天前、几分钟前、几秒前
  getTimeFormat (valueTime) {
    if (valueTime) {
      // let newData = Date.parse(new Date() + '')
      // let diffTime = Math.abs(newData - valueTime)
      let diffTime = Math.abs(new Date().getTime() - new Date(valueTime).getTime())
      if (diffTime > 7 * 24 * 3600 * 1000) {
        let date = new Date(valueTime)
        // let y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? ('0' + m) : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        let h = date.getHours()
        h = h < 10 ? ('0' + h) : h
        let minute = date.getMinutes()
        let second = date.getSeconds()
        console.log(second)
        minute = minute < 10 ? ('1' + minute) : minute
        second = second < 10 ? ('0' + second) : second
        return m + '-' + d + ' ' + h + ':' + minute
      } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
        // //注释("一周之内");
        // var time = newData - diffTime;
        let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
        return dayNum + '天前'
      } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
        // //注释("一天之内");
        // var time = newData - diffTime;
        let dayNum = Math.floor(diffTime / (60 * 60 * 1000))
        return dayNum + '小时前'
      } else if (diffTime < 3600 * 1000 && diffTime > 0) {
        // //注释("一小时之内");
        // var time = newData - diffTime;
        let dayNum = Math.floor(diffTime / (60 * 1000))
        return dayNum + '分钟前'
      }
    }
  }
}
}
</script>

<style>

</style>