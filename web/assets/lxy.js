
// 流星雨
// lxy() { 
//     var stars = document.getElementById("stars");

//    // js随机生成流星
//    for (var j = 0; j < 10; j++) {
//      var newStar = document.createElement("div");
//      newStar.className = "star";
//      newStar.style.top = randomDistance(-300, -500) + "px";
//      newStar.style.left = randomDistance(1980, 150) + "px";
//      stars.appendChild(newStar);
//    }

//    // 封装随机数方法
//    function randomDistance(max, min) {
//      var distance = Math.floor(Math.random() * (max - min + 1) + min);
//      return distance;
//    }

//    var star = document.getElementsByClassName("star");

//    // 给流星添加动画延时
//    for (var i = 0, len = star.length; i < len; i++) {
//      star[i].style.animationDelay = i % 6 == 0 ? "0s" : i * 0.8 + "s";
//    }
//  },


// .index {
//     position: fixed;
//     width: 100%;
//     margin-left:300px;
  
  
//     margin-top: -600px;
//   }
//   #stars {
//     width: 100%;
//   }
//   .star {
//     display: block;
//     width: 5px;
//     height: 5px;
//     border-radius: 50%;
//     background: #fff;
//     position: absolute;
//     transform-origin: 100% 0;
//     animation: star-ani 4s linear infinite;
//     -webkit-animation: star-ani 5s linear infinite;
//     box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.3);
//     opacity: 0;
//     z-index: 2;
//   }
//   .star:after {
//     content: "";
//     display: block;
//     top: 0px;
//     left: 4px;
//     border: 0px solid #fff;
//     border-width: 0px 90px 2px 90px;
//     border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
//     transform: rotate(-45deg) translate3d(1px, 3px, 0);
//     box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
//     transform-origin: 0% 100%;
//   }
//   @keyframes star-ani {
//     0% {
//       opacity: 0;
//       transform: scale(0) translate3d(0, 0, 0);
//     }
//     20% {
//       opacity: 0.8;
//       transform: scale(0.2) translate3d(-100px, 100px, 0);
//     }
//     40% {
//       opacity: 0.8;
//       transform: scale(0.4) translate3d(-200px, 200px, 0);
//     }
//     60% {
//       opacity: 0.8;
//       transform: scale(0.6) translate3d(-300px, 300px, 0);
//     }
//     80% {
//       opacity: 1;
//       transform: scale(1) translate3d(-350px, 350px, 0);
//     }
//     100% {
//       opacity: 1;
//       transform: scale(1.2) translate3d(-400px, 380px, 0);
//     }
//   }


/* <div class="index">
<div id="stars">
  <div class="star" style="top: 0px;left: 500px;"></div>
</div>
</div> */


//放歌

onMouseOver() {
    document.getElementById("img1").style.display = "block";
  },
  onMouseOut() {
    document.getElementById("img1").style.display = "none";
  },
 view(){
   if(this.count%2 == 0){
     document.getElementById('zanting').style.display="block"
   document.getElementById('bofang').style.display="none"
   var myAuto = document.getElementById('myaudio');
          myAuto.play();
   }
   else{
     document.getElementById('zanting').style.display="none"
   document.getElementById('bofang').style.display="block"
   var myAuto = document.getElementById('myaudio');
          myAuto.pause();
   }
 },
 viewnop(){
    document.getElementById('zanting').style.display="none"
   document.getElementById('bofang').style.display="none"
 },
 success(){
   this.count++
   console.log(this.count)
   
   if(this.count%2 == 0){
     document.getElementById('zanting').style.display="block"
   document.getElementById('bofang').style.display="none"
   }
   else{
     document.getElementById('zanting').style.display="none"
   document.getElementById('bofang').style.display="block"
   }
 }
