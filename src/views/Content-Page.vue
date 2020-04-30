<template>
    <div >
        <input-nav></input-nav>
        <br>
        <el-row :gutter="20" style="width: 80%;margin:0 auto">
            <el-col :span="18">
                <el-card>
                    <div style="width: 80%;margin: 0 auto">
                        <span>{{ProContent.pr_date}}</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>119字</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>46条评论</span>
                        <br><br>
                        <!-- <div>
                             <el-tag><i class="el-icon-s-management"></i>明日方舟</el-tag>
                             <el-tag>推进之王</el-tag>
                         </div>-->
                        <el-tag v-for="(item,index) in ProContent.pr_tags">{{item.tags_name}}</el-tag>


                        <el-divider></el-divider>
                        <div>
                            {{ProContent.pr_info}}
                        </div>
                        <div v-for="(item,index) in ProContent.pro_imgs" class="demo-image__preview">
                            <el-image :src="item.img" :preview-src-list="imgList"></el-image>

                        </div>
                        <!--                        <h2 v-html="pcContent.pc_title"></h2>-->
                        <el-card v-html="pcContent.pc_info" class="pc-info"></el-card>

                        <div v-html="pcContent.pc_content" class="pc-content"></div>


                    </div>

                </el-card>
                <div>
                    <img src="https://img-bcy-qn.pstatp.com/editor/flag/17aw7/953e45c06fed11ea95b3073f3ddd4da3.jpg"
                         alt="">
                    <img src="https://img-bcy-qn.pstatp.com/editor/flag/17aw7/953e45c06fed11ea95b3073f3ddd4da3.jpg"
                         alt="">
                </div>

                <el-card>
                    <el-input type="textarea" placeholder="请输入评论吧" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
                    <el-button size="small" icon="el-icon-picture-outline">图片</el-button>
                    <el-button size="small" icon="el-icon-picture-outline">表情</el-button>
                    <el-button class="bcy-button" style="float: right">评论</el-button>
                    <!--                    <span><i class="el-icon-picture-outline"></i>图片</span>-->
                    <br>
                    <span>共 <span>16</span>评论</span>
                    <el-button class="bcy-button">按热度排序</el-button>
                    <el-button class="bcy-button">按发布排序</el-button>
                </el-card>
            </el-col>
            <el-col :span="6" class="content-rigth-userInfo" id="userInfo">
                <el-card >
                    <!--                    <el-avatar src="3.jpg" :size="80"></el-avatar>-->
                    <img :src="'http://localhost:8080/'+nowUser.user_avatar"
                         alt="" width="80" height="80"
                         style="border-radius: 50%;cursor: pointer" @click="gotoUserMain()">
                    <!--                    <p>姓名</p>-->
                    <p @click="gotoUserMain" style="cursor: pointer">{{this.nowUser.user_name}}</p>
                    <span>关注 {{nowUser.user_attention}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>粉丝&nbsp;{{nowUser.user_fans}}</span>
                    <!--                    <p class="my-opacity">会写小说懒的写</p>-->
                    <p class="my-opacity">{{nowUser.user_info}}</p>
                    <el-button size="medium" @click="insertUserFans()" :disabled="isUserAtten"
                               :class="isUserAtten==true?'bcy-buttons-visited':'bcy-buttons'">
                        <i class="el-icon-plus" v-show="!isUserAtten"></i>{{userAtten}}</el-button>
                    <el-button size="medium" icon="el-icon-message">私信</el-button>
                    <el-button size="medium">勾搭</el-button>
                </el-card>
                <el-card id="choucan" style="margin: 10px 0px">
                    <el-row :gutter="10">
                        <el-col :span="6">
<!--                            <el-button style="width: 100%;">收藏</el-button>-->
                            <el-button style="">收藏</el-button>

                        </el-col>
                        <el-col :span="18">
                            <el-button style="width: 100%;" :class="isGivelikeOne==1?'bcy-buttons-visited':'bcy-buttons'" @click="clickUserGivelike">
                                <i class="el-icon-magic-stick" :class="isGivelikeOne==1?'givelike-icon':''"></i> 赞
                                <span>{{ProContent.pr_givelike}}</span>
                            </el-button>

                        </el-col>
                    </el-row>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
  import InputNav from '../components/public-page/Input-NavMenu'

  export default {
    name: "Content",
    components: {
      InputNav
    },
    data() {
      return {
        ProContent: {
          prid:0,
          pr_info: '',
          pr_date: '',
          pr_go: 0,
          pro_imgs: [],
          pr_tags: [],
        },
        imgList: [], //图片大图预览
        testImgList: [],
        pcContent: {
          pc_content: "",
          pc_title: "",
          pc_info: "",
          pc_givelike: 0,
          pc_go: 0,
          pc_click: 0,
          pc_collect: null,
          pc_date: null,
          pc_comment: 0,
        },
        userAvatar: '',
        nowUser: {
          uid: 0,
          user_name: '',
          user_avatar: '',
          user_info: '',
          user_attention:0,
          user_fans:0,
        },
        userFans:{
          uid:0,
          fid:0,
        },
        isUserAtten:false,
        userAtten:'关注',
        isGivelikeOne:0,
        proContents:{ //点赞的对象
          prid:0,
        },
      }

    },
    created() {
      var prid = this.$route.params.prid
      axios.get("http://127.0.0.1:8090/selectTagById?prid=" + prid)
          .then(res => {
            console.log(res)
            this.ProContent = res.data
            console.log(this.ProContent)

            //开启图片的大图预览
            for (var i = 0; i < this.ProContent.pro_imgs.length; i++) {
              this.imgList.push(this.ProContent.pro_imgs[i].img)
            }

          })

      axios.get("http://127.0.0.1:8090/selectPcIndexByPcid?pcid=" + prid)
          .then(res => {
            console.log(res)
            this.pcContent = res.data
            console.log(this.pcContent)

          })

      //根据作品prid来获得当前的用户信息
      axios.get("http://127.0.0.1:8090/getUserByPrid?prid=" + prid)
          .then(res => {
            console.log("这里是用户的信息s")
            console.log(res.data)
            this.nowUser = res.data

            //查询当前的用户我关注了没有
            this.userFans.uid = this.$store.state.user.uid;  //登录的用户
            this.userFans.fid = this.nowUser.uid //作品内容的用户
            console.log("这里是当前用户的信息")
            console.log(this.userFans)
            axios.post("http://127.0.0.1:8090/selectUserFansByFid",this.userFans)
                .then(res => {
                  console.log(res.data)
                  if (res.data==1){
                    this.isUserAtten = true
                    this.userAtten = '已关注'
                  }


                })



          })


      /*  if(this.$store.state.user.user_avatar!='' && this.$store.state.user.user_avatar!=null){
          this.userAvatar = this.$store.state.user.user_avatar

        }
      alert(this.userAvatar)*/




    },
    methods:{
      insertUserFans(){
        this.userFans.uid = this.$store.state.user.uid;
        this.userFans.fid = this.nowUser.uid
        if(this.$store.state.user.uid!=''){
          //添加一个用户
          axios.post("http://127.0.0.1:8090/insertUserFans",this.userFans)
              .then(res => {
                console.log("这里是用户的信息s")
                console.log(res.data)
                this.nowUser = res.data
                if(res.data!=''){
                  alert(this.userAtten)
                  this.userAtten = "已关注"
                  this.isUserAtten = true
                }

              })

        }else {
          alert("请先登录！")
        }


      },
      gotoUserMain(){
        if(this.$store.state.user.uid!=''){
          var uid = this.$store.state.user.uid;
          //打开新的页面显示内容
          let routeData = this.$router.resolve({path: '/user-main/' + uid});
          window.open(routeData.href, '_blank');
        }else {
          alert("请先登录")
        }

      },
      //点赞功能
      clickUserGivelike(){

        var prid = this.$route.params.prid;
        this.proContents.prid = this.$route.params.prid;
        if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null) {
          this.isGivelikeOne++;
          if (this.isGivelikeOne == 1) {
            axios.post("http://localhost:8090/addPrClickByPrid", this.proContents)
                .then(res => {
                  console.log(res.data)

                  this.ProContent.pr_givelike++
                  this.$message({
                    type: "success",
                    message: '感谢你的点赞！',
                    offset: 100
                  })

                })
          }
          if (this.isGivelikeOne == 2) {
            axios.post("http://localhost:8090/lessPrClickByPrid", this.proContents)
                .then(res => {
                  if (res.data == 1) {
                    this.ProContent.pr_givelike--
                    this.isGivelikeOne = 0
                    this.$message({type: "success", message: '取消点赞', offset: 100})
                  }

                })

          }

        }else {
          alert("登录后才能点赞哦!")
        }
      },
    }
  }
</script>

<style>
    #choucan .el-card__body {
        padding: 10px;
    }

    #userInfo .el-card__body{
        padding: 10px 5px;
    }

    .my-opacity {
        opacity: 0.5;
    }

    .pc-content {

    }

    .pc-content img {
        width: 100%;
        height: auto;
    }

</style>
<style scoped>


    .pc-info {
        background-color: #f5f5fa;
        line-height: 50px;
        font-size: 16px;
        color: #a1a1b1;
        text-indent: 2em;
        border-radius: 5px;
    }

    .content-rigth-userInfo {
        text-align: center;
        margin-bottom: 10px;
        position: sticky; /*粘附功能，随着屏幕滚动吸附到屏幕上*/
        top: 50px;

    }
  /*  .content-rigth-userInfo-fixed{
        position: fixed;
    }*/
    .bcy-buttons-visited{
        background-color: #e5e5e5 !important ;
        color: #a1a1a6 !important;
    }
    .givelike-icon{
        color: #ff6fa2;
    }




</style>