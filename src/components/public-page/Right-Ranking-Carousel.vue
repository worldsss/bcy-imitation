<template>
    <div>
        <div class="main-right page-right">
            <el-collapse>

                <!--  xx活动-->
                <el-collapse-item>
                    <template slot="title">
                        <span class="my-opacity my-margin-left-mini">COS活动：</span>
                        <el-link type="primary" :underline="false">
                            {{activeRank[0]}}
                        </el-link>
                    </template>
                    <div v-for="(item,index) in activeRank">
                        <i class="el-icon-s-flag my-margin-right-mini my-margin-left-mini"></i>
                        <el-link type="primary" :underline="false">{{item}}</el-link>
                        <br>
                    </div>

                </el-collapse-item>

                <!-- 活动推荐-->
                <el-carousel height="150px" class="m-mar-t-b-mini">
                    <el-carousel-item v-for="item in activeCar" :key="item">
                        <!--                        <h3 class="small lunbo-big">{{ item }}</h3>-->
                        <el-image :src="item"></el-image>
                    </el-carousel-item>
                </el-carousel>

                <!-- 优秀coser/绘画推荐-->
                <div :class="{'fixedlunbo':isFixed}">
                    <el-card class="my-padding-top-none" id="so">
                        <h3 class="my-rank-text">
                            <i class="el-icon-collection-tag"></i>
                            优秀{{rankName}}推荐
                        </h3>
                        <el-carousel height="450px" indicator-position="outside">
                            <el-carousel-item v-for="item in rankCar" :key="item">
                                <!--                                <h3 class="small lunbo-small">{{ item }}</h3>-->
                                <el-image :src="item" style="height: 100%"></el-image>
                            </el-carousel-item>
                        </el-carousel>

                    </el-card>
                    <div class="company-info">
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
  export default {
    name: "",
    props: {
      activeRank: {
        type: Array,
        default() {
          return ["2020春日活动", "2020汉服同袍会", "春日脱团大作战", "男女装cos大作战"]
        }
      },
      activeCar: {
        type: Array,
        default() {
          return ["2.jpg", "3.jpg", "4.jpg", "5.jpg"]
        }
      },
      rankCar: {
        type: Array,
        default() {
          return ["33.jpg", "34.jpg", "35.jpg", "36.jpg"]
        }
      },
      rankName:{
        type:String,
        default:"Coser"
      }
    },
    data() {
      return {
        /* activeRank:["2020春日活动","2020汉服同袍会","春日脱团大作战","男女装cos大作战"],
         activeCar:["","",""],
         rankCar:["33.jpg","34.jpg","35.jpg","36.jpg"],*/
        isFixed: false,
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

    }

  }
</script>

<style scoped>
    .p-nomargin {
        margin: 0px;
        opacity: 0.5;
    }

    .fixedlunbo {
        width: 20%;
        position: fixed;
        top: 15px;
    }

    .lunbo-big {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .my-rank-text {
        margin: 10px;
        text-align: center
    }

    .m-mar-t-b-mini {
        margin: 10px 0px;
    }

    .my-padding-top-none {
        padding-top: 0;
    }

    .my-margin-left-mini {
        margin-left: 10px;
    }

    .my-margin-right-mini {
        margin-right: 10px;
    }

    .company-info {
        font-size: 14px;
        margin-top: 5px
    }

</style>

<style>
    .page-right .el-tabs--border-card > .el-tabs__content {
        padding: 0px;
    }

    .page-right .el-collapse-item__header {
        border-radius: 10px;
    }

    .page-right .el-card__body {
        padding: 10px;
    }

</style>