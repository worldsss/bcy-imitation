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
            <div style="text-align: left;width: 90%;margin: 5px auto;">
              <slot name="img-content"></slot>
            </div>

            <div style="padding: 14px 14px 0px 14px;">




                <!-- 标签插槽-->
                <slot name="img-tags">

                </slot>
                <br>
                <ui class="img-ul">
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
                </ui>
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

</style>