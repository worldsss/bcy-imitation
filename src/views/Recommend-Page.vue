<template>
    <div>
        <div class="main-left">
            <el-row :gutter="10" style="margin: 10px 0px">
                <el-col :span="12">
                    <!--单图片-->
                    <water-fall-all-img :img-cute="imgCute01"></water-fall-all-img>


                    <!--多图片-->
                    <water-fall-all-imgs :water-imgs="imgsContent">

                    </water-fall-all-imgs>

                </el-col>
                <el-col :span="12">
                    <!--单图片显示瀑布流-->
                    <water-fall-all-img :img-cute="imgCute02"></water-fall-all-img>
                    <!-- 文字显示瀑布流-->
                    <water-fall-all-text :test-cute01="textCute"></water-fall-all-text>


                </el-col>
            </el-row>

        </div>

        <!--     右侧关注的用户和圈子-->
        <right-ranking-tags :rank-tags="rankTags"
                            :rank-name="rankName"
                            :active-rank="activeRank"
                            :rank-tags01="rankTags">

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
        rankTags: [
          {rankImg: '3.jpg', rankName: '用户1', rankTime: '3分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
          {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
        ],
        activeRank: ["2020春日活动", "2020汉服同袍会", "春日脱团大作战", "男女装cos大作战"],
        fill: 'fill',
        isFixed: false,
        scrollNowLoation: '',
        squareUrl: '2.jpg',
        textCute: [],
        imgCute01: [
          {
            user_avatar: '1.jpg',
            user_name: '测试名称',
            pr_info: '测试对象传入插槽',
            pr_img: '37.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            pr_go: 45,
            pr_click: 4505,
          },
          {
            user_avatar: '3.jpg',
            user_name: '测试名称',
            pr_info: '测试对象传入插槽',
            pr_img: '36.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            pr_go: 45,
            pr_click: 4505,
          },
          {
            user_avatar: '4.jpg',
            user_name: '测试名称',
            pr_info: '测试对象传入插槽',
            pr_img: '34.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            pr_go: 45,
            pr_click: 4505,
          },

        ],
        imgCute02: [
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '测试对象传入插槽',
            img: '24.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
          },
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '测试对象传入插槽',
            img: '25.jpg',
            imgTags: ['崩坏', '哈哈', '二次元', 'cos'],
            imgCollect: '已收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
          },
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '测试对象传入插槽',
            img: '26.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
          },
        ],
        TestCute01: [
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '测试对象传入插槽',
            img: '25.jpg',
            imgContent: `<b>测试文字的显示是什么样子</b>`,
            imgTags: ['崩坏', '哈哈', '二次元', 'cos'],
            imgCollect: '已收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
          },
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '发布文字',
            img: '26.jpg',
            imgContent: `<b>测试文字的显示是什么样子</b>`,
            imgTags: ['崩坏', '哈哈', '二次元', 'cos'],
            imgCollect: '已收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
          },
        ],
        imgsContent:[],
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
      }
    },
    created() {
      /* axios.get("http://localhost:8090/showPro")
           .then(res => {
             console.log(res.data)
             this.imgCute01 = res.data.list;
           })*/

      axios.get("http://localhost:8090/showIndex")
          .then(res => {
            console.log(res.data)
            this.imgCute02 = res.data.list;
            this.imgsContent = res.data.list;
          })
      axios.get("http://localhost:8090/showPcIndex")
          .then(res => {
            console.log(res.data)
            this.textCute = res.data.list;
          })

      /*axios.get("http://localhost:8090/showIndex")
          .then(res => {
            console.log(res.data)
            this.textCute = res.data.list;
          })*/

    }

  }
</script>
<link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">
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

    .cute-text-img {
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        position: relative;
        bottom: 50%;
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