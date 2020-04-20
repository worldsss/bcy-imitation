<template>
    <div>
        <div class="main-left">
            <el-row :gutter="10" style="margin: 10px 0px">
                <el-col :span="12">
                    <water-fall-all-img :img-cute="imgCute01"></water-fall-all-img>

                    <!--<water-fall-cute>
                        <span slot="img-text">测试插槽的使用</span>
                        <img src="11.jpg" slot="img" class="cute-img" alt="">
                        <el-button slot="img-tags" type="info" size="mini" :plain="true" :autofocus="false">武汉加油
                        </el-button>
                        <span slot="img-go">10</span>
                        <span slot="img-comment">50</span>
                        <span slot="img-click">870</span>
                    </water-fall-cute>-->
                    <!--<water-fall-imgs>
                        <el-avatar :size="40" src="10.jpg" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">fdsfds</strong>
                        <span slot="img-text">fdsfds</span>

                        <span slot="img-collect">
                             46
                         </span>
                        <span slot="img-go">
                            645
                         </span>
                        <span slot="img-comment">
                            645
                         </span>
                        <span slot="img-click">
                             123
                         </span>
                    </water-fall-imgs>-->

                    <water-fall-all-imgs></water-fall-all-imgs>

                </el-col>
                <el-col :span="12">

                    <water-fall-all-img></water-fall-all-img>

                   <!-- <water-fall-text-cute v-for="(item,index) in TestCute01">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">{{item.imgName}}</strong>
                        <span slot="img-text">{{item.imgText}}</span>
                        <span slot="img-content" v-html="item.imgContent">
                         </span>
                        <img :src="item.img" slot="img" class="cute-text-img" alt="">
                        <el-button slot="img-tags"
                                   type="info"
                                   size="mini"
                                   :plain="true"
                                   :autofocus="false" v-for="(item2,index) in item.imgTags">
                            {{item2}}
                        </el-button>
                        <span slot="img-collect">
                             {{item.imgCollect}}
                         </span>
                        <span slot="img-go">
                             {{item.imgGo}}
                         </span>
                        <span slot="img-comment">
                             {{item.imgComment}}
                         </span>
                        <span slot="img-click">
                             {{item.imgClick}}
                         </span>
                    </water-fall-text-cute>-->

                    <water-fall-all-text></water-fall-all-text>


                </el-col>
            </el-row>

        </div>

        <right-ranking-tags :rank-tags="rankTags" :rank-name="rankName" :active-rank="activeRank"
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
        ]
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
      axios.get("http://localhost:8090/showPro")
          .then(res => {
            console.log(res.data)
            this.imgCute01 = res.data.list;
          })
    }

  }
</script>

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