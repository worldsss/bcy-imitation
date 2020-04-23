<template>
    <div>
     <!--   <water-fall-imgs v-for="(item,index) in WaterImgs" :img-links="imgLinks">
            <el-avatar :size="40" :src="item.ImgsAvator" slot="img-avatar"></el-avatar>
            <strong slot="img-name">
                {{item.ImgsName}}
            </strong>
            <span slot="img-text">
                {{item.ImgsText}}
            </span>

            <img v-for="(item1,index1) in item.Imgs"  :slot="index1" :src="item1" alt="" class="imgs-width">

&lt;!&ndash;            <img slot="0" src="3.jpg" alt="" class="imgs-width">&ndash;&gt;

          &lt;!&ndash;  <div v-for="(item1,index) in item.Imgs">

                <img :slot="index" :src="item1"  alt="">

              &lt;!&ndash;  <slot name="imgs02"></slot>
                <slot name="imgs03"></slot>&ndash;&gt;
            </div>
&ndash;&gt;
            <span slot="img-collect">
                {{item.ImgsCollect}}
            </span>
            <span slot="img-go">
                {{item.ImgsGO}}
            </span>
            <span slot="img-comment">
                {{item.ImgsComment}}
            </span>
            <span slot="img-click">
                {{item.ImgsClick}}
            </span>
        </water-fall-imgs>

-->



        <water-fall-imgs v-for="(item,index) in WaterImgs" :img-links="imgLinks">
            <el-avatar :size="40" :src="item.ImgsAvator" slot="img-avatar"></el-avatar>
            <strong slot="img-name">
                {{item.ImgsName}}
            </strong>
            <span slot="img-text">
                {{item.ImgsText}}
            </span>

            <img v-for="(item1,index1) in item.Imgs"  :slot="index1" :src="item1" alt="" class="imgs-width">

            <span slot="img-collect">
                {{item.ImgsCollect}}
            </span>
            <span slot="img-go">
                {{item.ImgsGO}}
            </span>
            <span slot="img-comment">
                {{item.ImgsComment}}
            </span>
            <span slot="img-click">
                {{item.ImgsClick}}
            </span>
        </water-fall-imgs>
    </div>
</template>

<script>
    import WaterFallImgs from '../WaterFall-cute-imgs'

  export default {
    name: "",
    components:{
      WaterFallImgs
    },
    props:{
      WaterImgs:{
        type:Array,
        default(){
          return [
            {ImgsAvator:'3.jpg',ImgsName:'用户1',ImgsText:'哈哈哈1',Imgs:['7.jpg','8.jpg','9.jpg'],ImgsCollect:125,ImgsGO:241,ImgsComment:784,ImgsClick:25,ImgsLink:'http://www.baidu.com'},
            {ImgsAvator:'4.jpg',ImgsName:'用户2',ImgsText:'哈哈哈2',Imgs:['7.jpg','8.jpg','9.jpg'],ImgsCollect:125,ImgsGO:241,ImgsComment:784,ImgsClick:25,ImgsLink:'http://www.baidu.com'},
            {ImgsAvator:'5.jpg',ImgsName:'用户3',ImgsText:'哈哈哈3',Imgs:['7.jpg','8.jpg','9.jpg'],ImgsCollect:125,ImgsGO:241,ImgsComment:784,ImgsClick:25,ImgsLink:'http://www.baidu.com'},
            {ImgsAvator:'6.jpg',ImgsName:'用户4',ImgsText:'哈哈哈4',Imgs:['7.jpg','8.jpg','9.jpg'],ImgsCollect:125,ImgsGO:241,ImgsComment:784,ImgsClick:25,ImgsLink:'http://www.baidu.com'},
          ]
        }
      },
      imgLinks:''
    }
  }
</script>

<style scoped>
    .imgs-width{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .cute-text-img {
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        position: relative;
        bottom: 25%;
        border-radius: 5px;
    }

</style>