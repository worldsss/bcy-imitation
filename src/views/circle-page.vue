<template>
    <div>
        <input-nav></input-nav>
        <br>
        <div class="all-main">
            <div class="main-left">
                <!--            <el-col :span="16">-->
                <div style="position: relative;top: 0;background-color: #ffffff; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">

                    <el-card class="box-card">
                        <el-row :gutter="10">
                            <el-col :span="3">
                                <el-avatar src="3.jpg" :size="80" shape="square" style="border-radius: 10px"></el-avatar>
                            </el-col>
                            <el-col :span="18">
                                <h3 style="margin: 0px 0px 5px;padding: 0px 5px">
                                    {{tags.tags_name}}
                                </h3>
                                <el-tag type="warning" effect="dark">人气新圈榜NO.1</el-tag>
                                <p>{{tags.tags_name}}圈子欢迎您-发布内容并打上"{{tags.tags_name}}"标签就能出现在圈子里哦~</p>
                            </el-col>
                        </el-row>
                        <span class="my-opacity">成员数：{{tagsChilrdenCount}}</span>
                        <!--<el-button
                                   :class="!isUserAtten?'bcy-buttons':'bcy-button-active'"
                                   style="float: right"
                                   @click="attentionTags"
                                   :disabled="isUserAtten">
                            {{isUserAtten?'已关注':'关注圈子'}}
                        </el-button>-->
                        <!--:disabled="isUserAttenState==1"-->
                        <el-button
                                :class="isUserAttenState!=1?'bcy-buttons':'bcy-button-active'"
                                style="float: right"
                                @click="attentionTags"
                                >
                            {{isUserAttenState==1?'已关注':'关注圈子'}}
                        </el-button>
                        <br><br>
                        <el-link :underline="false" class="circle-text-link">热门动态</el-link>
                        <el-link :underline="false" class="circle-text-link">最新动态</el-link>


                    </el-card>


                </div>
                <br>

                <!--              这里是内容-->
                <!--                <el-card>-->
                <el-row :gutter="10" style="margin: 10px 0px">
                    <el-col :span="12">
                        <water-fall-all-imgs
                                v-for="(item,index) in allWaterFallImgs"
                                :water-imgs="item">
                        </water-fall-all-imgs>

                    </el-col>
                    <el-col :span="12">

                        <water-fall-all-text
                                v-for="(item,index) in allWaterFallText"
                                :test-cute01="item">

                        </water-fall-all-text>


                    </el-col>
                </el-row>


                <!--                </el-card>-->

                <!--            </el-col>-->
            </div>
            <div class="main-right">
                <!--            <el-col :span="8" @change="handleScroll">-->
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
                                        <el-avatar shape="square" :size="20"
                                                   :src="'http://localhost:8080/'+item.user_avatar"></el-avatar>
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

                <!--            </el-col>-->
            </div>
        </div>

        <!-- <el-row :gutter="10" style="width: 70%;margin:0 auto">


         </el-row>-->
    </div>
</template>

<script>
  import InputNav from '../components/public-page/Input-NavMenu'
  import WaterFallAllImgs from '../components/waterFall-component/WaterFall-All-Imgs'
  import WaterFallAllText from '../components/waterFall-component/WaterFall-All-Text'


  export default {
    name: "UserMain",
    components: {
      InputNav,
      WaterFallAllImgs,
      WaterFallAllText

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
        squareUrl: "",
        myuser: {
          uid: 0,
          user_name: '',
          user_avatar: '',
          user_info: '',
          user_sex: '',
        },
        imgsList: [],
        userAttention: [], //我关注的用户
        allWaterFallImgs: [],
        allWaterFallData: [],
        allWaterFallText: [],
        isScrollDown: false,
        tags:{
          tid:0,
          tags_name:'',
          tags_recom:'',
        },
        tagsChilrdenCount:0,
        userCircle:{ //用户-圈子关注对象
          uid:0,
          tid:0,
        },
        isUserAtten:false, //用户是否关注圈子
        isUserAttenState:0, //用户是否关注圈子
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
      },
      attentionTags(){

        if(this.isUserAttenState == 1){
          this.userCircle.tid = this.$route.params.tid;
          this.userCircle.uid = this.$store.state.user.uid;
          axios.post("http://127.0.0.1:8090/deleteUserCircle",this.userCircle)
              .then(res => {
                if(res.data==1){
                  console.log(res.data)
                  this.$message({
                    message:'取消关注此圈子！',
                    type:"success",
                    offset:100
                  })
                  this.isUserAtten = true
                  this.isUserAttenState = 0;
                }

              })

        }else {
          if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null) {
            var tid = parseInt(this.$route.params.tid)
            this.userCircle.tid = tid;
            this.userCircle.uid = this.$store.state.user.uid;
            axios.post("http://127.0.0.1:8090/insertUserCircle",this.userCircle)
                .then(res => {
                  if(res.data==1){
                    console.log(res.data)
                    this.$message({
                      message:'感谢关注！',
                      type:"success",
                      offset:100
                    })
                    this.isUserAtten = true
                    this.isUserAttenState = 1;

                  }


                })
          }
        }


      }

    },
    created() {
      var uid = this.$route.params.uid;
      //返回当前user信息
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

      //多图片根据tid显示
      var tid = this.$route.params.tid;
      console.log(tid)
      axios.get("http://localhost:8090/getProIndexByTid?tid="+tid)
          .then(res => {
            console.log(res.data)
            // this.imgCute02 = res.data.list;
            this.imgsContent = res.data.list;

            this.allWaterFallImgs.push(res.data.list)

          })

      //文字根据tid显示
      axios.get("http://localhost:8090/showPcIndex")
          .then(res => {
            console.log(res.data)
            // this.textCute = res.data.list;

            this.allWaterFallText.push(res.data.list)

          })

      //标签信息
      axios.get("http://localhost:8090/getTagsByTid?tid="+tid)
          .then(res => {
            console.log(res.data)
            this.tags = res.data
          })


      //标签信息
      axios.get("http://localhost:8090/getCountPridByTid?tid="+tid)
          .then(res => {
            console.log(res.data)
            this.tagsChilrdenCount = res.data
          })

      //获取用户
      axios.get("http://127.0.0.1:8090/getSessionUserInfo")
          .then(res =>{
            console.log("这里是session中的对象"+res.data)
            //把当前已经登录的用户的信息再存入vuex中
            if(res.data!=null && res.data!=''){
              this.isUserShow = true
              //vue不推荐直接把值赋值给state中的属性，而是使用方法的方式赋值，这样才是响应式的
              this.$store.commit('addUserName',res.data)



              if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null) {
                var tid = parseInt(this.$route.params.tid)
                this.userCircle.tid = tid;
                this.userCircle.uid = this.$store.state.user.uid;

                axios.post("http://127.0.0.1:8090/judgeUserCircleByTidAndUid",this.userCircle)
                    .then(res => {
                      console.log("什么情况啊，就是没法出去啊")
                      console.log(res.data)
                      if(res.data==1){
                        this.isUserAtten = true
                        this.isUserAttenState = 1;
                      }

                    })
              }




            }else {
              this.isUserShow = false
            }
          })





      var _this = this
      window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

        if (scrollTop + windowHeight == scrollHeight) {

          //发送翻页的axios的请求发送
        /*  this.isScrollDown = true
          //写后台加载数据的函数
          console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
          console.log("发送啊")
          _this.pageNumber++;
          axios.get("http://localhost:8090/showIndex?pageSize=10&pageNumber=" + _this.pageNumber)
              .then(res => {
                console.log(res.data)

                _this.allWaterFallImgs.push(res.data.list)


              })
          axios.get("http://localhost:8090/showPcIndex?pageSize=10&pageNumber=" + _this.pageNumber)
              .then(res => {
                console.log(res.data)

                _this.allWaterFallText.push(res.data.list)

              })
*/
        }
      }


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

    .circle-text-link {
        background-color: #b2dced;
        margin: 20px 20px 0px;
        font-size: 18px;
    }
    .bcy-buttons-active{
        background-color: #e5e5e5 !important ;
        color: #a1a1a6 !important;
    }

    .givelike-icon{
        color: #ff6fa2;
    }
</style>