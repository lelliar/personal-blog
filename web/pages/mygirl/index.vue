<template>
  <div>
    <div class="bodyimg" v-for="(item, i) in res" :key="i">
      <img :src="item.cover" alt="" class="bodyimg" style="height:120vh;">
    </div>
    
    <div class="GirlBottom">
      <ProgressBar
        :Cardwidth="90"
        :Cardheight="30"
        :width="progre"
        :title="title"
        :rightSize="rightSize"
        :ColorIndex="2"
        class="Girljdt"
      >
      </ProgressBar>
      <div class="MyGirlLovePointAll">
          <div class="MyGirlpoint"></div>
          <div class="MyGirlPointText">
              一定要记得
          </div>
      </div>
      <div class="MyGirlLove">
          
        <div class="MyGrilLoveicon">
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark> mdi-heart </v-icon>
          </v-btn>
        </div>
        <div class="MyGrilLovetext">
          <div class="MyGrilLovetextIcon" v-for="(item, i) in resL" :key="i">
            {{ item.love }}
          </div>
        </div>
      </div>
        <div class="MyGirlLove" style="margin-top:20px;">
        <div class="MyGrilLoveicon">
          <v-btn class="mx-2" fab dark small color="pink">
            <v-icon dark> mdi-minus </v-icon>
          </v-btn>
        </div>
        <div class="MyGrilLovetext">
          <div class="MyGrilLovetextIcon" v-for="(itemN, i) in resN.data" :key="i">
            {{ itemN.nolove }}
          </div>
        </div>
      </div>
       <div class="MyGirlLovePointAll" style="margin-top:20px;">
          <div class="MyGirlpoint"></div>
          <div class="MyGirlPointText">
              紧急情况措施
          </div>
      </div>
      <div>
        
        <v-expansion-panels  style="margin-top: 30px">
          <v-expansion-panel>
            <v-expansion-panel-header>肚子疼</v-expansion-panel-header>
            <v-expansion-panel-content>
              记得多穿衣服，然后可躺在床上用暖宝宝或者是热水袋敷小腹，就是先把双手搓热，然后掌心对着小腹的中间压紧，再按按顺时针慢慢按摩，直到小腹开始发热，冲上一杯暖暖的红糖水，最好可以加入适量姜片，效果更好，除红糖姜水以外，也可喝益母草煮鸡蛋汤，萝卜陈皮粥，不要吃寒性食物，吃新鲜蔬果，多摄取高蛋白物质食物，可吃些巧克力或者红糖水调节心情，避免过酸过辣食物，保证充足睡眠，不要熬夜
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>各项指标</v-expansion-panel-header>
            <v-expansion-panel-content>
              鞋子37码，衣服M号
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>感冒</v-expansion-panel-header>
            <v-expansion-panel-content>
              多吃新鲜的蔬菜和水果，补充维生素和矿物质，尤其是维生素C、维生素B族，多用热水泡泡脚，上火而感冒的就去喝凉茶。伤寒感冒就喝姜煮瘦肉粥出身汗，一勺蜂蜜+一捏盐+几滴柠檬汁会很好的帮助你解决咽喉疼痛
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>崴脚</v-expansion-panel-header>
            <v-expansion-panel-content>
              冷敷，敷在脚踝处，隔2、3分钟更换一次，持续15至20分钟，局部按摩，崴脚后2到3天，就可采用热敷的方法来治疗了，3到5分钟更换一次毛巾，敷20分钟左右就好了，崴了脚后尽量不要过多活动，避免用受伤的脚走路。云南白药、万花油
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "../../components/progress-bar";

export default {
  data() {
    return {
      title: "完成进度",
      rightSize: "",
      progre: 0,
    };
  },
  components: {
    ProgressBar,
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("mygirl");
    const resL = await $axios.$get("love");
    const resN = await $axios.$get("nolove");
    return {
      res,
      resL,
      resN,
    };
  },
  methods: {
    async FetchPro() {
      const res = await this.$axios.$get("mygirl");
      this.progre = res[0].percentage;
      this.rightSize = res[0].percentage + "%";
    },
  },
  created() {
    this.FetchPro();
  },
};
</script>

<style>
</style>