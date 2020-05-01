<template>
    <div>
        <el-row :gutter="10" v-for="(item,index) in collectImgs">
            <el-col :span="8" class="my-like-img-height">
                <el-link>
                    <el-image :src="item.imglist1"></el-image>
                </el-link>
            </el-col>
           <!-- <el-col :span="8" class="my-like-img-height">
                <el-link>
                    <el-image :src="likeImg[1]"></el-image>
                </el-link>

            </el-col>
            <el-col :span="8" class="my-like-img-height">
                <el-link>
                    <el-image :src="likeImg[2]"></el-image>
                </el-link>

            </el-col>-->
        </el-row>
    </div>
</template>

<script>
  export default {
    name: "",
    props:{
      collectImgs:{
        type:Array,
        default(){
          return [{imglist1:'3.jpg'},{imglist1:'4.jpg'},{imglist1:'5.jpg'}]
        }
      }
    }
  }
</script>

<style scoped>

</style>