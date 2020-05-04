<template>
    <div>
        <!--   <water-fall-imgs v-for="(item,index) in WaterImgs" :img-links="imgLinks">
               <el-avatar :size="40" :src="item.ImgsAvator" slot="img-avatar"></el-avatar>
               <strong slot="img-name">
                   {{item.ImgsName}}
               </strong>
               <span slot="img-text">
                   {{item.ImgsText}}
               </span>

               <img v-for="(item1,index1) in item.Imgs"  :slot="index1" :src="item1" alt="" class="imgs-width">

   &lt;!&ndash;            <img slot="0" src="3.jpg" alt="" class="imgs-width">&ndash;&gt;

             &lt;!&ndash;  <div v-for="(item1,index) in item.Imgs">

                   <img :slot="index" :src="item1"  alt="">

                 &lt;!&ndash;  <slot name="imgs02"></slot>
                   <slot name="imgs03"></slot>&ndash;&gt;
               </div>
   &ndash;&gt;
               <span slot="img-collect">
                   {{item.ImgsCollect}}
               </span>
               <span slot="img-go">
                   {{item.ImgsGO}}
               </span>
               <span slot="img-comment">
                   {{item.ImgsComment}}
               </span>
               <span slot="img-click">
                   {{item.ImgsClick}}
               </span>
           </water-fall-imgs>

   -->

        <!--

                <water-fall-imgs v-for="(item,index) in WaterImgs" :img-links="imgLinks" :img-count="item.pr_img_count">
                    &lt;!&ndash;            <a :href="'http://127.0.0.1:8090/selectTagById?prid='+item.prid" slot="img-link">&ndash;&gt;
                    <el-avatar :size="40" :src="item.user_avatar" slot="img-avatar"></el-avatar>
                    <strong slot="img-name">
                        {{item.user_name}}
                    </strong>
                    <span slot="img-text">
                        {{item.pr_info}}
                    </span>
                    <el-button slot="img-tags"
                               type="info"
                               size="mini"
                               :plain="true"
                               :autofocus="false" v-for="(item2,index) in item.pr_tags">
                        {{item2.tags_name}}
                    </el-button>
                    &lt;!&ndash;  <img v-for="(item1,index1) in item.pro_imgs"
                           :slot="index1"
                           :src="item1.img"
                           alt=""
                           class="imgs-width"  />&ndash;&gt;
                    &lt;!&ndash;            <a :href="'http://127.0.0.1:8090/selectTagById?prid='+item.prid" slot="img-link"></a>&ndash;&gt;

                    <el-image v-for="(item1,index1) in item.pro_imgs"
                              :slot="index1"
                              :src="item1.img"
                              alt=""
                              fit="cover"
                              @click="hrefContent(item.prid)"
                              class="imgs-width"/>

                    <span slot="img-collect">
        &lt;!&ndash;                {{item.pr_}}&ndash;&gt;
                    </span>
                    <span slot="img-go">
                        {{item.pr_go}}
                    </span>
                    <span slot="img-comment">
                        {{item.pr_comment_count}}
                    </span>
                    <span slot="img-click">
                        {{item.pr_click}}
                    </span>

                </water-fall-imgs>

        -->


        <water-fall-imgs v-for="(item,index) in WaterImgs" :img-links="imgLinks" :img-count="item.pr_img_count">
            <!--            <a :href="'http://127.0.0.1:8090/selectTagById?prid='+item.prid" slot="img-link">-->
             <!--   <el-avatar :size="40"
                           :src="item.user_avatar"
                           slot="img-avatar"
                           class="user-name"
                           @click="gotoUserMain(item)"
                          ></el-avatar>-->
            <img width="40" height="40" style="border-radius: 50%"
                       :src="item.user_avatar"
                       slot="img-avatar"
                       class="user-name"
                       @click="gotoUserMain(item)"
            ></img>
            <strong slot="img-name" class="user-name" @click="gotoUserMain(item)">
                {{item.user_name}}
            </strong>
            <span slot="img-text">
                {{item.pr_info}}
            </span>
            <el-button slot="img-tags"
                       type="info"
                       size="mini"
                       :plain="true"
                       :autofocus="false" v-for="(item2,index) in item.pr_tags"
                       @click="gotoContent(item2)" >
                {{item2.tags_name}}
            </el-button>
            <!--  <img v-for="(item1,index1) in item.pro_imgs"
                   :slot="index1"
                   :src="item1.img"
                   alt=""
                   class="imgs-width"  />-->
            <!--            <a :href="'http://127.0.0.1:8090/selectTagById?prid='+item.prid" slot="img-link"></a>-->

            <el-image v-for="(item1,index1) in item.pro_imgs"
                      :slot="index1"
                      :src="item1.img"
                      alt=""
                      fit="cover"
                      @click="hrefContent(item.prid)"
                      class="imgs-width"/>

            <span slot="img-collect"  v-on="isLoadUserCollect(item.prid)">
<!--                <el-link @click="clickUserCollect(item.prid)"-->
                <el-link @click="clickUserCollect(item)"

                         :underline="false"
                         type="info" >
                   <!-- <i :class="item.pr_comment_count==0?'el-icon-star-off':'el-icon-star-on givelike-icon'"></i>
                    {{item.pr_comment_count==1?'已收藏':'收藏'}}-->
                    <i :class="item.pr_go==0?'el-icon-star-off':'el-icon-star-on givelike-icon'"></i>
                    {{item.pr_go==1?'已收藏':'收藏'}}
                </el-link>
            </span>
            <span slot="img-go">
                {{item.pr_go}}
            </span>
            <span slot="img-comment">
<!--                {{item.pr_click}}-->
<!--                {{item.pr_click}}-->
                {{item.pr_comment_count}}
            </span>
            <span slot="img-click">
<!--                {{item.pr_click}}-->
<!--                {{item.pr_givelike}}-->
                 <el-link @click="clickUserGivelike(item)"
                          :underline="false"
                          type="info" >
                    <i class="el-icon-magic-stick" :class="isGivelikeOne==1?'givelike-icon':''"></i>
                    {{item.pr_givelike}}
                </el-link>
            </span>

        </water-fall-imgs>


    </div>
</template>

<script>
  import WaterFallImgs from '../WaterFall-cute-imgs'

  export default {
    name: "",
    components: {
      WaterFallImgs
    },
    props: {
      WaterImgs: {
        type: Array,
        default() {
          return [

          ]
        }
      },
      imgLinks: '',


    },
    data() {
      return {
        userCollect: {
          uid: 0,
          prid: 0,
        },
        isCollect: '收藏',
        proContent:{
          prid:0,
        },
        isGivelikeOne:0,
        userGivelike:{ //用户点赞表
          uid:0,
          prid:0
        }

      }
    },
    computed: {},
    methods: {
      hrefContent(index) {

        // var tempwindow=window.open('_blank');
        // tempwindow.location="http://127.0.0.1:8090/selectTagById?prid="+prid;
        // tempwindow.location="/c";
        // let routeData = this.$router.resolve({ path: '/content', query: { prid:index } });
        //打开新的页面显示内容
        let routeData = this.$router.resolve({path: '/content/' + index});
        window.open(routeData.href, '_blank');

      },
      //用户收藏
      clickUserCollect(index) {
        // alert(index.prid)
        this.userCollect.prid = index.prid
        this.userCollect.uid = this.$store.state.user.uid;

        //如果当前点赞数没有更新的话
        if(index.pr_go==0){
          if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null){
            axios.post("http://localhost:8090/insertUserCollect", this.userCollect)
                .then(res => {
                  // alert(res.data)
                  if (res.data == 1) {
                    index.pr_go = 1;
                    this.$message({
                      message: '收藏成功!',
                      type: 'success',
                      offset: 100
                    });
                  } else {
                    alert("请先登录！")
                  }

                })

          }else {
            alert("先登录才能收藏哦！")
          }

        }else {
          //取消收藏，删除用户收藏-作品关系表中的一行
          axios.post("http://localhost:8090/deleteUserCollect", this.userCollect)
              .then(res => {
                if (res.data == 1) {
                  index.pr_go = 0;
                  this.$message({
                    message: '已经取消收藏',
                    type: 'success',
                    offset: 100
                  });
                } else {
                  alert("请先登录！")
                }

              })

        }

      },
      isLoadUserCollect(index) {
      /*  this.userCollect.prid = index
        //用户id
        this.userCollect.uid = this.$store.state.user.uid;
        console.log("这里是用户收藏表")
        console.log(this.userCollect)
        if(this.$store.state.user.uid!="" && this.$store.state.user.uid!=null){
          axios.post("http://localhost:8090/judgeUserCollect", this.userCollect)
              .then(res => {
                console.log(res.data)
                if (res.data == 1) {
                  this.isCollect = "已收藏"
                }
              })
        }else {

        }
*/

      },
      //点赞功能
      /*clickUserGivelike(item){
        this.proContent.prid = item.prid;
        if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null) {
          this.isGivelikeOne++;
          if (this.isGivelikeOne == 1) {
            axios.post("http://localhost:8090/addPrClickByPrid", this.proContent)
                .then(res => {
                  console.log(res.data)
                  item.pr_givelike++
                  this.$message({
                    type: "success",
                    message: '感谢你的点赞！',
                    offset: 100
                  })

                })
          }
          if (this.isGivelikeOne == 2) {
            axios.post("http://localhost:8090/lessPrClickByPrid", this.proContent)
                .then(res => {
                  if (res.data == 1) {
                    item.pr_givelike--
                    this.isGivelikeOne = 0
                    this.$message({type: "success", message: '取消点赞', offset: 100})
                  }

                })

          }

        }else {
          alert("登录后才能点赞哦!")
        }
      },*/
      //点击添加用户点赞-作品关系表
      clickUserGivelike(item){
        this.userGivelike.prid = item.prid;

        if(this.$store.state.user.uid!='' && this.$store.state.user.uid!=null) {
          this.userGivelike.uid = this.$store.state.user.uid;
          axios.post("http://127.0.0.1:8090/insertGivelike",this.userGivelike)
              .then(res => {
                console.log(res.data)
                  item.pr_givelike = res.data

              })

        }else {
          alert("登录后才能点赞哦!")
        }
      },
      //跳转到圈子页面
      gotoContent(index){
        var tid = index.tid
        //打开新的页面显示内容
        let routeData = this.$router.resolve({path: '/circle-page/' + tid});
        window.open(routeData.href, '_blank');


      },
      gotoUserMain(index){
        var uid = index.uid
        //打开新的页面显示内容
        let routeData = this.$router.resolve({path: '/user-main/' + uid});
        window.open(routeData.href, '_blank');

      }
    },
    created() {
      // console.log(this.WaterImgs[0].pro_imgs.length);

      // alert("抬起鼠标")
      var _this = this

      //判断当前作品是否收藏
      function tagsUpload(j,i, length) {
        _this.userCollect.prid  = j
        _this.userCollect.uid = _this.$store.state.user.uid;
        if(_this.$store.state.user.uid!="" && _this.$store.state.user.uid!=null) {
          axios.post("http://localhost:8090/judgeUserCollect", _this.userCollect)
              .then(res => {
                console.log("这里是什么时候执行的啊")
                console.log(res.data)
                if (res.data == 1) {
                  // _this.WaterImgs[i].pr_comment_count = 1
                  _this.WaterImgs[i].pr_go = 1
                }else {
                  // _this.isCollect = "收藏"
                  _this.WaterImgs[i].pr_go = 0
                  // _this.WaterImgs[i].pr_comment_count = 0
                }
                if (++i < length) {
                  tagsUpload(--j, i, length);
                } else {
                }
              })
        }
      }
      tagsUpload(this.WaterImgs[0].prid,0, this.WaterImgs.length);


    },

  }
</script>

<style scoped>
    .imgs-width {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer; /*箭头变小手的效果*/
    }
    .user-name{
        cursor: pointer;
    }
    .user-name:hover{
        text-decoration: underline;
    }

    .givelike-icon{
        color: #ff6fa2;
    }



</style>