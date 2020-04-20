<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6" v-for="(item,index) in rankObject">
                <div class="p-div-height">
                    <a :href="item.rankLink">
                        <img :src="item.rankImg" alt="" class="my-rank-img">
                    </a>
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar :src="item.rankAvator" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                {{item.rankName}}
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                {{item.rankGive}}
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: "",
    props: {
      rankObject: {
        type: Array,
        default() {
          return [
            {rankImg: '34.jpg', rankLink: 'http://www.baidu.com', rankName: '用户1', rankAvator: '3.jpg', rankGive: 300},
            {rankImg: '35.jpg', rankLink: 'http://www.baidu.com', rankName: '用户2', rankAvator: '4.jpg', rankGive: 1956},
            {rankImg: '36.jpg', rankLink: 'http://www.baidu.com', rankName: '用户3', rankAvator: '5.jpg', rankGive: 2035},
            {rankImg: '37.jpg', rankLink: 'http://www.baidu.com', rankName: '用户4', rankAvator: '6.jpg', rankGive: 874},
          ]
        }
      }

    }
  }
</script>

<style scoped>
    .my-font-size {
        font-size: 22px;
    }

    .my-rank-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;

    }

    .p-div-height {
        height: 400px;
        /*height: 350px;*/
    }

    .p-rank {
        margin-top: 5px;
        font-size: 14px;
    }

    .p-givelike {
        /*margin-top: 5px;*/
        font-size: 14px;
        text-align: right;
    }
</style>