<template>
    <div class="right-list">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h3 style="margin: 0">{{rankName}}</h3>
            </div>
            <div v-for="(item,index) in rankTags" :key="index" class="text item link-line">
                <el-row :gutter="10">  <!--style="line-height: 30px"-->
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
    props:{
      rankName:{
        type:String,
        default: '我关注的圈子',
      },
      rankTags:{
        type:Array,
        default(){
          return [
            {rankImg:'3.jpg',rankName:'用户1',rankTime:'3分钟前',rankLink:'http://www.baidu.com'},
            {rankImg:'4.jpg',rankName:'用户2',rankTime:'5分钟前',rankLink:'http://www.baidu.com'},
            {rankImg:'5.jpg',rankName:'用户3',rankTime:'6分钟前',rankLink:'http://www.baidu.com'},
          ]
        }
      },
    },
    data(){
      return{

      }
    },

  }
</script>

<style scoped>

    .link-line{
        margin: 10px 0px;
    }

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
<style>
    .right-list .el-card__header{
        padding: 10px;
    }
    .right-list .el-card__body{
        padding: 10px 20px;
    }
</style>