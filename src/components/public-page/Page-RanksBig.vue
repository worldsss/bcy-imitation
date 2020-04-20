<template>
    <div>
     <!--   <page-tag-big v-for="(item,index) in rankbig">
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
        <page-tag-big>
            <img slot="img"
                 :src="rankbig.img"
                 class="image-big">
            <el-avatar slot="avatar" :size="30"
                       :src="rankbig.avator"
                       style="float: left"></el-avatar>
            <span slot="name">{{rankbig.name}}</span>
            <span slot="img-counts">{{rankbig.counts}}</span>
            <span slot="img-giveup">{{rankbig.giveup}}</span>
        </page-tag-big>



    </div>
</template>

<script>
    import PageTagBig from '../public-page/Page-TagBig'

  export default {
    name: "",
    components:{
      PageTagBig
    },
    props:{
      rankbig:{
        type:Object,
        default:
          {img: '20.jpg', avator: '4.jpg', name: '测试1', counts: 1, giveup: 548, back: 'background-color:#fa5757'},

      },
    }
  }
</script>

<style scoped>
    .image-big {
        width: 100%;
        display: block;
        height: 500px;
        border-radius: 10px;
    }
    .img-avator-div {
        position: absolute;
        left: 10px;
        bottom: 0px;
        display: inline
    }

    .img-p {
        font-size: 14px;
        color: white;
        float: right;
        margin: 7px 10px 0px 5px;
        padding-bottom: 10px;
    }

    .card-class {
        position: relative;

    }

    .imgs-a {
        width: 100%;
        display: block;
        height: 513px;
    }

    .imgs-button {
        border: 1px solid;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        text-align: center;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
    }
    .imgs-span{
        display: block;
        margin-top: 3px;
        color: white;
    }


    .imgs-a:hover+.img-shade{
        opacity: 1;
        transition: opacity 0.5s;
    }
    .img-shade{
        opacity: 0;
        width: 100%;
        height: 30px;
        position: absolute;
        top: 5px;
        text-align: right;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 10px 10px 10px 1px black inset;
        /* background-image: linear-gradient(#bcbcbc, #ffffff);
         filter: basicImage(0.5);*/
    }
    .imgs-giveup{
        margin-right: 15px;
        color: white;
    }

</style>