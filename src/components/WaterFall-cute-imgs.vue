<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px;margin-bottom: 10px">
            <el-header style="padding-top: 10px">
                <el-col :span="3">
                    <!--                   头像插槽-->
                    <slot name="img-avatar"></slot>
                    <!--                    <el-avatar :size="40" :src="circleUrl"></el-avatar>-->
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
                <a href="" target="_blank">
                    <el-row :gutter="5" style="height: 300px;width: 95%;margin:0 auto">
                     <el-col :span="14" style="height: 100%">
                         <img src="16.jpg" alt="" class="imgs-width">
                     </el-col>
                     <el-col :span="10" style="height: 300px">
                        <div style="height: 48%;margin-bottom: 12px;overflow: hidden;border-radius: 5px">
                            <img src="20.jpg" alt="" class="cute-text-img">
                        </div>
                         <div style="height: 48%;margin-bottom: 10px;overflow:hidden;border-radius: 5px">
                             <img src="25.jpg" alt="" class="cute-text-img">
                         </div>
                     </el-col>
                    </el-row>



                </a>
            </div>

            <div style="text-align: left;width: 90%;margin: 5px auto;">
                <!--                文字插槽-->
                <slot name="img-content"></slot>
            </div>
            <div style="padding: 14px 14px 0px 14px;">
                <!-- 标签插槽-->
                <slot name="img-tags">

                </slot>
                <br>
                <ul class="img-ul">
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
                </ul>
            </div>
        </el-card>

    </div>
</template>

<script>
  export default {
    name: ""
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