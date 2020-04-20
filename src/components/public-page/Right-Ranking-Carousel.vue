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
                    <company-info></company-info>
                </div>

            </el-collapse>
        </div>
    </div>
</template>

<script>
    import CompanyInfo from './Company-Info'

  export default {
    name: "",
    components:{
      CompanyInfo,

    },
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