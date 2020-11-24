<template>
<div>
  <div class="index">
    <div id="stars">
        <div class="star" style="top: 0px;left: 500px;"></div>
    </div>
  </div>
 
  <div v-for="item in home" :key="item._id" class="all">
     <audio :src="item.song" autoplay id="myaudio"></audio>
      <img :src="item.cover" alt="" class="bodyimg">
    <div class="hp" @mouseover="imgopen" @mouseout="imgnclose">
      <div class="hpimg" id="hpimg" @click="music">
        <i class="iconfont icon-zanting" id="zanting" style="display:inline-block;margin-top:40px;"></i>
        <i class="iconfont icon-bofang" id="bofang" style="display:none;margin-top:40px;"></i>
      </div>
      <img :src="item.head" alt="" class="imghead">
    </div>
    <div class="guodu">

    </div>
    <div class="nav">
      <div class="navbox">
        <a class="ai" href="tencent://message/?uin=1027077368&Site=admin5.com&Menu=yes">
          <i class="iconfont icon-QQ" style="font-size:20px;"></i>
        </a>
      </div>
      <div class="navbox"
      >
        <i
          class="iconfont icon-weixin"
          style=" font-size:25px;"
          @mouseover="openvx"
          @mouseout="closevx"
        ></i>
      </div>
      <div class="navbox">
        <a :href="item.github" class="ai">
          <i class="iconfont icon-github" style=" font-size:23px;"></i>
        </a>
      </div>
      <div class="navbox">
        <a :href="item.qqkj" class="ai">
          <i class="iconfont icon-qqkongjian" style=" font-size:23px;"></i>
        </a>
      </div>
      <div class="navbox">
        <a :href="item.bilibili" class="ai">
          <i class="iconfont icon-weibo" style=" font-size:25px;"></i>
        </a>
      </div>
    </div>
    <div class="longen">
      <img src="../assets/weixin.png" alt style="width: 100%;height:100%;" />
    </div>
  </div>
  <div class="tip">
    <i class="iconfont icon-gonggao"></i>
    <p style="margin-left:7px;font-family:宋体;">说 唱 会 每 周 更 新 嗷！</p>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      count:0
    }
  },
  async asyncData({ $axios }) {
    const home = await $axios.$get("home");//首页
    return {
      home,
    };
  },
  methods: {
    imgopen(){
      document.getElementById('hpimg').style.display="block"
    },
    imgnclose(){
      document.getElementById('hpimg').style.display="none"
    },
    openvx() {
      document.getElementsByClassName("longen")[0].style.opacity = 1;
    },
    closevx() {
      document.getElementsByClassName("longen")[0].style.opacity = 0;
    },
    music(){
        this.count++
        console.log(this.count)
        if(this.count%2 == 0){
          document.getElementById('zanting').style.display="block"
          document.getElementById('bofang').style.display="none"
          var myAuto = document.getElementById('myaudio');
          myAuto.play();
        }else{
          document.getElementById('zanting').style.display="none"
          document.getElementById('bofang').style.display="block"
          var myAuto = document.getElementById('myaudio');
          myAuto.pause();
        }
      },
    lxy() {
      if (typeof window !== "undefined") {
        var stars = document.getElementById("stars");

     
        for (var j = 0; j < 5; j++) {
          var newStar = document.createElement("div");
          newStar.className = "star";
          newStar.style.top = randomDistance(600, -100) + "px";
          newStar.style.left = randomDistance(1480, 600) + "px";
          stars.appendChild(newStar);
        }

     
        function randomDistance(max, min) {
          var distance = Math.floor(Math.random() * (max - min + 1) + min);
          return distance;
        }

        var star = document.getElementsByClassName("star");

      
        for (var i = 0, len = star.length; i < len; i++) {
          star[i].style.animationDelay = i % 6 == 0 ? "0s" : i * 0.8 + "s";
        }
      }
    },
    
  },
  mounted() {
       this.lxy();  
  },
};
</script>