<template>
    <div>
        <div class="main-left">

            <el-tabs type="border-card">
                <el-tab-pane label="COS周榜">
                    <el-row>
                        <page-tag-big v-for="(item,index) in rankbig">
                            <img slot="img"
                                 :src="item.img"
                                 class="image-big">
                            <el-avatar slot="avatar" :size="30"
                                       :src="item.avator"
                                       style="float: left"></el-avatar>
                            <span slot="name">{{item.name}}</span>
                            <span slot="img-counts">{{item.counts}}</span>
                            <span slot="img-giveup">{{item.giveup}}</span>
                        </page-tag-big>
                        <!--                        <el-col :span="16">-->
                        <el-col :span="15">
                            <el-row>
                                <page-ranks :rankinto="ranksinto01"></page-ranks>
                            </el-row>
                            <el-row>
                                <page-ranks :rankinto="ranksinto02"></page-ranks>
                            </el-row>
                        </el-col>
                    </el-row>


                </el-tab-pane>
                <el-tab-pane label="COS日榜">绘画日榜</el-tab-pane>
                <el-tab-pane label="COS新人榜">绘画新人榜</el-tab-pane>

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
                    <water-fall-cute>
                        <span slot="img-text">测试插槽的使用</span>
                        <img src="11.jpg" slot="img" class="cute-img" alt="">
                        <el-button slot="img-tags" type="info" size="mini" :plain="true" :autofocus="false">武汉加油
                        </el-button>
                        <span slot="img-go">10</span>
                        <span slot="img-comment">50</span>
                        <span slot="img-click">870</span>
                    </water-fall-cute>
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
        <div class="main-right" id="rights">
            <el-collapse v-model="activeNames" @change="handleChange">

<!--                xx活动-->
                <el-collapse-item>
                    <template slot="title">
                        <span class="my-opacity my-margin-left-mini">COS活动：</span>

                        <el-link type="primary" :underline="false">男女装cos对抗赛</el-link>
                    </template>
                    <i class="el-icon-s-flag my-margin-right-mini my-margin-left-mini"></i>
                    <el-link type="primary" :underline="false">男女装cos对抗赛</el-link>
                    <br>
                    <i class="el-icon-s-flag my-margin-right-mini my-margin-left-mini"></i>
                    <el-link type="primary" :underline="false">男女装cos对抗赛</el-link>
                    <br>
                </el-collapse-item>

<!--                活动推荐-->
                <el-carousel height="150px" style="margin: 10px 0px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small lunbo-big">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>

<!--                优秀coser/绘画推荐-->
                <div  :class="{'fixedlunbo':isFixed}" > <!-- :class="{'fixedlunbo':isFixed}"-->
                    <el-card style="padding-top: 0px" id="so">
                        <h3 style="margin: 10px"><i class="el-icon-edit"></i>优秀Coser推荐</h3>
                        <el-carousel height="450px" indicator-position="outside">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <h3 class="small lunbo-small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>


                    </el-card>
                    <div style="font-size: 14px;margin-top: 5px">
                        <p class="p-nomargin"> © 2020 bcy.net 版权所有</p>
                        <p class="p-nomargin"> ICP证：浙ICP备14021595号-1</p>
                        <p class="p-nomargin"> 浙公网安备 33010802002901号</p>
                        <p class="p-nomargin"> 浙网文[2014]0701-051号</p>
                        <el-link type="primary">信息产业部备案管理系统</el-link>
                        <el-link type="primary">浙江省互联网违法和不良信息举报中心</el-link>
                        <el-link type="primary">12348全国文化市场举报网站</el-link>
                        <br>
                        <el-link type="primary" class="my-margin-right-mini">关于我们</el-link>
                        <el-link type="primary">商务合作</el-link>
                        <br>
                        <el-link type="primary" class="my-margin-right-mini">举报指引</el-link>
                        <el-link type="primary">营业执照</el-link>
                        <br>
                        <el-link type="primary" class="my-margin-right-mini">帮助中心</el-link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-link type="primary">知乎</el-link>
                    </div>
                </div>


            </el-collapse>
        </div>

    </div>
</template>

<script>
  import WaterFallCute from '../components/WaterFall-cute-img'
  import WaterFallTextCute from '../components/WaterFall-cute-text'
  import PageTags from '../components/public-page/Page-Tags'
  import PageRanks from '../components/public-page/Page-Rankings'
  import PageTagBig from '../components/public-page/Page-TagBig'


  export default {
    name: "WritePage",
    //注册组件
    components: {
      WaterFallCute, //瀑布流图片
      WaterFallTextCute, //瀑布流文字内容
      PageTags, //榜单最小模块
      PageRanks,
      PageTagBig,
    },
    data() {
      return {
        fill: 'fill',
        isFixed: false,
        scrollNowLoation: '',
        circleUrl: '',
        activeNames: '',
        rankbig: [
          {img: '20.jpg', avator: '4.jpg', name: '测试1', counts: 1, giveup: 548, back: 'background-color:#fa5757'},
        ],
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
      },
      handleChange() {

      },
    }

  }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;

    }

    /* .fixedlunbo {
         width: 22%;
         position: fixed;
         top: 20px;
     }*/
    .fixedlunbo {
        width: 20%;
        position: fixed;
        top: 15px;
    }

    /*
        .cute-img {
            width: 90%;
            height: auto;
            border-radius: 10px;
        }*/
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

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .my-margin-left-mini {
        margin-left: 10px;
    }

    .my-margin-right-mini{
        margin-right: 10px;
    }

    .p-nomargin {
        margin: 0px;
        opacity: 0.5;
    }

    .image-big {
        width: 100%;
        display: block;
        height: 513px;
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

<style>
    .main-left .el-tabs--border-card > .el-tabs__content {
        padding: 0px;
    }

    #rights .el-collapse-item__header {
        border-radius: 10px;
    }

    #rights .el-card__body {
        padding: 10px;
    }


</style>