<template>
<!--    @select="handleSelect"-->
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"

             :router="true"
             active-text-color="#fb678b">
        <el-menu-item>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656495429,2926291651&fm=15&gp=0.jpg"
                 width="150" height="50" alt="">
        </el-menu-item>
        <el-menu-item index="/">推荐</el-menu-item>
        <el-menu-item index="/attention-page">关注</el-menu-item>
        <el-menu-item index="/ranking-page">榜单</el-menu-item>
        <el-menu-item index="/img-page">绘画</el-menu-item>
        <el-menu-item index="/cospage-page">COS</el-menu-item>
        <el-menu-item index="/write-page">写作</el-menu-item>
        <el-menu-item index="8">问答</el-menu-item>

        <!--        发布按钮的popover-->
        <el-popover
                ref="fabu"
                placement="bottom-start"
                width="300"
                trigger="hover"
                visible-arrow="false"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <router-link to="/test-input">
                <input-link-button>
                    <img  slot="link-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                         alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">文字</span>
                    <span slot="link-info">绘画，cos，手办,汉服，表情包</span>
                </input-link-button>
            </router-link>
            <!--<router-link to="/q-input">
                <input-link-button>
                    <img  slot="link-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                          alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">文字</span>
                    <span slot="link-info">绘画，cos，手办,汉服，表情包</span>
                </input-link-button>
            </router-link>-->
            <router-link to="/img-input">

                <input-link-button>
                    <img  slot="link-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                          alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">图片</span>
                    <span slot="link-info">小说，漫评，段子，文章，碎碎念</span>

                </input-link-button>

            </router-link>

            <router-link to="/question-input">
                <input-link-button>
                    <img  slot="link-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                          alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">问答</span>
                    <span slot="link-info">如何评论？如何反驳？为什么讨厌</span>

                </input-link-button>
            </router-link>

        </el-popover>
        <el-menu-item style="float: right;padding-left: 5px">
            <el-button type="danger" size="mini" style="background-color: #fb678b" v-popover:fabu>
                <i class="el-icon-edit-outline" style="color: white"></i>
                发布
            </el-button>
        </el-menu-item>
        <!--        消息-->
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
                        <!-- <p><i class="el-icon-s-comment"></i>消息</p>
                         <el-divider></el-divider>-->

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
                                <!--                           <button style="width: 30px;height: 30px;border-radius: 50%;background-color:#ff6fa2 ">1</button>-->
                                <el-button type="danger" size="mini" style="margin-top: 5px" :circle="true"></el-button>
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
                                <!--                           <button style="width: 30px;height: 30px;border-radius: 50%;background-color:#ff6fa2 ">1</button>-->
                                <el-button type="danger" size="mini" style="margin-top: 5px" :circle="true"></el-button>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="问答" name="second">问答</el-tab-pane>
                </el-tabs>


            </el-popover>

        </el-menu-item>
        <!--        头像图标-->
        <el-menu-item style="float: right;" v-popover:popo>
<!--            :src="circleUrl"-->
            <el-avatar :size="40"
                       >
                头像
            </el-avatar>

            <!--            头像的popover-->
            <el-popover
                    ref="popo"
                    placement="bottom"
                    width="200"
                    trigger="hover"
                    visible-arrow="false"

                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <!--                    :value="true"-->
                <p style="text-align: center">用户名称</p>
                <el-divider></el-divider>
                <el-row :gutter="10">
                    <el-col :span="12">
                        <el-link :underline="false" href="/user-main">
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
                    >
<!--            v-model="input1-->
            </el-input>
        </el-menu-item>

    </el-menu>
</template>

<script>
  import InputLinkButton from '../../components/Input-LinkButton'

  export default {
    name: "Input-NavMenu",
    components:{
      InputLinkButton
    },
    data() {
      return {
        avtiveName: 'first',
        activeIndex:'/'
        // recommend-page
      }
    },
    created() {
        this.activeIndex = this.$route.path
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path.path)
      this.activeIndex = this.$route.path
        next()
    }

  }
</script>

<style scoped>

    .my-test-left {
        text-align: left;
    }


</style>