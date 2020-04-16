<template>
    <el-collapse>
        <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <br>

        <div style="padding-top: 0px" :class="{'fixedlunbo':isFixed}" id="so">
            <div @change="handleScroll">
                <div :class="{'fixedlunbo':isFixed}">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我关注的圈子</span>
                            <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                            <el-row :gutter="10" style="line-height: 30px">
                                <el-col :span="2">
                                    <el-link :underline="false">
                                        <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>
                                    </el-link>
                                </el-col>
                                <el-col :span="16">
                                    <el-link> {{'列表内容 ' + o }}</el-link>

                                </el-col>
                                <el-col :span="6">
                                    <span style="float: right;opacity: 0.6;">6分钟前</span>
                                </el-col>
                            </el-row>
                        </div>
                        <br>
                        <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                    </el-card>
                    <br>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我关注的用户</span>
                            <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                            <el-row :gutter="10" style="line-height: 30px">
                                <el-col :span="2">
                                    <el-link :underline="false">
                                        <el-avatar shape="circle" :size="20" :src="squareUrl"></el-avatar>
                                    </el-link>
                                </el-col>
                                <el-col :span="17">
                                    <el-link> {{'列表内容 ' + o }}</el-link>

                                </el-col>
                            </el-row>
                        </div>
                        <br>
                        <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                    </el-card>

                    <p>
                        © 2020 bcy.net 版权所有

                        ICP证：浙ICP备14021595号-1

                        浙网文[2014]0701-051号

                        浙公网安备 33010802002901号
                        信息产业部备案管理系统
                        浙江省互联网违法和不良信息举报中心
                        12318全国文化市场举报网站

                        关于我们·商务合作

                        举报指引·营业执照

                        帮助中心·知乎
                    </p>
                </div>


            </div>

        </div>

    </el-collapse>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>