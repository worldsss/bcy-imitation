<template>
    <div>
        <br>
        <div style="text-align: center">
            <el-link class="my-font-size" :underline="false">绘画榜</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link class="my-font-size" :underline="false">COS榜</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link class="my-font-size" :underline="false">写作榜</el-link>
        </div>
        <div style="text-align: center">
            <br>
            <el-button-group>
                <el-button type="info" :autofocus="true">周榜</el-button>
                <el-button type="info">日榜</el-button>
                <el-button type="info">新人榜</el-button>
            </el-button-group>
        </div>
        <br>

        <rank-cute></rank-cute>
        <rank-cute></rank-cute>
        <rank-cute></rank-cute>
        <rank-cute></rank-cute>

    </div>
</template>

<script>
  import RankCute from '../components/public-page/Rank-Cute'

  export default {
    name: "",
    components: {
      RankCute,

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