<template>
    <div>
        <page-tags v-for="(item,index) in rankinto" :rankbackcolor="item.back">
            <img slot="img"
                 :src="item.img"
                 class="image-small">
            <el-avatar slot="avatar" :size="30"
                       :src="item.avator"
                       style="float: left"></el-avatar>
            <span slot="name">
                {{item.name}}
            </span>
            <span slot="img-counts">
                {{item.counts}}
            </span>
            <span slot="img-giveup">
                {{item.giveup}}
            </span>
        </page-tags>

        <!-- <page-tags>
             <img slot="img"
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image-small">
             <el-avatar slot="avatar" :size="30"
                        :src="circleUrl"
                        style="float: left"></el-avatar>
             <span slot="name">用户姓名</span>
         </page-tags>
         <page-tags>
             <img slot="img"
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image-small">
             <el-avatar slot="avatar" :size="30"
                        :src="circleUrl"
                        style="float: left"></el-avatar>
             <span slot="name">用户姓名</span>
         </page-tags>-->

    </div>
</template>

<script>
  import PageTags from '../public-page/Page-Tags'

  export default {
    name: "",
    components: {
      PageTags
    },
    props: {
      rankinto: {
        type: Array,
        default() {
          return [
            {img: '23.jpg', avator: '3.jpg', name: '用户1',counts:1,giveup:1200,back:'background-color:#fa5757'},
            {img: '16.jpg', avator: '3.jpg', name: '用户2',counts:2,giveup:100,back:'background-color:#ffa008'},
            {img: '33.jpg', avator: '3.jpg', name: '用户3',counts:3,giveup:2543,back:'background-color:#fa5757'},
          ]
        }
      },
      rankbackcolor:{
        type:String,
        default:'background-color:#a1a1a6'
      }
    },
    data() {
      return {
        ranks: [
          {img: '2.jpg', avator: '3.jpg', name: '用户1'},
          {img: '2.jpg', avator: '3.jpg', name: '用户2'},
          {img: '2.jpg', avator: '3.jpg', name: '用户3'},
        ]
      }
    }
  }
</script>

<style scoped>
    .image-small {
        width: 100%;
        /*display: block;*/
        height: 250px;
        border-radius: 10px;
    }
/*

    .image-small:hover{

        !*caret-shape: 100px 0px  10px 5px black ;*!
        transition: filter 2s;
        filter: brightness(0.5);

    }
*/

    .imgs-a {
        width: 100%;
        display: block;
        height: 250px;
    }

</style>