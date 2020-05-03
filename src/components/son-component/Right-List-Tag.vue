<template>
    <div class="right-list">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 style="margin: 0">{{rankName}}</h3>
            </div>
            <div v-for="(item,index) in rankTags" :key="index" class="text item link-line">
                <!-- <el-row :gutter="10">  &lt;!&ndash;style="line-height: 30px"&ndash;&gt;
                     <el-col :span="2">
                         <el-link :underline="false" :href="item.rankLink">
                             <el-avatar shape="square" :size="24" :src="item.rankImg">

                             </el-avatar>
                         </el-link>
                     </el-col>
                     <el-col :span="16" style="padding-left: 10px">
                         <el-link :href="item.rankLink">{{item.rankName}}</el-link>
                     </el-col>
                     <el-col :span="6">
                         <span style="float: right;opacity: 0.6;">{{item.rankTime}}</span>
                     </el-col>
                 </el-row>-->
                <el-row :gutter="10">  <!--style="line-height: 30px"-->
                    <el-col :span="2">
                        <el-link :underline="false">
                            <el-avatar shape="square" :size="24" :src="item.rankImg">

                            </el-avatar>
                        </el-link>
                    </el-col>
                    <el-col :span="13" style="padding-left: 10px" @click="clickUserGivelike(item.tid)">
                        <!--:href="item.rankLink"-->
                        <a :href="'/circle-page/'+item.tid" target="_blank" class="tags-link " style="">{{item.tags_name}}</a>
                    </el-col>
                    <el-col :span="9">
<!--                        <span style="float: right;opacity: 0.6;">{{// nowDate-item.tags_latest_time}}</span>-->
                        <span style="float: right;opacity: 0.6;">{{nowtime(item)}}</span>
                    </el-col>
                </el-row>

            </div>
            <br>
            <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
        </el-card>
    </div>
</template>

<script>
  export default {
    name: "",
    props: {
      rankName: {
        type: String,
        default: '我关注的圈子',
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
    },
    data() {
      return {
        nowDate:'',
      }
    },
    methods: {
      //点赞功能
      clickUserGivelike(index) {
        alert("点击了没有啊")
        //打开新的页面显示内容
        console.log(index)
        let routeData = this.$router.resolve({path: '/circle-page/' + index});
        window.open(routeData.href, '_blank');

      },
    },
    computed:{
      nowtime(){
        return function (index) {
          // alert(index.tags_latest_time)
          var lastTime = new Date(index.tags_latest_time+"")
          var nowTime =  new Date("yyyy-MM-dd hh:mm:ss")

          function time_dis (direct_time) {
            // direct_time格式为yyyy-mm-dd hh:mm:ss 指定时间
            var now_time = Date.parse(new Date());//当前时间的时间戳
            var end_time = Date.parse(new Date(direct_time));//指定时间的时间戳

              //计算相差天数
              // var time_dis = end_time - now_time;
              var time_dis = now_time - end_time;
              var days=Math.floor(time_dis/(24*3600*1000));
              //计算出小时数
              var leave1=time_dis%(24*3600*1000);//计算天数后剩余的毫秒数
              var hours=Math.floor(leave1/(3600*1000));
              //计算相差分钟数
              var leave2=leave1%(3600*1000);//计算小时数后剩余的毫秒数
              var minutes=Math.floor(leave2/(60*1000));
              //计算相差秒数
              var leave3=leave2%(60*1000);//计算小时数后剩余的毫秒数
              var second = leave3/1000;
              // return days+"天"+hours+"小时"+minutes+"分"+second+"秒";
              return minutes+"分"+second+"秒前";

          }

          // time_dis(index.tags_latest_time)//x天x小时x分钟x秒



          // return index.tags_latest_time
          return time_dis(index.tags_latest_time)//x天x小时x分钟x秒
        }

      },

    },
    created() {
      this.nowDate = new Date("yyyy年MM月dd日 hh:mm:ss")
    }

  }
</script>

<style scoped>

    .link-line {
        margin: 10px 0px;
    }

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

    /* .cute-text-img{
         width: 100%;
         position: relative;
         bottom: 50%;
         border-radius: 10px;
     }*/


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

    .tags-link {
        text-decoration: none;
        color: black;
    }
    .tags-link:hover{
        text-decoration: underline;
    }


</style>
<style>
    .right-list .el-card__header {
        padding: 10px;
    }

    .right-list .el-card__body {
        padding: 10px 20px;
    }
</style>