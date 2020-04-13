<template>
    <div>
        <div style="width: 70%;float: left;border: 1px solid #E6E6E6" >
            <el-row :gutter="10" style="margin: 10px 0px">
                <el-col :span="12" >
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
                        <el-button slot="img-tags" type="info" size="mini" :plain="true" :autofocus="false">武汉加油</el-button>
                        <span slot="img-go">10</span>
                        <span slot="img-comment">50</span>
                        <span slot="img-click">870</span>
                    </water-fall-cute>
                </el-col>
                <el-col :span="12" >
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
        <div style="width: 29%;float: right;border: 1px solid #e6e6e6">
<!--            v-model="activeNames"-->
            <el-collapse>
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <br>

                <!--                :class="{'fixedlunbo':isFixed}"-->
                <div style="padding-top: 0px"  :class="{'fixedlunbo':isFixed}" id="so">
                    <div  @change="handleScroll">
                        <div  :class="{'fixedlunbo':isFixed}">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>我关注的圈子</span>
                                    <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                                </div>
                                <div v-for="o in 4" :key="o" class="text item">
                                    <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                                    <el-row :gutter="10" style="line-height: 30px">
                                        <el-col :span="2">
                                            <el-link :underline="false">
                                                <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>
                                            </el-link>
                                        </el-col>
                                        <el-col :span="16">
                                            <el-link> {{'列表内容 ' + o }}</el-link>

                                        </el-col>
                                        <el-col :span="6">
                                            <span style="float: right;opacity: 0.6;">6分钟前</span>
                                        </el-col>
                                    </el-row>
                                </div>
                                <br>
                                <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                            </el-card>
                            <br>
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>我关注的用户</span>
                                    <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                                </div>
                                <div v-for="o in 4" :key="o" class="text item">
                                    <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                                    <el-row :gutter="10" style="line-height: 30px">
                                        <el-col :span="2">
                                            <el-link :underline="false">
                                                <el-avatar shape="circle" :size="20" :src="squareUrl"></el-avatar>
                                            </el-link>
                                        </el-col>
                                        <el-col :span="17">
                                            <el-link> {{'列表内容 ' + o }}</el-link>

                                        </el-col>
                                    </el-row>
                                </div>
                                <br>
                                <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                            </el-card>

                            <p>
                                © 2020 bcy.net 版权所有

                                ICP证：浙ICP备14021595号-1

                                浙网文[2014]0701-051号

                                浙公网安备 33010802002901号
                                信息产业部备案管理系统
                                浙江省互联网违法和不良信息举报中心
                                12318全国文化市场举报网站

                                关于我们·商务合作

                                举报指引·营业执照

                                帮助中心·知乎
                            </p>
                        </div>


                    </div>

                </div>

            </el-collapse>
        </div>


    </div>
</template>


<script>
  import WaterFallCute from '../components/WaterFall-cute-img'
  import WaterFallTextCute from '../components/WaterFall-cute-text'


  export default {
    name: "AttentionPage",
    //注册组件
    components:{
      WaterFallCute,
      WaterFallTextCute
    },
    data(){
      return{
        fill:'fill',
        isFixed:false,
        scrollNowLoation:'',
        circleUrl:'2.jpg',
        squareUrl:'3.jpg',
        imgCute01:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'20.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'21.jpg',
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'22.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ],
        imgCute02:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'24.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'25.jpg',
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'26.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ],
        TestCute01:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'25.jpg',
            imgContent:`<b>测试文字的显示是什么样子</b>`,
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'发布文字',
            img:'26.jpg',
            imgContent:`<b>测试文字的显示是什么样子</b>`,
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        console.log(window.scrollY)
        if(window.scrollY>600){
          this.isFixed = true
        }else {
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
    .fixedlunbo{
        width: 22%;
        position: fixed;
        top: 20px;
    }
    .cute-img{
        width: 90%;
        height: auto;
        border-radius: 10px;
    }
    .cute-text-img{
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        position: relative;
        bottom: 50%;
        border-radius: 10px;
    }


    .lunbo-big{
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .lunbo-small{
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }

</style>