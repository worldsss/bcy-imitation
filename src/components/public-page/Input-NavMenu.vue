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
<!--        <div v-if="$store.state.user.user_name!=''">-->
<!--        <div :class="isUserShow!=true?'display-none':''">-->
        <div :class="isUserShow!=true?'display-none':''">
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
        </div>
        <el-menu-item style="float: right;padding-left: 0px" @click="nowIsLogin()">
            <el-button type="danger" size="mini" style="background-color: #fb678b"  :class="isUserShow!=true?'display-none':''" v-popover:fabu>
                <i class="el-icon-edit-outline" style="color: white"></i>
                发布
            </el-button>
        </el-menu-item>
        <!--        消息-->
<!--        <div v-if="$store.state.user.user_name!=''">-->
        <div :class="isUserShow == false?'display-none':''">
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
        </div>
        <!--头像图标，当vuex中还没有用户信息时，不显示-->
<!--        <div v-if="$store.state.user.user_name!=''">-->
<!--        <div v-if="$store.state.user.user_name!=''">-->
        <div  :class="isUserShow==false?'display-none':''">
            <el-menu-item style="float: right;" v-popover:popo>
                <!--  <el-avatar :size="40" :src="$store.state.user.user_avatar">
                      &lt;!&ndash; 头像&ndash;&gt;
                  </el-avatar>-->

                <!--头像的popover-->

                <el-avatar :size="40" :src="$store.state.user.user_avatar">
                    <!-- 头像-->
                </el-avatar>

                <el-popover
                        ref="popo"
                        placement="bottom"
                        width="200"
                        trigger="hover"
                        visible-arrow="false"

                        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <!--                    :value="true"-->
                    <p style="text-align: center"> {{$store.state.user.user_name}}</p>
                    <el-divider></el-divider>
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <el-link :underline="false" :href="'/user-main/'+$store.state.user.uid">
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
                    <el-button style="width: 100%;" @click="outUser()">
                        退出账号
                    </el-button>
                </el-popover>

            </el-menu-item>
        </div>
        <!--        当vuex中没有数据时说明还没有登录，所以显示登录或注册-->
<!--        <div v-if="$store.state.user.user_name==''">-->
<!--        <div v-if="$store.state.user.user_name==''">-->
        <div  :class="isUserShow==true?'display-none':''">
            <el-menu-item style="float: right;">
                <el-link href="/user-register" :underline="false">注册</el-link>
            </el-menu-item>
            <el-menu-item style="float: right;">
                <el-link href="/user-login" :underline="false">登录</el-link>
            </el-menu-item>

        </div>

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
        messages: [],
        // recommend-page
        isUserShow:false,
        voiduser:{
          uid:0,
          user_name:'',
          user_avatar:'',
        },
      }
    },
    created() {
      //页面加载时，获取当前激活的路径作为激活状态
      this.activeIndex = this.$route.path
      if (this.$route.path == '/') {
        this.activeIndex = "/recommend-page"
      }

      axios.get("http://127.0.0.1:8090/getSessionUserInfo")
          .then(res =>{
            console.log("这里是session中的对象"+res.data)
            //把当前已经登录的用户的信息再存入vuex中
            if(res.data!=null && res.data!=''){
               this.isUserShow = true
              //vue不推荐直接把值赋值给state中的属性，而是使用方法的方式赋值，这样才是响应式的
              this.$store.commit('addUserName',res.data)
            }else {
              this.isUserShow = false
            }
          })

      // if()



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
      },
      nowIsLogin() {
        if (this.$store.state.user.user_name == '') {
          alert("只有登录后才能发布作品哦！")
          this.$router.push("/user-login")
        }
      },
      outUser(){

        //退出vuex的登录状态
        axios.get("http://127.0.0.1:8090/outUserSession")
             .then(res =>{
               this.$store.commit('outUser',this.voiduser)

              this.$router.go(0)
               alert("退出成功")
             })



      },

    }

  }
</script>

<style>
    /*scoped*/
    .my-test-left {
        text-align: left;
    }

    #mymenu .el-tabs__nav {
        width: 100%;

    }

    #mymenu .el-tabs__item {
        width: 50%;
        text-align: center;
    }

    #mymenu .el-tabs__active-bar {
        background-color: #ff6fa2;
    }

    #mymenu .el-tabs__item:hover {
        color: #ff6fa2;
    }

    #mymenu .el-tabs__item.is-active {
        color: #ff6fa2;
    }

    /*  #mymenu .el-radio__input.is-checked .el-radio__inner{
          background-color: #ff6fa2 !important;
          border-color: #ff6fa2 !important;
      }
      #mymenu .el-radio__input.is-checked+.el-radio__label{
          color: #ff6fa2 !important;

      }*/
    .my-a-color {
        text-decoration: none;
        color: black;
    }

    .my-message-li {
        margin: 5px 0px;
        padding: 10px 0px;
        border-bottom: 1px solid #e6e6e6;
    }

    .my-message-li:hover {
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

<style scoped>
    .display-none{
        display: none;
        opacity: 0;
    }


</style>