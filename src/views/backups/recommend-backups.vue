<template>
    <div  @scroll="loadNextTest">
        <div class="main-left"  v-loading="imgLoading"
             v-infinite-scroll="loadNextPaging"
             :infinite-scroll-distance="500" :infinite-scroll-immediate="false"	>
            <el-row :gutter="10" style="margin: 10px 0px">
                <el-col :span="12">

                    <water-fall-all-imgs
                            v-for="(item,index) in allWaterFallImgs"
                            :water-imgs="item">
                    </water-fall-all-imgs>

                </el-col>
                <el-col :span="12">
                    <!--单图片显示瀑布流-->
                    <!--                    <water-fall-all-img :img-cute="imgCute02"></water-fall-all-img>-->
                    <!-- 文字显示瀑布流-->
                    <!--                    <water-fall-all-text :test-cute01="textCute"></water-fall-all-text>-->
                    <water-fall-all-text
                            v-for="(item,index) in allWaterFallText"
                            :test-cute01="item">

                    </water-fall-all-text>


                </el-col>
            </el-row>

        </div>

        <!--     右侧关注的用户和圈子-->
        <right-ranking-tags :rank-tags="rankTags01"
                            :rank-name="rankName"
                            :active-rank="activeRank"
                            :rank-tags01="rankTags02">

        </right-ranking-tags>

    </div>
</template>

<script>
  import WaterFallCute from '../components/WaterFall-cute-img'
  import WaterFallTextCute from '../components/WaterFall-cute-text'
  import WaterFallImgs from '../components/WaterFall-cute-imgs'
  import RightRankingTags from '../components/public-page/Right-Ranking-Tags'
  import WaterFallAllImg from '../components/waterFall-component/WaterFall-All-Img'
  import WaterFallAllText from '../components/waterFall-component/WaterFall-All-Text'
  import WaterFallAllImgs from '../components/waterFall-component/WaterFall-All-Imgs'
  // import Vue from 'vue'

  export default {
    name: "RecommendPage",
    //注册组件
    components: {
      WaterFallCute,
      WaterFallTextCute,
      WaterFallImgs,
      RightRankingTags,
      WaterFallAllImg,
      WaterFallAllText,
      WaterFallAllImgs,


    },
    data() {
      return {
        rankName: '我关注的用户',
        rankTags01: [
          {rankImg: '3.jpg', rankName: '用户1', rankTime: '3分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
        ],
        rankTags02: [
          {rankImg: '3.jpg', rankName: '凹凸世界', rankTime: '3分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '游戏', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '绘画', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '壁纸', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '明日方舟', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
        ],
        activeRank: ["2020春日活动", "2020汉服同袍会", "春日脱团大作战", "男女装cos大作战"],
        imgsContent:[],
        imgsContent2:[],
        imgLoading:false, //加载事件，当图片还未上传到服务器上时，首页加载
        pageSize:10, //页面几页
        pageNumber:1, //当前页数,
        textCute:[], //文字内容
        allWaterFallImgs:[],
        allWaterFallData:[],
        allWaterFallText:[],
        isScrollDown:false,

      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 600) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }


        if(window.scrollY>4000){
        }
        if(this.isScrollDown){
          console.log("发送啊")
          this.pageNumber++;
          axios.get("http://localhost:8090/showIndex?pageSize="+this.pageSize+"&pageNumber="+this.pageNumber)
              .then(res => {
                console.log(res.data)

                this.allWaterFallImgs.push(res.data.list)


              })
        }



      },
      loadNextPaging(){


      },
      loadNextTest(){
        console.log("执行滚动")
      }
    },

    created() {



      axios.get("http://localhost:8090/showIndex")
          .then(res => {
            console.log(res.data)
            // this.imgCute02 = res.data.list;
            this.imgsContent = res.data.list;

            this.allWaterFallImgs.push(res.data.list)

          })


      axios.get("http://localhost:8090/showPcIndex")
          .then(res => {
            console.log(res.data)
            this.textCute = res.data.list;

            this.allWaterFallText.push(res.data.list)

          })

      var _this = this
      window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;

        if(scrollTop+windowHeight==scrollHeight){

          //发送翻页的axios的请求发送
          this.isScrollDown = true
          //写后台加载数据的函数
          console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
          console.log("发送啊")
          _this.pageNumber++;
          axios.get("http://localhost:8090/showIndex?pageSize=10&pageNumber="+_this.pageNumber)
              .then(res => {
                console.log(res.data)

                _this.allWaterFallImgs.push(res.data.list)


              })
          axios.get("http://localhost:8090/showPcIndex?pageSize=10&pageNumber="+_this.pageNumber)
              .then(res => {
                console.log(res.data)

                _this.allWaterFallText.push(res.data.list)

              })

        }
      }


    },
    updated() {

    },
    beforeMount() {

    }

  }
</script>
<!--<link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">-->
<style scoped>
    .time {
        font-size: 13px;
        color: #999;

    }

    .fixedlunbo {
        width: 22%;
        position: fixed;
        top: 20px;
    }

    .cute-img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }


    .lunbo-big {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .lunbo-small {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }

</style>