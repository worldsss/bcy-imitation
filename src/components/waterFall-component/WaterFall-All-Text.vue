<template>
    <div class="markdown-body">
       <!-- <water-fall-text-cute v-for="(item,index) in TestCute01">
            <el-avatar :size="40" :src="item.user_avatar" slot="img-avatar"></el-avatar>
            <strong slot="img-name">{{item.user_name}}</strong>
            <span slot="img-text">{{item.pc_info}}</span>
            <span slot="img-content" v-html="item.pc_content"></span>
            <span slot="img-title" v-html="item.pc_title"></span>
            <img :src="item.pc_firstImg"
                 slot="img"
                 style="width: 100%;height:auto;position: relative;bottom: 0px;"
                 @click="hrefContent(item.pcid)" alt="">
            <el-button slot="img-tags"
                       type="info"
                       size="mini"
                       :plain="true"
                       :autofocus="false" v-for="(item2,index) in item.pc_tags">
                {{item2.tags_name}}
            </el-button>
            <span slot="img-collect">{{item.pc_collect == false?'已收藏':'收藏'}}</span>
            <span slot="img-go">{{item.pc_go}}</span>
            <span slot="img-comment">{{item.pc_comment}}</span>
            <span slot="img-click">{{item.pc_click}}</span>
        </water-fall-text-cute>
-->
        <water-fall-text-cute v-for="(item,index) in TestCute01">
            <el-avatar :size="40" :src="item.user_avatar" slot="img-avatar"></el-avatar>
            <strong slot="img-name">{{item.user_name}}</strong>
            <span slot="img-text">{{item.pc_info}}</span>
            <span slot="img-content" v-html="item.pc_content"></span>
            <span slot="img-title" v-html="item.pc_title"></span>

            <div slot="img" :class="item.pc_firstImg!=''?'pc-img-div':'pc-img-ss'">
                <img :src="item.pc_firstImg"
                     style="width: 100%;margin: 0 auto; height:auto;position: relative;bottom: 0px;cursor: pointer;"
                     @click="hrefContent(item.pcid)" alt="">
            </div>


            <el-button slot="img-tags"
                       type="info"
                       size="mini"
                       :plain="true"
                       :autofocus="false" v-for="(item2,index) in item.pc_tags">
                {{item2.tags_name}}
            </el-button>
            <span slot="img-collect">{{item.pc_collect == false?'已收藏':'收藏'}}</span>
            <span slot="img-go">{{item.pc_go}}</span>
            <span slot="img-comment">{{item.pc_comment}}</span>
            <span slot="img-click">{{item.pc_click}}</span>
        </water-fall-text-cute>


    </div>
</template>

<script>
  import WaterFallTextCute from '../WaterFall-cute-text'
  import "mavon-editor/dist/css/index.css"

  export default {
    name: "",
    components:{
      WaterFallTextCute,
    },
    props:{
      TestCute01:{
        type:Array,
        default(){
          return [
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
      }

    },
    methods:{
      hrefContent(index){
        let routeData = this.$router.resolve({ path: '/content/'+index });
        window.open(routeData.href, '_blank');

      }
    }

  }
</script>

<!--居然是因为这个的吗？？？？？-->
<!--<link href="https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css" rel="stylesheet">-->

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

    /*.cute-text-img-water {*/
    .cute-text-img{
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
        bottom: 50%;
        border-radius: 10px;

/*
        width: 100% !important;
        position: relative !important;
        bottom: 50% !important;
        border-radius: 10px !important;*/

    }
    .pc-img-div {
        width: 90%;
        height: 200px;
        margin: 5px auto;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
    }

    .pc-img-ss{
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }



</style>

<!--
<style>
    .cute-text-img{
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
        bottom: 50%;
        border-radius: 10px;
    }
</style>-->
