<template>
    <div>
        <div style="width: 70%;float: left;border: 1px solid #E6E6E6" >

            <el-tabs type="border-card">
                <el-tab-pane label="COS周榜">
                    <el-row>
                        <el-col :span="8">
                            <el-card :body-style="{ padding: '0px' }" >
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-big">
                                <div style="position: absolute;left: 10px;bottom: 10px;display: inline-block">
                                    <el-avatar :size="40"
                                               :src="circleUrl"
                                               style="float: left">
                                        地理
                                    </el-avatar>
                                    <p style="color: white;float:right;margin: 10px">_Sheya</p>
                                </div>

                            </el-card>
                        </el-col>
                        <el-col :span="16">
                            <el-row>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" >
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" class="card-class">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" class="card-class">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" class="card-class" >
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" class="card-class" >
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="8">
                                    <el-card :body-style="{ padding: '0px' }" class="card-class" >
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image-small">
                                        <div class="img-avator-div">
                                            <el-avatar :size="30"
                                                       :src="circleUrl"
                                                       style="float: left">
                                                地理
                                            </el-avatar>
                                            <p class="img-avator-name">_Sheya</p>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-col>

                    </el-row>



                </el-tab-pane>
                <el-tab-pane label="COS日榜">绘画日榜</el-tab-pane>
                <el-tab-pane label="COS新人榜">绘画新人榜</el-tab-pane>

            </el-tabs>
            <!--                 页面的重复的相同的内容-->


            <el-row gutter="10" style="margin: 10px 0px">
                <el-col :span="12" >

                    <water-fall-cute v-for="(item,index) in imgCute01">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">
                            {{item.imgName}}
                        </strong>
                        <span slot="img-text">
                             {{item.imgText}}
                         </span>
                        <img :src="item.img" slot="img" class="cute-img" alt="">
                        <el-button slot="img-tags"
                                   type="info"
                                   size="mini"
                                   plain="true"
                                   :autofocus="false" v-for="(item2,index) in item.imgTags">
                            {{item2}}
                        </el-button>
                        <span slot="img-collect">
                             {{item.imgCollect}}
                         </span>
                        <span slot="img-go">
                             {{item.imgGo}}
                         </span>
                        <span slot="img-comment">
                             {{item.imgComment}}
                         </span>
                        <span slot="img-click">
                             {{item.imgClick}}
                         </span>
                    </water-fall-cute>
                    <water-fall-cute>
                        <span slot="img-text">测试插槽的使用</span>
                        <img src="11.jpg" slot="img" class="cute-img" alt="">
                        <el-button slot="img-tags" type="info" size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                        <span slot="img-go">10</span>
                        <span slot="img-comment">50</span>
                        <span slot="img-click">870</span>
                    </water-fall-cute>
                </el-col>
                <el-col :span="12" >
                    <water-fall-cute v-for="(item,index) in imgCute02">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">{{item.imgName}}</strong>
                        <span slot="img-text">{{item.imgText}}</span>
                        <img :src="item.img" slot="img" class="cute-img" alt="">
                        <el-button slot="img-tags"
                                   type="info"
                                   size="mini"
                                   plain="true"
                                   :autofocus="false" v-for="(item2,index) in item.imgTags">
                            {{item2}}
                        </el-button>
                        <span slot="img-collect">
                             {{item.imgCollect}}
                         </span>
                        <span slot="img-go">
                             {{item.imgGo}}
                         </span>
                        <span slot="img-comment">
                             {{item.imgComment}}
                         </span>
                        <span slot="img-click">
                             {{item.imgClick}}
                         </span>
                    </water-fall-cute>
                    <water-fall-text-cute v-for="(item,index) in TestCute01">
                        <el-avatar :size="40" :src="item.imgAvatar" slot="img-avatar"></el-avatar>
                        <strong slot="img-name">{{item.imgName}}</strong>
                        <span slot="img-text">{{item.imgText}}</span>
                        <span slot="img-content" v-html="item.imgContent">
                         </span>
                        <img :src="item.img" slot="img" class="cute-text-img" alt="">
                        <el-button slot="img-tags"
                                   type="info"
                                   size="mini"
                                   plain="true"
                                   :autofocus="false" v-for="(item2,index) in item.imgTags">
                            {{item2}}
                        </el-button>
                        <span slot="img-collect">
                             {{item.imgCollect}}
                         </span>
                        <span slot="img-go">
                             {{item.imgGo}}
                         </span>
                        <span slot="img-comment">
                             {{item.imgComment}}
                         </span>
                        <span slot="img-click">
                             {{item.imgClick}}
                         </span>
                    </water-fall-text-cute>
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px;margin-bottom: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="height: 100%;width: 90%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px;margin-bottom: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="3.jpg" alt="" style="width: 90%;height: 100%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row gutter="10" style="margin: 10px 0px">
                <el-col :span="12" >
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="height: 100%;width: 90%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>

                </el-col>
                <el-col :span="12" >
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="height: 100%;width: 90%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row gutter="10" style="margin: 10px 0px">
                <el-col :span="12" >
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="height: 100%;width: 90%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>

                </el-col>
                <el-col :span="12" >
                    <el-card :body-style="{ padding: '0px' }" style="border-radius: 10px">
                        <el-header style="padding-top: 10px">
                            <el-col :span="1">
                                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                            </el-col>
                            <el-col :span="8">
                                <p style=""><strong>ochia</strong></p>
                            </el-col>

                        </el-header>
                        <p style="text-align: left;width: 90%;margin: 5px auto">
                            试一下灯光的感觉
                        </p>
                        <div>
                            <a href="" target="_blank">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="height: 100%;width: 90%;border-radius: 10px">
                            </a>
                        </div>

                        <div style="padding: 14px 14px 0px 14px;">
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">cos</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">武汉加油</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <el-button type="info"  size="mini" plain="true" :autofocus="false">Fate</el-button>
                            <br>
                            <ui class="img-ul" >
                                <li class="img-li">
                                    <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-position" :underline="false" type="info">20</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-chat-line-round" :underline="false" type="info">545</el-link>
                                </li>
                                <li class="img-li">
                                    <el-link icon="el-icon-view" :underline="false" type="info">152</el-link>

                                </li>
                            </ui>
                            <!-- <div class="bottom clearfix">
                                 <time class="time">{{ currentDate }}</time>
                                 <el-button type="text" class="button">操作按钮</el-button>
                             </div>-->
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div style="width: 29%;float: right;border: 1px solid #e6e6e6">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>

                <el-carousel height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small lunbo-big">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                <!--                :class="{'fixedlunbo':isFixed}"-->
                <el-card style="padding-top: 0px"  :class="{'fixedlunbo':isFixed}" id="so">
                    <h3 style="margin: 10px"><i class="el-icon-edit"></i>优秀Coser推荐</h3>
                    <el-carousel height="500px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small lunbo-small">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
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
                </el-card>

            </el-collapse>
        </div>

    </div>
</template>

<script>
  import WaterFallCute from '../components/WaterFall-cute-img'
  import WaterFallTextCute from '../components/WaterFall-cute-text'


  export default {
    name: "CosPage",
    //注册组件
    components:{
      WaterFallCute,
      WaterFallTextCute
    },
    data(){
      return{
        fill:'fill',
        isFixed:false,
        scrollNowLoation:'',
        imgCute01:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'20.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'21.jpg',
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'22.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ],
        imgCute02:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'24.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'25.jpg',
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'26.jpg',
            imgTags:['崩坏','明日方舟','二次元','cos'],
            imgCollect:'收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ],
        TestCute01:[
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'测试对象传入插槽',
            img:'25.jpg',
            imgContent:`<b>测试文字的显示是什么样子</b>`,
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
          {
            imgAvatar:'1.jpg',
            imgName:'测试名称',
            imgText:'发布文字',
            img:'26.jpg',
            imgContent:`<b>测试文字的显示是什么样子</b>

                                            <p><strong>在如今的互联网时代，人们越来越喜欢将自己的数据存放到互联网上，于是便诞生了很多类型的软件，比如360网盘，百度网盘，云盘之类的。所以说，文件上传和下载的功能是现在非常主流的一个功能，应用十分广泛。</strong><br>
<strong>那现在，我们就来学习一下，在web中，如何去实现文件上传和下载！</strong><br>
实现web开发中的文件上传功能，需完成如下二步操作：<br>
在web页面中添加上传输入项<br>

`,
            imgTags:['崩坏','哈哈','二次元','cos'],
            imgCollect:'已收藏',
            imgGo:45,
            imgComment:15,
            imgClick:4505,
          },
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        console.log(window.scrollY)
        if(window.scrollY>600){
          this.isFixed = true
        }else {
          this.isFixed = false
        }
      }
    }

  }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;

    }
    .fixedlunbo{
        width: 22%;
        position: fixed;
        top: 20px;
    }
    .cute-img{
        width: 90%;
        height: auto;
        border-radius: 10px;
    }
    .cute-text-img{
        /* width: 90%;
         height: 100%;
         border-radius: 10px;*/
        width: 100%;
        position: relative;
        bottom: 50%;
        border-radius: 10px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image-big {
        width: 100%;
        display: block;
        height: 500px;
        border-radius: 10px;
    }
    .image-small {
        width: 100%;
        display: block;
        height: 250px;
        border-radius: 10px;
    }
    .img-avator-samll{

    }

    .card-class{
        position: relative;
    }
    .img-avator-div{
        position: absolute;left: 5px;bottom: 0px;display: inline
    }
    .img-avator-img{

    }
    .img-avator-name{
        color: white;float:right;margin: 10px 0px 10px 5px
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .lunbo-big{
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .lunbo-small{
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 500px;
        margin: 0;
    }

</style>