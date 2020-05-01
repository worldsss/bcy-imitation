<template>
    <div>
        <el-col :span="8" class="my-like-img-height" v-for="(item,index) in imgs">
            <el-link>
<!--                <el-image :src="'/'+item"></el-image>-->
<!--                <el-image :src="item"></el-image>-->
                <img :src="item"></img>
<!--                <el-image :src="item"></el-image>-->
            </el-link>
            <!--<el-link>
                <el-image :src="likeImg[1]"></el-image>
            </el-link>
            <el-link>
                <el-image :src="likeImg[1]"></el-image>
            </el-link>-->
        </el-col>
    </div>
</template>

<script>
  export default {
    name: "",
    props:{
      imgs:{
        type:Array,
        default(){
          return['3.jpg','4.jpg','5.jpg']
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