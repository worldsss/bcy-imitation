<template>
    <!--    @select="handleSelect"-->
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             :class="{'fixedMenu':isFixed}"
             :router="true"
             active-text-color="#fb678b">
        <el-menu-item>
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656495429,2926291651&fm=15&gp=0.jpg"
                 width="150" height="50" alt="">
        </el-menu-item>
        <el-menu-item index="/recommend-page">推荐</el-menu-item>
        <el-menu-item index="/attention-page">关注</el-menu-item>
        <el-menu-item index="/ranking-page">榜单</el-menu-item>
        <el-menu-item index="/img-page">绘画</el-menu-item>
        <el-menu-item index="/cospage-page">COS</el-menu-item>
        <el-menu-item index="/write-page">写作</el-menu-item>
        <el-menu-item index="/question-page">问答</el-menu-item>

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
                    <img slot="link-img"
                         src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
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
<!--            <router-link to="/img-input">-->
            <router-link to="/imgs-input">

                <input-link-button>
                    <img slot="link-img"
                         src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                         alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">图片</span>
                    <span slot="link-info">小说，漫评，段子，文章，碎碎念</span>

                </input-link-button>

            </router-link>

            <router-link to="/question-input">
                <input-link-button>
                    <img slot="link-img"
                         src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389260568,2254331704&fm=26&gp=0.jpg"
                         alt="" style="width: 100%;height: 100%;margin: 10px">
                    <span slot="link-name">问答</span>
                    <span slot="link-info">如何评论？如何反驳？为什么讨厌</span>

                </input-link-button>
            </router-link>

        </el-popover>
        <el-menu-item style="float: right;padding-left: 0px">
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
                    placement="bottom-start"
                    width="300"
                    trigger="click"
                    visible-arrow="false"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">

                <el-tabs v-model="activeName" id="mymenu">
                    <el-tab-pane label="消息" name="ones">
                        <ul style="padding: 0">
                            <a href="/user-message" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-chat-line-square"></i>
                                    消息
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        10
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-news"></i>
                                    提醒
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        10
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-postcard"></i>
                                    公告
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        3
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-connection"></i>
                                    新粉丝
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        3
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-folder-add"></i>
                                    合集更新
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        3
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-message"></i>
                                    私信
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        3
                                    </el-avatar>

                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <i class="el-icon-lollipop"></i>
                                    勾搭
                                    <el-avatar :size="15" style="background-color: #ff6fa2;float: right">
                                        3
                                    </el-avatar>

                                </li>
                            </a>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="问答" name="second">
                        <ul style="padding: 0">
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <span>第一次穿c服被爸妈看到怎么办？</span>
                                    <span style="float: right;color: #ff6fa2">+562</span>
                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <span>第一次穿c服被爸妈看到怎么办？</span>
                                    <span style="float: right;color: #ff6fa2">+562</span>
                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <span>第一次穿c服被爸妈看到怎么办？</span>
                                    <span style="float: right;color: #ff6fa2">+562</span>
                                </li>
                            </a>
                            <a href="#" class="my-a-color">
                                <li class="my-message-li">
                                    <span>第一次穿c服被爸妈看到怎么办？</span>
                                    <span style="float: right;color: #ff6fa2">+562</span>
                                </li>
                            </a>
                        </ul>
                        <el-link style="float: right">查看全部></el-link>
                    </el-tab-pane>
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
                        <el-link :underline="false" href="/user-setting">
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
    components: {
      InputLinkButton
    },
    data() {
      return {
        activeName: 'ones',
        activeIndex: '/',
        isFixed: false,
        messages:[],
        // recommend-page
      }
    },
    created() {
      //页面加载时，获取当前激活的路径作为激活状态
      this.activeIndex = this.$route.path
      if (this.$route.path == '/') {
        this.activeIndex = "/recommend-page"
      }
    },
    beforeRouteLeave(to, from, next) {

      console.log(this.$route.path.path)
      this.activeIndex = this.$route.path
      next()
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 10) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }
    }

  }
</script>

<style>
    /*scoped*/
    .my-test-left {
        text-align: left;
    }
    #mymenu .el-tabs__nav{
      width: 100%;

    }
    #mymenu .el-tabs__item{
        width: 50%;
        text-align: center;
    }
    #mymenu .el-tabs__active-bar{
        background-color: #ff6fa2;
    }
    #mymenu .el-tabs__item:hover{
        color: #ff6fa2;
    }
    #mymenu .el-tabs__item.is-active{
        color: #ff6fa2;
    }
  /*  #mymenu .el-radio__input.is-checked .el-radio__inner{
        background-color: #ff6fa2 !important;
        border-color: #ff6fa2 !important;
    }
    #mymenu .el-radio__input.is-checked+.el-radio__label{
        color: #ff6fa2 !important;

    }*/
    .my-a-color{
        text-decoration: none;
        color: black;
    }
    .my-message-li{
        margin: 5px 0px;
        padding: 10px 0px;
        border-bottom: 1px solid #e6e6e6;
    }
    .my-message-li:hover{
        color: #ff6fa2;
    }
    .el-menu-item:hover {
        color: #ff6fa2 !important;
    }

    .fixedMenu {
        width: 100%;
        position: fixed !important;
        top: 0px;
        z-index: 1000000;
    }


</style>