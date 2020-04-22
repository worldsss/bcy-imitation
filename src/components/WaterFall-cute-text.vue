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
            <div style="width: 90%;height: 200px;margin: 5px auto;border-radius: 10px; overflow: hidden">
                <a href="" target="_blank">
                    <!-- 图片插槽-->
                    <slot name="img"></slot>
                </a>
            </div>
            <!--标题插槽-->
            <div style="width: 90%;margin: 0 auto">
                <h3>
                    <slot name="img-title"></slot>
                </h3>
            </div>

<!--            内容插槽-->
            <div style="text-align: left;width: 90%;margin: 5px auto;" class="index-text">
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

<style>
    .index-text img{
        display: none !important;
    }
    .time {
        font-size: 13px;
        color: #999;

    }

    .fixedlunbo {
        width: 22%;
        position: fixed;
        top: 20px;
    }

    .cute-img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .cute-text-img {
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        position: relative;
        bottom: 25%;
        border-radius: 10px;
    }


    .lunbo-big {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .lunbo-small {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }
</style>