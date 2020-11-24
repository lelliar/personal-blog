<template>
  <div>
       <div class="logtext" style="">
              日 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 志
              
        </div>
        <div class="logimg">
             <img src="../../assets/bgc.jpg" alt="" class="logimg2">
         </div>
         <v-responsive class="text" v-for="(item,i) in res" :key="i">
               <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        
        transition="fade-transition"
      >
       <v-card
          style="background-color:rgb(34, 34, 34);"
        >
             <router-link :to="`/log/${item._id}`" style="color:white; text-decoration: none;">
             <div class="textbox" >
                 <div class="textimg">
                     <img :src="item.cover" alt="" class="textimg2">
                 </div>
                <div class="titdes">
                    <div class="texttitle">
                     {{ item.title }}
                    </div>
                    <div class="textdescription" v-html="item.text">
                    </div>
                </div>
                <div class="texttime">
                    {{ item.updatedAt | getTimeFormat}}
                </div>
             </div>
             </router-link>
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
        const res = await $axios.$get('log')//地图
        return {
            res,
        }
    },
    methods:{

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
        
        let minute = date.getMinutes()
        let second = date.getSeconds()
        console.log(second)
        minute = minute < 10 ? ('1' + minute) : minute
        second = second < 10 ? ('0' + second) : second
        return m + '-' + d + ' '
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