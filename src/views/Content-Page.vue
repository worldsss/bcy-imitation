<template>
    <div>
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
            <el-col :span="6">
                <el-card style="text-align: center;margin-bottom: 10px">
<!--                    <el-avatar src="3.jpg" :size="80"></el-avatar>-->
                    <img :src="'http://localhost:8080/'+nowUser.user_avatar" alt="" width="80" height="80" style="border-radius: 50%">
<!--                    <p>姓名</p>-->
                    <p>{{this.nowUser.user_name}}</p>
                    <span>关注 17</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>粉丝&nbsp;14</span>
                    <p class="my-opacity">会写小说懒的写</p>
                    <el-button>关注</el-button>
                    <el-button icon="el-icon-message">私信</el-button>
                    <el-button>勾搭</el-button>
                </el-card>
                <el-card id="choucan">
                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-button style="width: 100%;">收藏</el-button>

                        </el-col>
                        <el-col :span="18">
                            <el-button style="width: 100%;"><i class="el-icon-magic-stick"></i> 赞 <span>242</span>
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
          pr_info: '',
          pr_date: '',
          pr_go: 0,
          pro_imgs: [],
          pr_tags: [],
        },
        imgList:[], //图片大图预览
        testImgList:[],
        pcContent:{
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
        userAvatar:'',
        nowUser:{
          uid:0,
          user_name:'',
          user_avatar:'',
        }
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
            for (var i=0;i<this.ProContent.pro_imgs.length;i++){
              this.imgList.push(this.ProContent.pro_imgs[i].img)
            }

          })

      axios.get("http://127.0.0.1:8090/selectPcIndexByPcid?pcid=" + prid)
          .then(res => {
            console.log(res)
            this.pcContent = res.data
            console.log(this.pcContent)

          })

      axios.get("http://127.0.0.1:8090/getUserByPrid?prid=" + prid)
          .then(res => {
            console.log(res.data)
            this.nowUser = res.data

          })


      /*  if(this.$store.state.user.user_avatar!='' && this.$store.state.user.user_avatar!=null){
          this.userAvatar = this.$store.state.user.user_avatar

        }
      alert(this.userAvatar)*/

    }
  }
</script>

<style>
    #choucan .el-card__body {
        padding: 10px;
    }

    .my-opacity {
        opacity: 0.5;
    }
    .pc-content{

    }
    .pc-content img{
        width: 100%;
        height: auto;
    }

</style>
<style scoped>


    .pc-info{
        background-color: #f5f5fa;
        line-height: 50px;
        font-size: 16px;
        color: #a1a1b1;
        text-indent: 2em;
        border-radius: 5px;
    }


</style>