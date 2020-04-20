<template>
    <div>
        <div class="main-right">
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

                <!--                :class="{'fixedlunbo':isFixed}"-->
                <div style="padding-top: 0px;margin-top: 10px" :class="{'fixedlunbo':isFixed}" id="so">
                    <div @change="handleScroll">
                        <div>
                            <right-list-tag :rank-name="rankName" :rank-tags="rankTags">

                            </right-list-tag>
                            <div style="height: 10px"></div>
                            <right-list-tag :rank-name="rankName" :rank-tags="rankTags01">

                            </right-list-tag>
                        </div>

                    </div>
                    <!-- 公司信息-->
                    <company-info></company-info>
                </div>
            </el-collapse>
        </div>
    </div>
</template>

<script>
  import CompanyInfo from './Company-Info'
  import RightListTag from '../son-component/Right-List-Tag'

  export default {
    name: "",
    components: {
      CompanyInfo,
      RightListTag,

    },
    props: {
      rankName: {
        type: String,
        default: '我关注的圈子'
      },
      rankTags: {
        type: Array,
        default() {
          return [
            {rankImg: '3.jpg', rankName: '用户1', rankTime: '3分钟前', rankLink: 'http://www.baidu.com'},
            {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
            {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
          ]
        }
      },
      rankTags01: {
        type: Array,
        default() {
          return [
            {rankImg: '3.jpg', rankName: '用户1', rankTime: '3分钟前', rankLink: 'http://www.baidu.com'},
            {rankImg: '4.jpg', rankName: '用户2', rankTime: '5分钟前', rankLink: 'http://www.baidu.com'},
            {rankImg: '5.jpg', rankName: '用户3', rankTime: '6分钟前', rankLink: 'http://www.baidu.com'},
          ]
        }
      },
      activeRank: {
        type: Array,
        default() {
          return ["2020春日活动", "2020汉服同袍会", "春日脱团大作战", "男女装cos大作战"]
        }
      },
    },
    data() {
      return {
        /* activeRank: {
           type: Array,
           default() {
             return ["2020春日活动", "2020汉服同袍会", "春日脱团大作战", "男女装cos大作战"]
           }
         },*/
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
      }
    },
  }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;

    }

    .fixedlunbo {
        width: 20%;
        position: fixed;
        top: -100px;
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