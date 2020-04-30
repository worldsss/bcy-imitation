<template>
    <div>
        <input-nav></input-nav>
        <br>
        <el-row :gutter="10" style="width: 70%;margin:0 auto">
            <el-col :span="16">
                <div style="position: relative;top: 0;background-color: #ffffff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
                    <el-image :src="src01">

                    </el-image>
                    <el-avatar :src="'http://localhost:8080/'+myuser.user_avatar" :size="120"
                               style="position:absolute;top: 100px;left: 30px;border: 5px solid"></el-avatar>

                    <div style="width: 90%;margin: 0 auto; background-color: white">
                        <br><br>
<!--                        <h3 class="my-test-left">worlds</h3>-->
                        <h3 class="my-test-left">{{myuser.user_name}}</h3>
                        <div class="my-test-left">
                            <el-tag><i class="el-icon-male"></i></el-tag>
                            <el-tag>求cp</el-tag>
                            <el-tag>coser</el-tag>
                            <el-tag>河南</el-tag>

<!--                            <p class="my-test-left">一个喜欢看Cosplay的宅男</p>-->
                            <p class="my-test-left">{{myuser.user_info}}</p>
                            <el-link style="font-size: 20px;margin-right: 15px">
<!--                                537-->
                                {{myuser.user_attention}}
                                <span class="my-opacity">关注</span>
                            </el-link>
                            <el-link style="font-size: 20px;margin-right: 15px">
                                {{myuser.user_fans}}
                                <span class="my-opacity">粉丝</span>
                            </el-link>
                            <el-link style="font-size: 20px;margin-right: 10px" disabled>
                                {{myuser.user_givelike}}
                                <span class="">获赞</span>
                            </el-link>
                        </div>
                        <br>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <el-dropdown>
                      <span class="el-dropdown-link" style="color: #fb678b;font-size: 20px">
                        我的发布<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item icon="el-icon-plus">全部</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-circle-plus">文字</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-circle-plus">图片</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-circle-plus">问答</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-circle-plus">视频</el-dropdown-item>

                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                            <el-col :span="12">

                                <el-dropdown>
                              <span class="el-dropdown-link">
                                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>我的喜欢</el-dropdown-item>
                                        <el-dropdown-item>我的收藏</el-dropdown-item>

                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </el-row>
                        <br>
                    </div>

                </div>
                <br>

<!--              这里是内容-->
                <el-card>
                  <!--  <el-row :gutter="10">
                        <el-col :span="8" class="my-like-img-height">
                            <el-link>
                                <el-image :src="likeImg[0]"></el-image>
                            </el-link>
                        </el-col>
                        <el-col :span="8" class="my-like-img-height">
                            <el-link>
                                <el-image :src="likeImg[1]"></el-image>
                            </el-link>

                        </el-col>
                        <el-col :span="8" class="my-like-img-height">
                            <el-link>
                                <el-image :src="likeImg[2]"></el-image>
                            </el-link>

                        </el-col>
                    </el-row>
                    <br>
                    <el-row :gutter="10">
                        <el-col :span="8" class="my-like-img-height">
                            <el-link>
                                <el-image :src="likeImg[0]"></el-image>
                            </el-link>
                        </el-col>
                        <el-col :span="8" class="my-like-img-height">
                            <el-link>
                                <el-image :src="likeImg[1]"></el-image>
                            </el-link>

                        </el-col>
                        <el-col :span="8" class="my-like-img-height"> &lt;!&ndash;style="width: 100%;height: 100%"&ndash;&gt;
                            <el-link>
                                <el-image :src="likeImg[2]"></el-image>
                            </el-link>

                        </el-col>
                    </el-row>-->
               <!-- <water-fall-all-imgs :water-imgs="imgsList">

                </water-fall-all-imgs>-->
                    <water-fall-all-imgs
                            v-for="(item,index) in imgsList"
                            :water-imgs="item">
                    </water-fall-all-imgs>


                </el-card>

            </el-col>
            <el-col :span="8" @change="handleScroll">
                <div :class="{'fixedlunbo':isFixeds}">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我关注的圈子</span>
                            <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                            <el-row :gutter="10">
                                <el-col :span="2">
                                    <el-link :underline="false">
                                        <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>
                                    </el-link>
                                </el-col>
                                <el-col :span="17">
                                    <el-link> {{'列表内容 ' + o }}</el-link>

                                </el-col>
                                <el-col :span="5">
                                    <span style="float: right;opacity: 0.6;">6分钟前</span>
                                </el-col>
                            </el-row>
                        </div>
                        <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                    </el-card>
                    <br>
                  <!--  <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我关注的用户</span>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            <el-row :gutter="10">
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
                        <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                    </el-card>-->


                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>我关注的用户</span>
                            <!--                     <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                        </div>
                        <div v-for="(item,index) in userAttention" :key="index" class="text item">
                            <!--                     <el-image :src="src02" style="width: 25px;height: 25px;margin: 0"></el-image>-->
                            <el-row :gutter="10">
                                <el-col :span="2">
                                    <el-link :underline="false">
                                        <el-avatar shape="circle" :size="20" :src="'http://localhost:8080/'+item.user_avatar"></el-avatar>
                                    </el-link>
                                </el-col>
                                <el-col :span="17">
                                    <el-link> {{item.user_name}}</el-link>

                                </el-col>
                            </el-row>
                        </div>
                        <el-button type="info" :plain="true" style="width: 100%">查看全部</el-button>
                    </el-card>

                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
  import InputNav from '../../components/public-page/Input-NavMenu'
  import WaterFallAllImgs from '../../components/waterFall-component/WaterFall-All-Imgs'

  export default {
    name: "UserMain",
    components: {
      InputNav,
      WaterFallAllImgs
    },
    data() {
      return {
        src01: 'https://s3.pstatp.com/bcy/image/default_banner.c6e8da.jpg',
        src02: 'https://p9-bcy.byteimg.com/img/banciyuan/core/tags/flag/17ate/ed741f50588011ea8f241376ca19efc0.jpg~tplv-banciyuan-2X2.image',
        src03: 'https://img-bcy-qn.pstatp.com/Public/Upload/avatar/2188270/3d9526710a124c13aa3df7402c7c117c/fat.jpg/abig?1586335852',
        likeImg: ['https://p9-bcy.byteimg.com/img/banciyuan/c18ca07ce5b4406a881e9fbad350c76f~tplv-banciyuan-w650.image',
          'https://p9-bcy.byteimg.com/img/banciyuan/8cc86762670c4d5982fab3d0b369336e~tplv-banciyuan-w650.image',
          'https://p9-bcy.byteimg.com/img/banciyuan/68ca07be62004cf0af5d42859abc43db~tplv-banciyuan-w650.image',
        ],
        fits: 'scale-down',
        isFixeds: false,
        squareUrl:"",
        myuser:{
          uid:0,
          user_name:'',
          user_avatar:'',
          user_info:'',
          user_sex:'',
        },
        imgsList:[],
        userAttention:[], //我关注的用户
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 20) {
          this.isFixeds = true
        } else {
          this.isFixeds = false
        }
      }
    },
    created() {
        var uid = this.$route.params.uid;
      axios.get("http://127.0.0.1:8090/selectUserByUid?uid=" + uid)
          .then(res => {
            console.log(res.data)
            this.myuser = res.data
          })

        /*  //获取当前用户的全部作品
          axios.get("http://127.0.0.1:8090/getProContentByUid?uid=" + uid)
              .then(res => {
                console.log(res.data)
                this.imgsList = res.data

              })*/
      //获取当前用户的全部作品
      axios.get("http://127.0.0.1:8090/getProIndexByUid?uid=" + uid)
          .then(res => {
            console.log(res.data)
            this.imgsList.push(res.data.list)

          })


      //获取我关注的用户
      axios.get("http://127.0.0.1:8090/getUserFansUserByFid?fid=" + uid)
          .then(res => {
            console.log(res.data)
            this.userAttention = res.data

          })


    }
  }
</script>

<style scoped>
    .text {
        font-size: 14px;
        lin-height: 20px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        text-align: left;
    }

    .my-test-left {
        text-align: left;
    }

    .my-opacity {
        opacity: 0.5;
    }

    .my-like-img-height {
        height: 200px;
        overflow: hidden;
        border-radius: 10px;
    }

    .fixedlunbo {
        width: 22%;
        position: fixed;
        top: 20px;

    }
    .fixedMenu {
        width: 100%;
        position: fixed;
        top: 0px;

    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fb678b;
        font-size: 20px;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

</style>