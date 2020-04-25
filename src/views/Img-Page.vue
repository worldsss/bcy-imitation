<template>
    <div>
        <div class="main-left">

            <el-tabs type="border-card">
                <el-tab-pane label="绘画周榜">
                    <page-all-rank :rankbig="rankbig"
                                   :ranksinto01="ranksinto01"
                                   :ranksinto02="ranksinto02">

                    </page-all-rank>

                </el-tab-pane>
                <el-tab-pane label="绘画日榜">绘画日榜</el-tab-pane>
                <el-tab-pane label="绘画新人榜">绘画新人榜</el-tab-pane>

            </el-tabs>
            <!--                 页面的重复的相同的内容-->


            <el-row :gutter="10" style="margin: 10px 0px">
                <el-col :span="12">
                    <water-fall-cute v-for="(item,index) in imgCute01">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">
                            {{item.imgName}}
                        </strong>
                        <span slot="img-text">
                             {{item.imgText}}
                         </span>
                        <img :src="item.img" slot="img" class="cute-img" alt="">
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
                    </water-fall-cute>
                    <water-fall-imgs>
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
                    </water-fall-imgs>
                </el-col>
                <el-col :span="12">
                    <water-fall-cute v-for="(item,index) in imgCute02">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">{{item.imgName}}</strong>
                        <span slot="img-text">{{item.imgText}}</span>
                        <img :src="item.img" slot="img" class="cute-img" alt="">
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
                    </water-fall-cute>
                    <water-fall-text-cute v-for="(item,index) in TestCute01">
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
                    </water-fall-text-cute>
                </el-col>
            </el-row>
        </div>
        <right-ranking-carousel></right-ranking-carousel>


    </div>
</template>

<script>
  import WaterFallCute from '../components/WaterFall-cute-img'
  import WaterFallTextCute from '../components/WaterFall-cute-text'
  import WaterFallImgs from '../components/WaterFall-cute-imgs'
  import PageAllRank from '../components/public-page/Page-AllRank'
  import RightRankingCarousel from '../components/public-page/Right-Ranking-Carousel'

  export default {
    name: "ImgPage",
    //注册组件
    components: {
      WaterFallCute,
      WaterFallTextCute,
      WaterFallImgs,
      PageAllRank,
      RightRankingCarousel,


    },
    data() {
      return {
        fill: 'fill',
        isFixed: false,
        scrollNowLoation: '',
        circleUrl:'3.jpg',
        rankbig: {
          img: '20.jpg',
          avator: '4.jpg',
          name: '测试1',
          counts: 1,
          giveup: 548,
          back: 'background-color:#fa5757'
        },
        ranksinto01: [
          {img: '14.jpg', avator: '4.jpg', name: '测试1', counts: 2, giveup: 548, back: 'background-color:#ffa008'},
          {img: '17.jpg', avator: '5.jpg', name: '测试2', counts: 3, giveup: 1520, back: 'background-color:#fad73c'},
          {img: '31.jpg', avator: '6.jpg', name: '测试3', counts: 4, giveup: 687},
        ],
        ranksinto02: [
          {img: '16.jpg', avator: '4.jpg', name: '测试1', counts: 5, giveup: 578},
          {img: '20.jpg', avator: '5.jpg', name: '测试2', counts: 6, giveup: 784},
          {img: '23.jpg', avator: '6.jpg', name: '测试3', counts: 7, giveup: 231},
        ],
        imgCute01: [
          {
            imgAvatar: '1.jpg',
            imgName: '测试名称',
            imgText: '测试对象传入插槽',
            img: '20.jpg',
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
            img: '21.jpg',
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
            img: '22.jpg',
            imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
            imgCollect: '收藏',
            imgGo: 45,
            imgComment: 15,
            imgClick: 4505,
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
            imgContent: `<b>测试文字的显示是什么样子</b>

                                            <p><strong>在如今的互联网时代，人们越来越喜欢将自己的数据存放到互联网上，于是便诞生了很多类型的软件，比如360网盘，百度网盘，云盘之类的。所以说，文件上传和下载的功能是现在非常主流的一个功能，应用十分广泛。</strong><br>
<strong>那现在，我们就来学习一下，在web中，如何去实现文件上传和下载！</strong><br>
实现web开发中的文件上传功能，需完成如下二步操作：<br>
在web页面中添加上传输入项<br>

`,
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
        height: 100%;
        border-radius: 10px;
    }

   /* .cute-text-img {
        !* width: 90%;
         height: 100%;
         border-radius: 10px;*!
        width: 100%;
        position: relative;
        bottom: 50%;
        border-radius: 10px;
    }*/

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image-big {
        width: 100%;
        display: block;
        height: 500px;
        border-radius: 10px;
    }

    .image-small {
        width: 100%;
        display: block;
        height: 250px;
        border-radius: 10px;
    }

    .img-avator-samll {

    }

    .card-class {
        position: relative;
    }

    .img-avator-div {
        position: absolute;
        left: 5px;
        bottom: 0px;
        display: inline
    }

    .img-avator-img {

    }

    .img-avator-name {
        color: white;
        float: right;
        margin: 10px 0px 10px 5px
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
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