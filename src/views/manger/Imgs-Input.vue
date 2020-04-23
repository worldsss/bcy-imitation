<template>
    <div>
        <!-- 填写页面的导航栏-->
        <InputNavMenu>

        </InputNavMenu>
        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>

                <div style="" class="addimg-div" v-for="(item,index) in img">
                    <img :src="item" alt="" class="my-uploadimg-style"/>
                    <el-button type="danger"
                               class="my-uploadbutton-style"
                               icon="el-icon-delete"
                               @click="removeImg(index)"
                               circle>
                    </el-button>
                </div>
                <el-upload
                        class="upload-file"
                        list-type="picture-card"
                        :action="doUpload"
                        :before-upload="beforeUpload"
                        ref="newupload"
                        multiple
                        :auto-upload="false"
                        :on-preview="handlePictureCardPreview"
                        :on-change="change">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <!--        模特框，用来显示上传列表中的大图-->
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>


                <p style="text-align: left;opacity: 0.5">点击添加图片,只能发布一张</p>
                <p style="text-align: left">想说的话</p>
                <div style="margin: 20px 0;"></div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 4}"
                        placeholder="有什么想说的就写在这里吧，盗用会被关小黑屋哦"
                        v-model="proContent.pr_info">
                </el-input>

                <input-tag :model-tags="modelTags" :dynamic-tags="dynamicTags">

                </input-tag>

            </el-card>
            <br>
            <el-card>
                <p style="text-align: left">权限设置</p>
                <el-radio-group v-model="radio" style="display:block;text-align: left">
                    <el-radio :label="3" style="margin-bottom: 10px">所有人可见</el-radio>
                    <br>
                    <el-radio :label="6" style="margin-bottom: 10px">登录后可见</el-radio>
                    <br>
                    <el-radio :label="9">仅粉丝可见</el-radio>
                </el-radio-group>
                <br>
                <el-checkbox-group v-model="checkList" style="text-align: left">
                    <el-checkbox label="允许右键"></el-checkbox>
                    <el-checkbox label="添加水印"></el-checkbox>
                </el-checkbox-group>
                <p style="text-align: left">转载规则</p>
                <el-select
                        v-model="value"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择文章标签"
                        style="float: left">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <br><br>
            </el-card>
            <br>
            <div style="text-align: center">
                <el-button type="danger" @click="newSubmitForm">
                    <i class="el-icon-edit-outline"></i>&nbsp;发布
                </el-button>
            </div>
        </el-main>
    </div>

</template>

<script>
  import InputNavMenu from "../../components/public-page/Input-NavMenu"
  import Vue from 'vue'
  import {request01} from "../../network/request";
  import InputTag from '../../components/public-page/Input-Tag'


  Vue.component("input-nav", InputNavMenu)
  export default {
    name: "ImgInput",
    components: {
      InputNavMenu,
      InputTag
    },
    data() {
      return {
        disabled: false,
        modelTags: ['限定捏土', 'jk', '汉服', 'Lolita', '手写', 'cos'],//推荐添加的标签
        dynamicTags: [ /*{
          "tid": 0,
          "tags_name": "",
          "proIndexList": null
        }*/], //当前选择的标签

        doUpload: 'http://l/uploads',
        dialogImageUrl: '',
        dialogVisible: false, //是否显示模态框
        //表单上传值的对象
        proContent: {
          uid: "1",
          cid: "1",
          pr_img: "",
          pr_info: "",
          pr_date: "啊啊啊啊",
          pr_givelike: "0",
        },

        //上传单个图片的对象
        img: [], //上传到对应作品的图片

        radio: 3,
        checkList: ['允许右键'],
        options: [{
          value: '署名+原地址',
          label: '署名+原地址'
        }, {
          value: '非商业性使用',
          label: '非商业性使用'
        }, {
          value: '禁止未授权转载',
          label: '禁止未授权转载'
        }, {
          value: '禁止修改',
          label: '禁止修改'
        }],
        value: [],
        pro_tags: {
          tid: 0,
          prid: 0,
        },
        newPrid:0,
        //上传的多个对象
        proImgs:{
          img:'',
        },
        imgName:[], //这里存放的是将要传入数据库中的路径
      }
    },
    methods: {
      beforeUpload(file) {
        let fd = new FormData();
        fd.append('file', file);//传文件
        //在点击上传之后才会执行的异步操作
        axios.post("http://127.0.0.1:8090/uploads", fd).then(res => {
          // alert("上传成功")
          // console.log(res.data)

        }).catch(err => {

        })
      },
      change(file) {
        // this.proContent.pr_img = file.url
        // this.img = file.url
        //将要上传到数据库中的名称，为了可以直接在页面中显示才做的处理
        // this.proContent.pr_img = "http://localhost:8090/static/img/" + file.name

        //用于在页面上显示的值
        this.img.push(file.url)

        //用于在数据库中和查询出来的值里显示
        this.imgName.push("http://localhost:8090/static/img/" + file.name)


        // this.img.push("http://localhost:8090/static/img/" + file.name)
        // console.log(this.img)
        // alert(this.proContent.pr_img)

        console.log(this.imgName)
      },
      //真正的上传事件
      newSubmitForm() {//确定上传

        // console.log(this.dynamicTags)

        //格式化日期
        this.proContent.pr_date = new Date().toLocaleString() + "";

        //提交上传事件
        this.$refs.newupload.submit();
        // alert(this.proContent.pr_img)

        //把标签和当前作品的关系上传到pro_tags表中
        let _this = this

        axios.post("http://127.0.0.1:8090/test", this.proContent)
            .then(res => {
              // alert(res)
              // console.log(res.data)
              //把获得到的prid先存起来

              function recurTest(j, length) {
                _this.proImgs.img = _this.imgName[j]
                axios.post("http://127.0.0.1:8090/insertImgs", _this.proImgs)
                    .then(res => {
                      console.log("第" + (j + 1) + "次循环");
                      if (++j < length) {
                        recurTest(j, length);
                      }
                    })

              }

              recurTest(0, this.imgName.length);
            })

              //使用for循环不能解决异步请求最后的值都变为最后一个值的情况
              /*
                            for (var i=0;i<this.dynamicTags.length;i++){
                              this.pro_tags.tid = this.dynamicTags[i].tid
                              axios.post("http://localhost:8090/insertProTags", this.pro_tags)
                                  .then(res => {
                                    console.log(res)
                                  })
                            }*/
              /*  this.pro_tags.tid = 1;
                console.log(this.pro_tags)
                axios.post("http://localhost:8090/insertProTags", this.pro_tags)
                    .then(res => {
                      console.log(res)
                    })*/


              //在这里发送插入图片的请求就好了,循环整个图片数组，根据下标来插入数据
              /* for (var i = 0; i < this.img.length; i++) {

                 axios.post("/api/insertImgs", {
                   prid: dass,
                   img: this.img[i]
                 })
                     .then(res => {
                       console.log(res)
                     })
               }*/


              //跳转到推荐页面
              // this.$router.replace("/")

            .catch(err => {

        })






      },
      //在模态框中查看图片大图
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      removeImg(index) {
        this.img.splice(index,1)

      },

    },
    created() {
      axios.get("http://localhost:8090/showTags")
          .then(res => {
            // alert("获取成功")
            console.log(res.data)
            this.modelTags = res.data
          })


    }

  }
</script>

<style>
    .el-tag {
        margin: 0px 5px;
    }

    .my-uploadimg-style {
        width: 100%;
        filter: ;
        transition: filter 1s;
    }

    .addimg-div {
        width: 100%;
        overflow: hidden;
        position: relative
    }

    .my-uploadbutton-style {
        opacity: 0;
        position: absolute;
        bottom: 50%;
        left: 50%;
    }

    .addimg-div:hover .my-uploadimg-style {
        transition: filter 1s;
        filter: brightness(0.5);
    }

    /* .my-uploadimg-style:hover{
        !*opacity: 0.5;*!
         transition: filter 1s;
         !*transition: opacity 2s;*!
         filter: brightness(0.5);
     }
*/
    /*    不是父子关系时要用兄弟相连选择器，不能直接空格*/
    .my-uploadimg-style:hover + .my-uploadbutton-style {
        /*display: block;*/
        transition: opacity 1s;
        opacity: 1;

    }

    .my-uploadbutton-style:hover {
        opacity: 1;
    }

    /*  .my-uploadbutton-style:hover+.my-uploadimg-style{
          filter: brightness(0.5);
      }
  */

</style>