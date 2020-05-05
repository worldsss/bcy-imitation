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
          <!-- <img :src="'http://localhost:8080/'+myuser.user_avatar" width="120" height="120"
                      style="position:absolute;top: 100px;left: 30px;border: 5px solid"></img>-->
          <div style="width: 90%;margin: 0 auto; background-color: white">
            <br><br>
            <!--                        <h3 class="my-test-left">worlds</h3>-->
            <h3 class="my-test-left">{{myuser.user_name}}</h3>
            <div class="my-test-left">
              <el-tag><i :class="myuser.user_sex!='女'?'el-icon-male':'el-icon-female'"></i></el-tag>
              <el-tag v-for="(item,index) in userTags">{{item.utag_name}}</el-tag>
              <!--<el-tag>coser</el-tag>
              <el-tag>河南</el-tag>-->
              <!-- <el-tag>求cp</el-tag>
               <el-tag>coser</el-tag>
               <el-tag>河南</el-tag>-->

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
            <!--  <el-tabs>
                  <el-tabs v-model="activeName" @tab-click="handleClick(tab, event)">
                      <el-tab-pane label="用户管理" name="first">
                          <el-dropdown>
                            <span class="el-dropdown-link" style="color: #fb678b;font-size: 20px">
                              我的发布<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                            </span>
                              <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item icon="el-icon-plus">全部</el-dropdown-item>
                                  <el-dropdown-item icon="el-icon-circle-plus">文字</el-dropdown-item>
                                  <el-dropdown-item icon="el-icon-circle-plus">图片</el-dropdown-item>
                                  <el-dropdown-item icon="el-icon-circle-plus">问答</el-dropdown-item>
                                  <el-dropdown-item icon="el-icon-circle-plus">视频</el-dropdown-item>

                              </el-dropdown-menu>
                          </el-dropdown>

                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                  </el-tabs>
              </el-tabs>
-->

            <el-row :gutter="10">
              <el-col :span="12" style="text-align: center">
                <el-dropdown @command="changeShowState">
                                    <span class="el-dropdown-link" style="color: #fb678b;font-size: 20px">
                                     我的发布<i class="el-icon-arrow-down el-icon--right"></i>
                                     </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus" command="all">全部</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus" command="text">文字</el-dropdown-item>
                    <!--                                        <el-dropdown-item icon="el-icon-circle-plus" command="imgs">图片</el-dropdown-item>-->
                    <el-dropdown-item icon="el-icon-circle-plus" command="imgs">图片</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus" command="que">问答</el-dropdown-item>

                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
              <!--                            <router-link to="user-pro-content">哈哈哈哈哈哈哈哈哈</router-link>-->
              <el-col :span="12" style="text-align: center">

                <el-dropdown @command="changeShowState">
                                      <span class="el-dropdown-link">
                                        我的喜欢<i class="el-icon-arrow-down el-icon--right"></i>
                                      </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="mylike">我的喜欢</el-dropdown-item>
                    <el-dropdown-item command="mycollect">我的收藏</el-dropdown-item>

                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <br>
          </div>

        </div>
        <br>

        <!--              这里是内容-->
        <!--                <el-card>-->
        <div :class="showState==5?'user-pro-content-div-show':'user-pro-content-div-none'">
          //每隔三个换行
<!--           <el-row :gutter="10" v-for="(item,index) in userCollectImgs" v-if="index%4==0">-->
           <el-row :gutter="10" v-for="(item,index) in userCollectProContent" v-if="index%4==0">
                <el-col :span="8" class="my-like-img-height">
                    <el-link :href="'/content/'+userCollectPrid[index]">
                      <img :src="userCollectImgs[index]" class="collect-imgs"></img>
<!--                        <img :src="item[index].pr_img" class="collect-imgs"></img>-->
                    </el-link>
                </el-col>
                <el-col :span="8" class="my-like-img-height">
                    <el-link :href="'/content/'+userCollectPrid[index+1]">
<!--                        <el-image :src="userCollectImgs[1]"></el-image>-->
                        <img :src="userCollectImgs[index+1]" class="collect-imgs"></img>
<!--                        <img :src="item[index+1].pr_img" class="collect-imgs"></img>-->
                    </el-link>

                </el-col>
                <el-col :span="8" class="my-like-img-height">
                    <el-link :href="'/content/'+userCollectPrid[index+2]">
                      <img :src="userCollectImgs[index+2]" class="collect-imgs"></img>
<!--                      <img :src="item[index+2].pr_img" class="collect-imgs"></img>-->
                    </el-link>

                </el-col>
            </el-row>
            <br>


           <!-- <pro-content-cute :collect-imgs="userCollectProContent" :user-collect-imgs="userCollectImgs">

            </pro-content-cute>-->
          <!--                    <user-collect-content></user-collect-content>-->

        </div>


        <!--                    <router-view ></router-view>-->

        <!--  <user-pro-content :imgs-list="imgsList">

          </user-pro-content>-->


<!--        我的作品-->
        <div :class="showState==1?'user-pro-content-div-show':'user-pro-content-div-none'">
          <water-fall-all-imgs
                  v-for="(item,index) in imgsList"
                  :water-imgs="item">
          </water-fall-all-imgs>
        </div>


        <!--                </el-card>-->

      </el-col>
      <el-col :span="8" @change="handleScroll">
        <div :class="{'fixedlunbo':isFixeds}">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>我关注的圈子</span>
            </div>
            <!--                        <div v-for="o in 4" :key="o" class="text item">-->
            <div v-for="(item,index) in rankTags" :key="index" class="text item">
              <el-row :gutter="10">
                <el-col :span="2">
                  <el-link :underline="false">
                    <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>
                  </el-link>
                </el-col>
                <el-col :span="17">
                  <a :href="'/circle-page/'+item.tid" target="_blank" class="tags-link"> {{item.tags_name}}</a>

                </el-col>
                <el-col :span="5">
                  <span style="float: right;opacity: 0.6;">{{item.tags_hot}}</span>
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
                  <a :href="'/user-main/'+item.uid" target="_blank" class="tags-link">
                    <el-avatar shape="circle" :size="20"
                               :src="'http://localhost:8080/'+item.user_avatar"></el-avatar>
                  </a>
                </el-col>
                <el-col :span="17">
                  <a :href="'/user-main/'+item.uid" target="_blank" class="tags-link"> {{item.user_name}}</a>

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
  // import UserProContent from './childComps/user-pro-content'
  import ProContentCute from "../../components/user-component/ProContentCute";

  export default {
    name: "UserMain",
    components: {
      InputNav,
      WaterFallAllImgs,
      // UserProContent,
      ProContentCute,

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
        userCollectProContent: [
          // collectImgs:[],
        ], //我收藏的全部的作品
        showState: 1, //显示的收藏还是作品的状态
        userCollectImgs: [], //收藏的所有图片，存放为一个数组
        userCollectPrid:[], //收藏的所有内容的prid,用于跳转页面使用
        rankTags: [],
        userTags: [], //用户的个人标签3个
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
      changeShowState(command) {
        console.log(command)
        if (command == "all") {
          this.showState = 1;
        }
        if (command == 'mycollect') {
          this.showState = 5;
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
      /*

              //获取当前用户的全部作品
              axios.get("http://127.0.0.1:8090/getProContentByUid?uid=" + uid)
                  .then(res => {
                    console.log(res.data)
                    this.imgsList = res.data

                  })
      */


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


      //获取我收藏的全部的作品，未分页版
      axios.get("http://127.0.0.1:8090/getProContentByUserCollectUid?uid=" + uid)
          .then(res => {
            if (res.data != '') {
              this.userCollectProContent = res.data
              console.log("这里是传回来的收藏")
              console.log(res.data)

              for (var i = 0; i < res.data.length; i++) {
                this.userCollectImgs.push(res.data[i].pr_img)
              }
              for (var i = 0; i < res.data.length; i++) {
                this.userCollectPrid.push(res.data[i].prid)
              }
              console.log("这里是把返回的图片存到数组中的值");
              console.log(this.userCollectImgs)


            }
          })



      //获取我收藏的全部的作品
   /*   axios.get("http://127.0.0.1:8090/getUserCollectPaging?uid=" + uid)
          .then(res => {
            if (res.data != '') {
              console.log("这里是当前用户收藏的作品分页内容")
              console.log(res.data)
              this.userCollectProContent = res.data.list
              for (var i = 0; i < res.data.list.length; i++) {
                this.userCollectImgs.push(res.data.list[i].pr_img)
              }
              console.log("这里是收藏作品的图片展示")
              console.log(this.userCollectImgs)

            }
          })

*/

      axios.get("http://127.0.0.1:8090/getSessionUserInfo")
          .then(res => {
            console.log("这里是session中的对象" + res.data)
            //把当前已经登录的用户的信息再存入vuex中
            if (res.data != null && res.data != '') {
              this.isUserShow = true
              //vue不推荐直接把值赋值给state中的属性，而是使用方法的方式赋值，这样才是响应式的
              this.$store.commit('addUserName', res.data)

              console.log("我就不信这个时候的user是空的啊啊啊啊" + this.$store.state.user.uid)
              if (this.$store.state.user.uid != '' && this.$store.state.user.uid != null) {
                //获取当前用户关注的全部圈子
                axios.get("http://localhost:8090/getTagsNameByUid?uid=" + this.$store.state.user.uid)
                    .then(res => {
                      console.log("这里是当前用户关注的圈子")
                      console.log(res.data)
                      this.rankTags = res.data


                    })
                //获取用户的个人标签
                axios.get("http://127.0.0.1:8090/getUserTagByUid?uid=" + this.$store.state.user.uid)
                    .then(res => {
                      console.log("这里是用户全部的个人标签")
                      console.log(res.data)
                      this.userTags = res.data
                    })


              }


            } else {
              this.isUserShow = false
            }
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

  .user-pro-content-div-none {
    display: none;
  }

  .user-pro-content-div-show {
    display: block;
  }

  .tags-link {
    text-decoration: none;
    color: black;
  }

  .tags-link:hover {
    text-decoration: underline;
  }

  .collect-imgs{
    width: 100%;
    /*height: 100%;*/
    height: 200px;
  }


</style>