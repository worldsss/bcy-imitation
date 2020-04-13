<template>
    <div>
        <el-container><!--style="border-bottom: 1px solid #e6e6e6"-->
            <el-header>
              <!--  <el-menu :default-active="activeIndex"
                         router="true"
                         class="el-menu-demo"
                         style="width: 80%;margin: 0 auto;height: 59px;"
                         mode="horizontal"
                         active-text-color="#fb678b"
                         @select="handleSelect">
                    <el-menu-item style="padding-left: 0">
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656495429,2926291651&fm=15&gp=0.jpg"
                             width="150" height="50" alt="">
                    </el-menu-item>
                    <el-menu-item index="/">推荐</el-menu-item>
                    <el-menu-item index="/attention-page">关注</el-menu-item>
                    <el-menu-item index="/ranking-page">榜单</el-menu-item>
                    <el-menu-item index="/img-page">绘画</el-menu-item>
                    <el-menu-item index="6">COS</el-menu-item>
                    <el-menu-item index="7">写作</el-menu-item>
                    <el-menu-item index="8">问答</el-menu-item>
                    <el-menu-item style="float: right;padding:0px 0px 0px 5px" v-popover:inputs>
                        <el-button type="danger" size="mini" style="background-color: #fb678b">
                            <i class="el-icon-edit-outline" style="color: white"></i>
                            发布
                        </el-button>
                    </el-menu-item>


                    <el-popover
                            ref="inputs"
                            placement="bottom-start"
                            width="300px"
                            trigger="hover"
                            content="测试测试测试">
                        <router-link to="/img-input">
                            <el-button style="width: 100%;padding:5px;background-color: #f5f6f7">
                                <el-row>
                                    <el-col :span="5">
                                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                                             alt="" style="width: 100px;height: 100px;margin: 10px">
                                    </el-col>
                                    <el-col :span="12" style="margin-left: 20px">
                                        <p class="my-test-left">图片</p>
                                        <p style="opacity: 0.5">绘画，cos，手办,汉服，表情包</p>
                                    </el-col>
                                </el-row>
                            </el-button>

                        </router-link>
                        <router-link to="/test-input">
                            <br>
                            <el-button style="width: 100%;padding:5px;background-color: #f5f6f7">
                                <el-row>
                                    <el-col :span="5">
                                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                                             alt="" style="width: 100%;height: 100%;margin: 10px">
                                    </el-col>
                                    <el-col :span="12" style="margin-left: 20px">
                                        <p class="my-test-left">图片</p>
                                        <p style="opacity: 0.5">绘画，cos，手办,汉服，表情包</p>
                                    </el-col>
                                </el-row>
                            </el-button>
                        </router-link>


                    </el-popover>


                    <el-menu-item style="float: right;padding: 0">
                        <el-input
                                placeholder="搜索cos,绘画,文字.."
                                suffix-icon="el-icon-search"
                                size="medium"
                                v-model="input1">
                        </el-input>
                    </el-menu-item>

                </el-menu>-->
                <!--

                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         router="true">
                    <el-menu-item>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656495429,2926291651&fm=15&gp=0.jpg"
                             width="150" height="50" alt="">
                    </el-menu-item>
                    <el-menu-item index="/">推荐</el-menu-item>
                    <el-menu-item index="/attention-page">关注</el-menu-item>
                    <el-menu-item index="/ranking-page">榜单</el-menu-item>
                    <el-menu-item index="/img-page">绘画</el-menu-item>
                    <el-menu-item index="6">COS</el-menu-item>
                    <el-menu-item index="7">写作</el-menu-item>
                    <el-menu-item index="8">问答</el-menu-item>

                    &lt;!&ndash;        发布按钮的popover&ndash;&gt;
                    <el-popover
                            ref="fabu"
                            placement="bottom-start"
                            width="300"
                            trigger="click"
                            visible-arrow="false"
                            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                        <router-link to="/img-input">
                            <el-button style="width: 100%;padding:5px;background-color: #f5f6f7">
                                <el-row>
                                    <el-col :span="5">
                                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                                             alt="" style="width: 100%;height: 100%;margin: 10px">
                                    </el-col>
                                    <el-col :span="12" style="margin-left: 20px">
                                        <p class="my-test-left">图片</p>
                                        <p style="opacity: 0.5">绘画，cos，手办,汉服，表情包</p>
                                    </el-col>
                                </el-row>
                            </el-button>
                        </router-link>

                        <router-link to="/test-input">

                            <br>
                            <el-button style="width: 100%;padding:5px;background-color: #f5f6f7">
                                <el-row>
                                    <el-col :span="5">
                                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                                             alt="" style="width: 100%;height: 100%;margin: 10px">
                                    </el-col>
                                    <el-col :span="12" style="margin-left: 20px">
                                        <p class="my-test-left">图片</p>
                                        <p style="opacity: 0.5">绘画，cos，手办,汉服，表情包</p>
                                    </el-col>
                                </el-row>
                            </el-button>

                        </router-link>


                    </el-popover>
                    <el-menu-item style="float: right;padding-left: 5px">
                        <el-button type="danger" size="mini" style="background-color: #fb678b" v-popover:fabu>
                            <i class="el-icon-edit-outline" style="color: white"></i>
                            发布
                        </el-button>
                    </el-menu-item>
                    &lt;!&ndash;        消息&ndash;&gt;
                    <el-menu-item style="float: right;">
                        <el-badge is-dot class="item" v-popover:infor>
                            <i class="el-icon-bell"></i>
                        </el-badge>
                        <el-popover
                                ref="infor"
                                placement="bottom"
                                width="200"
                                trigger="click"
                                visible-arrow="false"
                                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">

                            <el-tabs v-model="avtiveName">
                                <el-tab-pane label="消息" name="first">
                                    &lt;!&ndash; <p><i class="el-icon-s-comment"></i>消息</p>
                                     <el-divider></el-divider>&ndash;&gt;

                                    <el-row :gutter="10">

                                        <el-col :span="20">
                                            <p style="border-bottom: 1px solid #f3f3f3;margin: 0">
                                                <el-button type="text"
                                                           style="width: 100%;display: block;text-align: left;font-size: 16px;color:#333333 ">
                                                    <i class="el-icon-s-comment"></i>&nbsp;消息
                                                </el-button>
                                            </p>
                                        </el-col>
                                        <el-col :span="4">
                                            &lt;!&ndash;                           <button style="width: 30px;height: 30px;border-radius: 50%;background-color:#ff6fa2 ">1</button>&ndash;&gt;
                                            <el-button type="danger" size="mini" style="margin-top: 5px" circle="true"></el-button>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="10">

                                        <el-col :span="20">
                                            <p style="border-bottom: 1px solid #f3f3f3;margin: 0">
                                                <el-button type="text"
                                                           style="width: 100%;display: block;text-align: left;font-size: 16px;color:#333333 ">
                                                    <i class="el-icon-s-comment"></i>&nbsp;消息
                                                </el-button>
                                            </p>
                                        </el-col>
                                        <el-col :span="4">
                                            &lt;!&ndash;                           <button style="width: 30px;height: 30px;border-radius: 50%;background-color:#ff6fa2 ">1</button>&ndash;&gt;
                                            <el-button type="danger" size="mini" style="margin-top: 5px" circle="true"></el-button>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane label="问答" name="second">问答</el-tab-pane>
                            </el-tabs>


                        </el-popover>

                    </el-menu-item>
                    &lt;!&ndash;        头像图标&ndash;&gt;
                    <el-menu-item style="float: right;" v-popover:popo>
                        <el-avatar :size="40"
                                   :src="circleUrl">
                            头像
                        </el-avatar>

                        &lt;!&ndash;            头像的popover&ndash;&gt;
                        <el-popover
                                ref="popo"
                                placement="bottom"
                                width="200"
                                trigger="hover"
                                visible-arrow="false"

                                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                            &lt;!&ndash;                    :value="true"&ndash;&gt;
                            <p style="text-align: center">用户名称</p>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-s-home"></i>
                                        个人主页
                                    </el-link>
                                </el-col>
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-s-tools"></i>
                                        设置
                                    </el-link>
                                </el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-s-management"></i>
                                        我的作品
                                    </el-link>
                                </el-col>
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-lollipop"></i>
                                        投喂管理
                                    </el-link>
                                </el-col>
                            </el-row>
                            <br>
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-s-unfold"></i>
                                        我的合集
                                    </el-link>
                                </el-col>
                                <el-col :span="12">
                                    <el-link :underline="false">
                                        <i class="el-icon-s-order"></i>
                                        订单管理
                                    </el-link>
                                </el-col>
                            </el-row>
                            <br>
                            <el-button style="width: 100%;">
                                退出账号
                            </el-button>
                        </el-popover>

                    </el-menu-item>
                    <el-menu-item style="float: right;padding: 0">
                        <el-input
                                placeholder="搜索cos,绘画,文字.."
                                suffix-icon="el-icon-search"
                                size="medium"
                                v-model="input1">
                        </el-input>
                    </el-menu-item>

                </el-menu>
-->
                <navs></navs>
            </el-header>
            <el-main style="width: 80%;margin: 0 auto;">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                <div style="width: 100%;margin: 5px auto;height: 60px;text-align: center;border: 1px solid #e6e6e6;border-radius: 10px">
                    <el-menu :default-active="activeIndex"
                             class="el-menu-demo"
                             style="width: 50%;margin: 0 auto;height: 60px;text-align: center"
                             mode="horizontal"
                             active-text-color="#fb678b"
                             @select="handleSelect">
                        <el-menu-item index="1">推荐</el-menu-item>
                        <el-menu-item index="2">关注</el-menu-item>
                        <el-menu-item index="3">榜单</el-menu-item>
                        <el-menu-item index="4">视频</el-menu-item>
                        <el-menu-item index="5">绘画</el-menu-item>
                        <el-menu-item index="6">COS</el-menu-item>
                        <el-menu-item index="7">写作</el-menu-item>
                        <el-menu-item index="8">问答</el-menu-item>

                    </el-menu>
                </div>


<!--                下面是不同的组件的代码-->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import Vue from 'vue'
    import InputNav from '../components/public-page/Input-NavMenu'

    Vue.component("navs",InputNav)
    export default {
        name: "Index",
        data() {
            return {
                input1: '',
                activeIndex: '/',
            }
        },
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    /*  .el-menu.el-menu--horizontal {
          border: 0px !important;
      }*/

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item {
        border-radius: 10px;
    }
</style>