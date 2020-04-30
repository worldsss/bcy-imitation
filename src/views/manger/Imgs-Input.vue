<template>
    <div>
        <!-- 填写页面的导航栏-->
        <InputNavMenu>

        </InputNavMenu>
        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>

                <!--                图片的显示-->
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

                <!--                图片简介-->
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 4}"
                        placeholder="有什么想说的就写在这里吧，盗用会被关小黑屋哦"
                        v-model="proContent.pr_info">
                </el-input>

                <!-- 标签的标签-->
                <!--   <input-tag :model-tags="modelTags" :dynamic-tags="dynamicTags">

                   </input-tag>-->

                <div>
                    <p style="text-align: left">更多标签</p>
                    <!--  <el-tag :key="tag"
                              v-for="tag in dynamicTags"
                              closable
                              :disable-transitions="false"
                              @close="handleClose(tag)"
                              style="float: left">
                          {{tag}}
                      </el-tag>-->
                    <el-tag :key="index"
                            v-for="(tag,index) in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)"
                            style="float: left">
                        {{tag.tags_name}}
                    </el-tag>

                    <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" style="float: left" size="small" @click="showInput">
                        添加标签+
                    </el-button>
                    <br><br>
                    <p style="opacity: 0.5;text-align: left">
                        推荐标签（合适的标签能带来更多赞，COS、插画、绘画作品请打上‘COS’、‘插画’、‘绘画’标签哦)
                    </p>
                    <!--        :key="tag.index"-->
                    <!-- <el-tag
                             v-for="(tags,index) in modelTags"
                             :disable-transitions="false"
                             @click="addTags(tags)">
                         {{tags}}
                     </el-tag>-->
                    <el-tag
                            v-for="(tags,index) in modelTags"
                            :disable-transitions="false"
                            @click="addTags(tags)">
                        {{tags.tags_name}}
                    </el-tag>
                </div>

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
<!--                <el-button type="danger" @click="newSubmitForm">-->
              <!--  <el-button type="danger" @mousedown="newSubmitForm" @mouseup="insertTags">
                    <i class="el-icon-edit-outline"></i>&nbsp;发布
                </el-button>-->

                <button  @mousedown="newSubmitForm" @mouseleave="insertTags">发布</button>
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
        dynamicTags: [], //当前选择的标签

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
        /* dynamicTags: {
           tid: 0,
           // prid: 0,
         },*/
        newPrid: 0,
        //上传的多个对象
        proImgs: {
          img: '',
        },
        imgName: [], //这里存放的是将要传入数据库中的路径
        pro_tags: { //这里是真正要上传到服务器中的对象
          tid: 0,
          prid:0
        },
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        textarea1: '',
        textarea2: '',
        inputVisible: false,
        inputValue: '',
        moretags: false,
        updateImgByPrid:{
          pr_img:'',
          prid:0,
        }


      }
    },
    methods: {
      beforeUpload(file) {
        let fd = new FormData();
        fd.append('file', file);//传文件
        //在点击上传之后才会执行的异步操作，上传当前的图片
        axios.post("http://127.0.0.1:8090/uploads", fd).then(res => {
          // alert("上传成功")
          // console.log(res.data)

        }).catch(err => {

        })
      },
      change(file) {
        //用于在页面上显示的值
        this.img.push(file.url)

        //用于在数据库中和查询出来的值里显示
        this.imgName.push("http://localhost:8090/static/img/" + file.name)
        console.log(this.imgName)
      },
      //真正的上传事件
      newSubmitForm() {//确定上传
        alert("点击鼠标")
        //格式化日期
        this.proContent.pr_date = new Date().toLocaleString() + "";
        //提交上传事件
        this.$refs.newupload.submit();
        // alert(this.proContent.pr_img)

        //把标签和当前作品的关系上传到dynamicTags表中
        let _this = this

        //把当前的用户id传入到后台中去
        this.proContent.uid = this.$store.state.user.uid
        axios.post("http://127.0.0.1:8090/test", this.proContent)
            .then(res => {

              function recurTest(j, length) {
                _this.proImgs.img = _this.imgName[j]
                axios.post("http://127.0.0.1:8090/insertImgs", _this.proImgs)
                    .then(res => {
                      console.log("第" + (j + 1) + "次插入图片");

                      if(res.data!=''){
                        //当上传第一张图片的时候就把表中的首图的内容改变就好了
                        if(j==0){

                          _this.updateImgByPrid.pr_img = _this.imgName[j]
                          //获取已经插入进去的最新的prid
                          _this.updateImgByPrid.prid = res.data
                              axios.post("http://127.0.0.1:8090/updateProImgByPrid", _this.updateImgByPrid)
                                  .then(res =>{
                                    console.log(res.data)
                                    alert(res.data)
                                  })
                        }
                      }


                      if (++j < length) {
                        recurTest(j, length);
                      } else {
                        //最后一次循环退出时,发送改变当前pro_content中的图片个数的字段，在图片上传完成之后发送
                        axios.get("http://127.0.0.1:8090/updateProImgCount")
                            .then(res => {
                              console.log("这里是1的话图片个数修改成功" + res)


                            })
                      }
                    })
              }

              recurTest(0, this.imgName.length);



              /*  console.log(_this.dynamicTags)
                 axios({
                   method:'POST',
                   headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                   },
                   url:'http://127.0.0.1:8090/insertForProTags'
                 },_this.dynamicTags)
                 .then(res =>{
                   console.log(res)
                 })*/

              /*axios.post("http://127.0.0.1:8090/insertForProTags", _this.dynamicTags)
                  .then(res => {
                    console.log("第" + (j + 1) + "次插入标签");
                    if (++j < length) {
                      recurTest(j, length);
                    }
                  })*/

            })





            .catch(err => {

            })


      },
      insertTags(){

        alert("抬起鼠标")
        var _this = this
        function tagsUpload(j, length) {
          console.log(_this.dynamicTags)
          _this.pro_tags.tid = _this.dynamicTags[j].tid
          axios.post("http://localhost:8090/insertProTags", _this.pro_tags)
              .then(res => {
                if (++j < length) {
                  tagsUpload(j, length);
                }else{

                }

              })

        }

        tagsUpload(0, this.dynamicTags.length);
        //跳转到推荐页面
        // this.$router.push("/")
        _this.$router.go(-1)
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      //在模态框中查看图片大图
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      removeImg(index) {
        this.img.splice(index, 1)

      },
      addTags(index) {
        console.log(index.tags_name)
        if (this.dynamicTags == "") {
          // alert("第一次点击")
          this.dynamicTags.push(index)
          console.log(this.dynamicTags)
        } else {
          for (var i = 0; i < this.dynamicTags.length; i++) {
            if (this.dynamicTags[i].tags_name == index.tags_name) {
              this.moretags = false
              alert("不能添加相同的标签")
            } else {
              this.moretags = true

            }
          }
          if (this.moretags) {
            this.dynamicTags.push(index)
            console.log(this.dynamicTags)
          }
        }

      },

    },


    created() {

      //请求推荐的标签名称
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