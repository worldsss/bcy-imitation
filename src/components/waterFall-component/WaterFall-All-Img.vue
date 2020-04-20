<template>
    <div>
        <water-fall-cute v-for="(item,index) in imgCute">
            <el-avatar :size="40" :src="item.user_avatar" slot="img-avatar"></el-avatar>
            <strong slot="img-name">
                {{item.user_name}}
            </strong>
            <span slot="img-text">
                             {{item.pr_info}}
                         </span>
            <img :src="item.pr_img" slot="img" class="cute-img" alt="">
            <!--<el-button slot="img-tags"
                       type="info"
                       size="mini"
                       :plain="true"
                       :autofocus="false" v-for="(item2,index) in item.imgTags">
                {{item2}}
            </el-button>-->
           <!-- <span slot="img-collect">
                {{item.img_collect?'收藏':'未收藏'}}
            </span>-->
            <span slot="img-go">
                {{item.pr_go}}
            </span>
           <!-- <span slot="img-comment">
                {{item}}
            </span>-->
            <span slot="img-click">
                {{item.pr_click}}
            </span>
        </water-fall-cute>

    </div>
</template>

<script>
  import WaterFallCute from '../WaterFall-cute-img'

  export default {
    name: "",
    components:{
      WaterFallCute,

    },
    props: {
      imgCute: {
        type: Array,
        default() {
          return [
            {
              user_avatar: '1.jpg',
              user_name: '测试名称',
              pr_info: '测试对象传入插槽',
              pr_img: '24.jpg',
              imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
              imgCollect: '收藏',
              pr_go: 45,
              pr_click: 4505,
            },
            {
              user_avatar: '1.jpg',
              user_name: '测试名称',
              pr_info: '测试对象传入插槽',
              pr_img: '24.jpg',
              imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
              imgCollect: '收藏',
              pr_go: 45,
              pr_click: 4505,
            },
            {
              user_avatar: '1.jpg',
              user_name: '测试名称',
              pr_info: '测试对象传入插槽',
              pr_img: '24.jpg',
              imgTags: ['崩坏', '明日方舟', '二次元', 'cos'],
              imgCollect: '收藏',
              pr_go: 45,
              pr_click: 4505,
            },
          ]
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