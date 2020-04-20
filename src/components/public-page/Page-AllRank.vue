<template>
    <el-row>
        <el-col :span="9">
            <!-- <page-tag-big v-for="(item,index) in rankbig">
                 <img slot="img"
                      :src="item.img"
                      class="image-big">
                 <el-avatar slot="avatar" :size="30"
                            :src="item.avator"
                            style="float: left"></el-avatar>
                 <span slot="name">{{item.name}}</span>
                 <span slot="img-counts">{{item.counts}}</span>
                 <span slot="img-giveup">{{item.giveup}}</span>
             </page-tag-big>-->
            <page-ranks-big :rankbig="rankbig"></page-ranks-big>

        </el-col>

        <!--                        <el-col :span="16">-->
        <el-col :span="15">
            <el-row>
                <page-ranks :rankinto="ranksinto01"></page-ranks>
            </el-row>
            <el-row>
                <page-ranks :rankinto="ranksinto02"></page-ranks>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
  import PageTags from '../public-page/Page-Tags'
  import PageRanks from '../public-page/Page-Rankings'
  import PageTagBig from '../public-page/Page-TagBig'
  import PageRanksBig from '../public-page/Page-RanksBig'


  export default {
    name: "",
    components: {
      PageTagBig,
      PageTags,
      PageRanks,
      PageRanksBig

    },
    props: {
      rankbig:{
        type:Object,
        default:
            {img: '20.jpg', avator: '4.jpg', name: '测试1', counts: 1, giveup: 548, back: 'background-color:#fa5757'},


      },
      ranksinto01: {
        type: Array,
        default() {
          [
            {img: '14.jpg', avator: '4.jpg', name: '测试1', counts: 2, giveup: 548, back: 'background-color:#ffa008'},
            {img: '17.jpg', avator: '5.jpg', name: '测试2', counts: 3, giveup: 1520, back: 'background-color:#fad73c'},
            {img: '31.jpg', avator: '6.jpg', name: '测试3', counts: 4, giveup: 687},
          ]
        }
      },
      ranksinto02: {
        type: Array,
        default() {
          [
            {img: '16.jpg', avator: '4.jpg', name: '测试1', counts: 5, giveup: 578},
            {img: '20.jpg', avator: '5.jpg', name: '测试2', counts: 6, giveup: 784},
            {img: '23.jpg', avator: '6.jpg', name: '测试3', counts: 7, giveup: 231}]
        }
      },
    }

  }
</script>

<style scoped>

</style>