<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px;margin-bottom: 10px">
            <el-header style="padding-top: 10px">
                <el-col :span="3">
                    <!--   头像插槽-->
                    <slot name="img-avatar"></slot>
                    <!-- <el-avatar :size="40" :src="circleUrl"></el-avatar>-->
                </el-col>
                <el-col :span="5">
                    <p style="margin-top: 10px">
                        <!-- 姓名插槽-->
                        <slot name="img-name"></slot>
                    </p>
                </el-col>

            </el-header>
            <p style="text-align: left;width: 90%;margin: 5px auto">
                <slot name="img-text"></slot>
            </p>
            <div>
                <!--
                     <slot name="img-link">
                     <a :href="imgLinks" target="_blank">
                         <el-row :gutter="5" style="height: 300px;width: 95%;margin:0 auto">
                             <el-col :span="14" style="height: 100%">
                             <el-col :span="14" style="height: 100%">
                                  <img src="16.jpg" alt="" class="imgs-width">
                                 <slot name="0"></slot>
                             </el-col>
                             <el-col :span="10" style="height: 300px">
                                 <div style="height: 48%;margin-bottom: 12px;overflow: hidden;border-radius: 5px">
                                     <slot name="1"></slot>
                                      <img src="20.jpg" alt="" class="cute-text-img">
                                 </div>
                                 <div style="height: 48%;margin-bottom: 10px;overflow:hidden;border-radius: 5px">
                                     <slot name="2"></slot>
                                       <img src="25.jpg" alt="" class="cute-text-img">
                                 </div>
                             </el-col>
                         </el-row>
                     </a>
                     </slot>
     -->

            </div>

            <!--

                        <a href="#" target="_blank">
                            <div class="img-cute">
            &lt;!&ndash;                    <div :class="imgThree==true?img-three-left:imgTwo==true?img-two-left:img-one">&ndash;&gt;
                                <div :class="imgThree==true?'img-three-left':imgTwo==true?'img-two-left':img-one">
                                    <slot name="0"></slot>
                                    &lt;!&ndash; <el-image></el-image>&ndash;&gt;
                                </div>
                                <div class="img-three-cute">
                                    <div class="img-three-right-top">
                                        <slot name="1"></slot>
                                        &lt;!&ndash;<el-image></el-image>&ndash;&gt;
                                    </div>
                                    <div class="img-three-right-bottom">
                                        <slot name="2"></slot>

                                        &lt;!&ndash; <el-image></el-image>&ndash;&gt;
                                    </div>
                                </div>
                            </div>
                        </a>

            -->


            <!--  <a href="#" target="_blank">
                  <div :class="imgThree==true?'img-cute':'img-two-cute'">
                      &lt;!&ndash;                    <div :class="imgThree==true?img-three-left:imgTwo==true?img-two-left:img-one">&ndash;&gt;
                      <div :class="imgThree==true?'img-three-left':imgTwo==true?'img-two-left':img-one">
                          <slot name="0"></slot>
                          &lt;!&ndash; <el-image></el-image>&ndash;&gt;
                      </div>
                      <div :class="imgThree==true?'img-three-cute':imgTwo==true?'img-two-right':''">
                          <div :class="imgThree==true?'img-three-right-top':imgTwo==true?'img-two-right-img':''" v-show="!imgOne">
                              <slot name="1"></slot>
                              &lt;!&ndash;<el-image></el-image>&ndash;&gt;
                          </div>
                          <div class="img-three-right-bottom" v-show="imgThree">
                              <slot name="2" v-show="imgThree"></slot>

                              &lt;!&ndash; <el-image></el-image>&ndash;&gt;
                          </div>
                      </div>
                  </div>
              </a>
-->


            <!--最高杰作，根据不同的数字来判断显示几个图片-->
          <!--  <a href="#" target="_blank">
                <div :class="imgCount==3?'img-cute':'img-two-cute'">
                    <div :class="imgCount==3?'img-three-left':imgCount==2?'img-two-left':'img-one'">
                        <slot name="0"></slot>
                    </div>
                    <div :class="imgCount==3?'img-three-cute':imgCount==2?'img-two-right':''">
                        <div :class="imgCount==3?'img-three-right-top':imgCount==2?'img-two-right-img':''"
                             v-if="imgCount!=1">
                            <slot name="1"></slot>
                        </div>
                        <div class="img-three-right-bottom" v-if="imgCount==3">
                            <slot name="2" v-if="imgCount==3"></slot>
                        </div>
                    </div>
                </div>
            </a>
-->
            <!--最高杰作，根据不同的数字来判断显示几个图片-->
         <!--   <a href="#" target="_blank">
                <div :class="imgCount==3?'img-cute':imgCount==2?'img-two-cute':'img-one-cute'">
                    <div :class="imgCount==3?'img-three-left':imgCount==2?'img-two-left':'img-one'">
                        <slot name="0"></slot>
                    </div>
                    <div :class="imgCount==3?'img-three-cute':imgCount==2?'img-two-right':''">
                        <div :class="imgCount==3?'img-three-right-top':imgCount==2?'img-two-right-img':''"
                             v-if="imgCount!=1">
                            <slot name="1"></slot>
                        </div>
                        <div class="img-three-right-bottom" v-if="imgCount==3">
                            <slot name="2" v-if="imgCount==3"></slot>
                        </div>
                    </div>
                </div>
            </a>
-->


            <!--最高杰作，根据不同的数字来判断显示几个图片-->
            <a href="#" target="_blank">
                <div :class="imgCount>=3?'img-cute':imgCount==2?'img-two-cute':'img-one-cute'">
                    <div :class="imgCount>=3?'img-three-left':imgCount==2?'img-two-left':'img-one'">
                        <slot name="0"></slot>
                    </div>
                    <div :class="imgCount>=3?'img-three-cute':imgCount==2?'img-two-right':''">
                        <div :class="imgCount>=3?'img-three-right-top':imgCount==2?'img-two-right-img':''"
                             v-if="imgCount!=1">
                            <slot name="1"></slot>
                        </div>
                        <div class="img-three-right-bottom" v-if="imgCount>=3">
                            <slot name="2" v-if="imgCount>=3"></slot>
                        </div>
                    </div>
                </div>
            </a>


            <!-- 两种图片的情况-->
            <!-- <a href="#" target="_blank">
                 <div class="img-two-cute">
                     <div class="img-two-left">
                         <slot name="0"></slot>
                     </div>
                     <div class="img-two-right">
                         <div class="img-two-right-img">
                             <slot name="1"></slot>
                         </div>
                     </div>
                 </div>
             </a>-->

            <!-- 一种图片的情况-->
            <!-- <a href="#" target="_blank">
                 <div class="img-one">
                     <div class="">
                         <slot name="0"></slot>
                     </div>

                 </div>
             </a>-->

            <br><br>
            <!--

                        <br><br>
                        <div style="width: 100%;height: 200px">
                            <div style="width: 50%;float: left">
                                哈哈哈
                            </div>
                            <div style="width: 50%;float: right">
                                哈哈哈
                            </div>
                        </div>
            -->


            <!--  <div style="text-align: left;width: 90%;margin: 5px auto;">
                  &lt;!&ndash;                文字插槽&ndash;&gt;
                  <slot name="img-content"></slot>
              </div>-->
           <!-- <el-button slot="img-tags"
                       type="info"
                       size="mini"
                       :plain="true"
                       :autofocus="false" v-for="(item2,index) in item.imgTags">
                {{item2}}
            </el-button>-->
            <slot name="img-tags"></slot>

            <el-row :gutter="10" style="width: 90%;margin: 0 auto;text-align: center">
                <el-col :span="6">
                    <el-link icon="el-icon-star-off" :underline="false" type="info">
                        <slot name="img-collect"></slot>
                    </el-link>
                </el-col>
                <el-col :span="6">
                    <el-link icon="el-icon-position" :underline="false" type="info">
                        <slot name="img-go"></slot>
                    </el-link>
                </el-col>
                <el-col :span="6">
                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">
                        <slot name="img-comment"></slot>
                    </el-link>
                </el-col>
                <el-col :span="6">
                    <el-link icon="el-icon-view" :underline="false" type="info">
                        <slot name="img-click"></slot>
                    </el-link>
                </el-col>
            </el-row>


            <div style="padding: 14px 14px 0px 14px;">
                <!-- 标签插槽-->
                <!-- <slot name="img-tags">

                 </slot>-->
                <!--                <br>-->


                <!--  <ul class="img-ul">
                      <li class="img-li">
                          <el-link icon="el-icon-star-off" :underline="false" type="info">
                              <slot name="img-collect"></slot>
                          </el-link>
                      </li>
                      <li class="img-li">
                          <el-link icon="el-icon-position" :underline="false" type="info">
                              <slot name="img-go"></slot>
                          </el-link>
                      </li>
                      <li class="img-li">
                          <el-link icon="el-icon-chat-line-round" :underline="false" type="info">
                              <slot name="img-comment"></slot>
                          </el-link>
                      </li>
                      <li class="img-li">
                          <el-link icon="el-icon-view" :underline="false" type="info">
                              <slot name="img-click"></slot>
                          </el-link>

                      </li>
                  </ul>-->
            </div>
        </el-card>

    </div>
</template>

<script>
  export default {
    name: "",
    props: {
      imgLinks: {
        type: String,
        default: 'http://www.baidu.com'
      },
      imgSpan: {
        type: String,
        default: '14'
      },
      imgCount: {
        type: Number,
        default: 3
      },
      /*  imgTwo: {
          type: Boolean,
          default: false
        },
        imgThree: {
          type: Boolean,
          default: true
        }*/
    }
  }
</script>

<style scoped>

    /*整个图片的容器*/
    .img-cute {
        width: 95%;
        margin: 0 auto;
        height: 325px;
        clear: both
    }
    /*两个图片的容器*/
    .img-two-cute {
        width: 95%;
        margin: 0 auto;
        height: 255px;
        clear: both
    }
    /*一张图片的容器*/
    .img-one-cute{
        width: 95%;
        margin: 0 auto;
        height: auto;
    }



    .img-one {
        width: 100%;
        height: 100%;

    }

    .img-two-right-img {
        height: 100%;
    }

    .img-two-none {
        display: none;
    }

    .img-two-left {
        width: 49%;
        float: left;
        height: 255px;
    }

    .img-two-right {
        width: 49%;
        float: right;
        height: 255px;
    }

    .img-three-left {
        width: 60%;
        height: 325px;
        float: left
    }

    .img-three-cute {
        width: 39%;
        height: 320px;
        float: right
    }

    .img-three-right-top {
        height: 160px;
        margin-bottom: 5px
    }

    .img-three-right-bottom {
        height: 160px
    }


    .imgs-width {
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

    .img-ul {
        width: 90%;
        height: 30px;
        margin: 10px auto;
        display: block;
    }

    .img-li {
        width: 25%;
        height: 20px;
        line-height: 20px;
        float: left;
        list-style: none;

    }

</style>