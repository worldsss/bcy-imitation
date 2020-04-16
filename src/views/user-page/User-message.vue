<template>
    <div style="background-color: #f0f0f0">
        <input-nav></input-nav>

        <div style="" id="user-message">
            <br>
            <div style="width: 60%;margin: 0 auto">
                <el-tabs v-model="activeName" style="padding: 10px 30px">
                    <el-tab-pane label="消息" name="ones" style="">
                        <el-card>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="提醒" name="seconds" style="">
                        <el-card>
                            <ul style="padding: 0">
                                <a href="/user-message" class="my-a-color">
                                    <li class="my-message-li">
                                        <el-avatar :size="40" class="bcy-backgroud-color float-left">
                                            10
                                        </el-avatar>
                                        <p style="margin: 10px 0px 0px 10px;width: 80%;" class="float-left">
                                            你关注的
                                            <span>螺格</span>
                                            加入了季国艳保护协会，称为一名歌吹
                                            <span style="opacity: 0.5;">3天前</span>
                                        </p>
                                        <el-avatar shape="square" :size="35"
                                                   class="bcy-backgroud-color float-right" :src="squareUrl">

                                        </el-avatar>

                                    </li>
                                </a>
                                <a href="/user-message" class="my-a-color">
                                    <li class="my-message-li">
                                        <el-avatar :size="40" class="bcy-backgroud-color float-left">
                                            10
                                        </el-avatar>
                                        <p style="margin: 10px 0px 0px 10px;width: 80%;" class="float-left">
                                            你关注的
                                            <span>螺格</span>
                                            加入了季国艳保护协会，称为一名歌吹
                                            <span style="opacity: 0.5;">3天前</span>
                                        </p>
                                        <el-avatar shape="square" :size="35"
                                                   class="bcy-backgroud-color float-right" :src="squareUrl">

                                        </el-avatar>

                                    </li>
                                </a>
                                <a href="/user-message" class="my-a-color">
                                    <li class="my-message-li">
                                        <el-avatar :size="40" class="bcy-backgroud-color float-left">
                                            10
                                        </el-avatar>
                                        <p style="margin: 10px 0px 0px 10px;width: 80%;" class="float-left">
                                            你关注的
                                            <span>螺格</span>
                                            加入了季国艳保护协会，称为一名歌吹
                                            <span style="opacity: 0.5;">3天前</span>
                                        </p>
                                        <el-avatar shape="square" :size="35"
                                                   class="bcy-backgroud-color float-right" :src="squareUrl">

                                        </el-avatar>

                                    </li>
                                </a>
                                <a href="/user-message" class="my-a-color">
                                    <li class="my-message-li">
                                        <el-avatar :size="40" class="bcy-backgroud-color float-left">
                                            10
                                        </el-avatar>
                                        <p style="margin: 10px 0px 0px 10px;width: 80%;" class="float-left">
                                            你关注的
                                            <span>螺格</span>
                                            加入了季国艳保护协会，称为一名歌吹
                                            <span style="opacity: 0.5;">3天前</span>
                                        </p>
                                        <el-avatar shape="square" :size="35"
                                                   class="bcy-backgroud-color float-right" :src="squareUrl">

                                        </el-avatar>

                                    </li>
                                </a>
                            </ul>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="公告" name="three">
                        <el-card>
                            <el-row :gutter="10">
                                <el-col :span="2">
                                    <el-image
                                            src="https://img-bcy-qnpubin.pstatp.com/Image/icon/announce-calendar-c64eee24ea.png"></el-image>
                                </el-col>
                                <el-col :span="12">
                                    <h4 class="my-opacity" style="margin: 0;font-weight: 300">
                                        来自 <span>官方公告</span>
                                    </h4>
                                    <h3>【活动】 游戏视屏挑战计划4期启动！</h3>
                                    <p>4.10～5.10，
                                        投稿游戏视频，抱走万元奖金、switch～
                                        投满6个视频就有机会拿奖！
                                    </p>
                                    <p>【投稿戳】
                                        <el-link>https://bcy.net/huodong/1093</el-link>
                                    </p>
                                </el-col>
                                <el-col :span="6">

                                </el-col>
                            </el-row>
                        </el-card>
                        <br>
                        <el-card>
                            <el-row :gutter="10">
                                <el-col :span="2">
                                    <el-image
                                            src="https://img-bcy-qnpubin.pstatp.com/Image/icon/announce-calendar-c64eee24ea.png"></el-image>
                                </el-col>
                                <el-col :span="12">
                                    <h4 class="my-opacity" style="margin: 0;font-weight: 300">
                                        来自 <span>官方公告</span>
                                    </h4>
                                    <h3>【活动】 游戏视屏挑战计划4期启动！</h3>
                                    <p>4.10～5.10，
                                        投稿游戏视频，抱走万元奖金、switch～
                                        投满6个视频就有机会拿奖！
                                    </p>
                                    <p>【投稿戳】
                                        <el-link>https://bcy.net/huodong/1093</el-link>
                                    </p>
                                </el-col>
                                <el-col :span="6">

                                </el-col>
                            </el-row>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="合集更新" name="four">
                        <el-card>
                            <el-row :gutter="10">
                             <el-col :span="2">
                                 <el-avatar :size="50">10</el-avatar>
                             </el-col>
                             <el-col :span="20">
                                 <p style="margin:0px 0px 5px">你关注的合集 <span>2019</span>更新了 <span>1周前</span></p>
                                 <p style="margin: 0">
                                     <el-link >2019所有正品场照合集，持续还债ing</el-link>
                                 </p>
                             </el-col>
                             <el-col :span="2" style="text-align: right">
                                 <el-avatar :size="50" shape="square">10</el-avatar>
                             </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                                <el-col :span="2">
                                    <el-avatar :size="50">10</el-avatar>
                                </el-col>
                                <el-col :span="20">
                                    <p style="margin:0px 0px 5px">你关注的合集 <span>2019</span>更新了 <span>1周前</span></p>
                                    <p style="margin: 0">
                                        <el-link >2019所有正品场照合集，持续还债ing</el-link>
                                    </p>
                                </el-col>
                                <el-col :span="2" style="text-align: right">
                                    <el-avatar :size="50" shape="square">10</el-avatar>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="问题" name="five">
                        <el-card>
                            <el-row :gutter="10">
                                <el-col :span="21">
                                    <a href="#" class="bcy-link">
                                        大家在漫展遇到最气愤的事是什么？<el-button size="mini" class="bcy-buttons">306</el-button> <!--<span>306</span>-->
                                    </a>
                                </el-col>
                                <el-col :span="3" class="my-opacity">
                                    <span>10分钟前</span>
                                </el-col>
                            </el-row>
                            <el-divider></el-divider>
                            <el-row :gutter="10">
                                <el-col :span="21">
                                    <a href="#" class="bcy-link">
                                        大家在漫展遇到最气愤的事是什么？<el-button size="mini" class="bcy-buttons">306</el-button> <!--<span>306</span>-->
                                    </a>
                                </el-col>
                                <el-col :span="3" class="my-opacity">
                                    <span>10分钟前</span>
                                </el-col>
                            </el-row>
                        </el-card>

                    </el-tab-pane>
                    <el-tab-pane label="收件箱" name="six">
                        <el-card>

                        </el-card>
                    </el-tab-pane>
                </el-tabs>
                <br><br>
            </div>
        </div>

    </div>
</template>

<script>
  import InputNav from '../../components/public-page/Input-NavMenu'

  export default {
    name: "UserMessage",
    components: {
      InputNav
    },
    data() {
      return {
        activeName: 'seconds',
        squareUrl:"",

      }
    }
  }
</script>

<style>
    .bcy-link{
        text-decoration: none;
        color: black;
    }
    .bcy-link:hover{
        color: #ff6fa2;
    }
    .bcy-buttons{
        background-color: #ff6fa2 !important;
        color: white !important;
    }
    .my-opacity {
        opacity: 0.5;
    }

    .float-left {
        float: left;
    }

    .float-right {
        float: right;
    }

    .bcy-backgroud-color {
        background-color: #ff6fa2 !important;
    }

    .my-message-li {
        padding: 10px 10px;
        clear: both;
        overflow: hidden;
    }

    #user-message .el-radio__input.is-checked .el-radio__inner {
        background-color: #ff6fa2 !important;
        border-color: #ff6fa2 !important;
    }

    #user-message .el-radio__input.is-checked + .el-radio__label {
        color: #ff6fa2 !important;

    }

    #user-message .el-tabs__nav-wrap {
        background-color: white;
        padding: 5px 35px 0px;
    }

    #user-message .el-tabs__active-bar {
        background-color: #ff6fa2 !important;
    }

    #user-message .el-tabs__item.is-active {
        color: #ff6fa2 !important;
    }

    #user-message .el-tabs__item:hover {
        color: #ff6fa2 !important;
    }

    #user-message .el-tabs__item {
        font-size: 17px !important;
    }

    .bcy-buttons {
        background-color: #ff6fa2 !important;
        color: white !important;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }


    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>