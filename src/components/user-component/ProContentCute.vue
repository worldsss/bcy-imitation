<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="8" class="my-like-img-height">
                <el-link href="">
                    <el-image :src="likeImg[0]"></el-image>
                </el-link>
            </el-col>
            <el-col :span="8" class="my-like-img-height">
                <el-link href="">
                    <el-image :src="likeImg[1]"></el-image>
                </el-link>

            </el-col>
            <el-col :span="8" class="my-like-img-height">
                <el-link href="">
                    <el-image :src="likeImg[2]"></el-image>
                </el-link>

            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: "",
    props:{
      proContent:{
        type:Array,
        default(){
          return [
            {prid:1,}
          ]
        }
      }
    },
  }
</script>

<style scoped>
    .my-like-img-height {
        height: 200px;
        overflow: hidden;
        border-radius: 10px;
    }

</style>