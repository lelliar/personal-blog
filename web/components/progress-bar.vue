<template>
  <div class="template-view">
      <div class="progressbar-card">
      <div class="progressbar" :style="{'width':Cardwidth+'%','height':Cardheight+'px'}">
        <div class="before"></div>
        <div :class="bartusecolor[ColorIndex]" :style="{'width':width+'%','transition':'width'+' '+time+'s'}">
          <span></span>
        </div>
        <div class="label-flex">
          <div class="label la-top">
            <div :class="barardcolor[ColorIndex]">
              <span></span>
            </div>
            <span class="traffic-info">{{title}}</span>
            <code class="card-tag tag-red">{{rightSize}}</code>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bartusecolor:['bar tuse color','bar tuse color2','bar tuse color3','bar tuse color4'],
            barardcolor:['bar ard color','bar ard color2','bar ard color3','bar ard color4'],
        }
    },
    props:{
      width:{
        type: null,
        default: ""
      },
      Cardheight:{
        type: Number,
        default: 400
      },
      Cardwidth:{
        type: Number,
        default: 20
      },
      title:{
        type: String,
        default: ""
      },
      rightSize:{
        type: null,
        default: ""
      },
      ColorIndex:{
        type: Number,
        default: 0
      },
      time:{
        type: Number,
        default: 5
      }
    }
};
</script>

<style scoped>
@keyframes sparkle {
  0%{
            transform: translateY(5px);
      opacity: .5;
  }
  10%{
            transform: translateY(-10px);
      opacity: 1;
  }
  20%{
            transform: translateY(-20px);
      opacity: .5;
  }
  30%{
            transform: translateY(-30px);
      opacity: 1;
  }
  40%{
            transform: translateY(-40px);
      opacity: .5;
  }
  50%{
            transform: translateY(-50px);
      opacity: 1;
  }
  60%{
      transform: translateY(-60px);
      opacity: .6;
  }
  70%{
            transform: translateY(-70px);
      opacity: 1;
  }
  80%{
            transform: translateY(-80px);
      opacity: .4;
  }
  90%{
            transform: translateY(-90px);
      opacity: 1;
  }
  100%{
            transform: translateY(-100px);
      opacity: .52;
  }
}
.progressbar .bar span {
  position: absolute;
  display: block;
  width: 100%;
  height: 108px;
  -webkit-border-radius: 16px;
  border-radius: 16px;
  top: 0px;
  left: 0;
  background: url(../assets/trafficbar.png) 0 0;
  /* -webkit-animation: sparkle 1500ms linear infinite;
  -moz-animation: sparkle 1500ms linear infinite;
  -o-animation: sparkle 1500ms linear infinite; */
  animation: sparkle 1500ms linear infinite;
  opacity: 0.4;
}
.progressbar {
  position: relative;
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 0px auto;
}
.progressbar:first-of-type {
  margin-top: 40px;
}
.progressbar .before {
  position: absolute;
  display: block;
  content: "";
  width: calc(100% + 4px);
  height: 20px;
  left: -2px;
  right: 1px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(180, 180, 180, 0.85);
  border: 1px solid rgba(222, 222, 222, 0.8);
}
.progressbar .bar {
  position: absolute;
  display: block;
  width: 0;
  height: 16px;
  top: 2px;
  left: 0;
  background: #7eea19;
  border-radius: 16px;
  box-shadow: 0 0 12px 0 #7eea19, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
  overflow: hidden;
}
.progressbar .label .bar {
  position: relative;
  display: inline-block;
  top: 12%;
  left: 0;
  margin-right: 5px;
  width: 16px;
}
.progressbar .label .bar.color {
  box-shadow: 0 0 5px 0 #7eea19, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .label .bar.color2 {
  box-shadow: 0 0 5px 0 #e5c319, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .label .bar.color3 {
  box-shadow: 0 0 5px 0 #e81957, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .label .bar.color4 {
  box-shadow: 0 0 5px 0 #186de2, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .bar.color2 {
  background: #e5c319;
  box-shadow: 0 0 12px 0 #e5c319, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .bar.color3 {
  background: #ff6895;
  box-shadow: 0 0 7px 0 #e81957, 0 1px 0 0 rgba(255, 255, 255, 0.45),
    1px 0 0 0 rgba(255, 255, 255, 0.25), -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .bar.color4 {
  background: #186de2;
  box-shadow: 0 0 12px 0 #186de2, inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
    inset 1px 0 0 0 rgba(255, 255, 255, 0.25),
    inset -1px 0 0 0 rgba(255, 255, 255, 0.25);
}
.progressbar .bar:before {
  position: absolute;
  display: block;
  content: "";
  width: 606px;
  height: 150%;
  top: -25%;
  left: -25px;
}
.progressbar .bar:after {
  position: absolute;
  display: block;
  content: "";
  width: 64px;
  height: 16px;
  right: 0;
  top: 0;
  border-radius: 0 16px 16px 0;
}

.label.la-top code,
.progressbar .label {
  display: flex;
  align-items: center;
}
.progressbar .label {
  font-family: aldrich, sans-serif;
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  bottom: 40px;
  left: 0;
  background: #fff;
  font-weight: 700;
  font-size: 12px;
  color: #515a6e;
}
.label.la-top code {
  position: absolute;
  right: 0;
  top: 6px;
}
.traffic-info {
  margin-top: 6px;
}

.progressbar-card {
  background: #fff;
  display: flex;
  align-items: center;
}

</style>