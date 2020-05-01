<template>
    <div>
        <!--        <el-row :gutter="10" v-for="(item,index) in collectImgs">-->
        <!--                    <el-image :src="item.imglist1"></el-image>-->
        <!--                    <el-image  src="http://localhost:8090/3.jpg"></el-image>-->
        <!--                    <el-image  src="/3.jpg"></el-image>-->
        <!--                    <el-image :src="'/'+item.pr_img"></el-image>-->
        <!--                    <el-image :src="'/'+item.pr_img"></el-image>-->
        <el-row :gutter="10" class="my-like-img-height" v-for="(item,index) in collectImgs">
          <!--  <el-col :span="8"  v-for="(item,index) in collectImgs">
                <el-link>
                    <img :src="item.pr_img" style="width: 100%" height="250"></img>
                </el-link>
            </el-col>
-->
<!--            <pro-content-mini-cute :imgs="userCollectImgs"></pro-content-mini-cute>-->
            <pro-content-mini-cute v-for="(item,index) in userCollectImgs"
                                   :imgs="item">

            </pro-content-mini-cute>

        </el-row>

       <!-- <el-row :gutter="10" class="my-like-img-height" v-for="(item,index) in collectImgs">
            <pro-content-mini-cute :imgs="index"></pro-content-mini-cute>

        </el-row>
        <el-row :gutter="10" class="my-like-img-height" >
            <pro-content-mini-cute></pro-content-mini-cute>
        </el-row>
-->
    </div>
</template>

<script>

  import ProContentMiniCute from './procontent-mini-cute'

  export default {
    name: "",
    components:{
      ProContentMiniCute,

    },
    props: {
      collectImgs: {
        type: Array,
        default() {
          return [
            {pr_img: '3.jpg'},
            {pr_img: '4.jpg'},
            {pr_img: '5.jpg'},
          ]
          // return []
        }
      },
      userCollectImgs: {
        type: Array,
        default() {
          return ['3.jpg','4.jpg','5.jpg']
        }
      }
    }
  }
</script>

<style scoped>

    .my-like-img-height {
        height: 200px;
        overflow: hidden;
        border-radius: 10px;
    }
</style>