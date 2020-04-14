<template>
    <div>
        <!--        填写页面的导航栏-->
        <input-nav></input-nav>
        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>
                <!--  action="http://localhost:8081/upload"
                action="https://jsonplaceholder.typicode.com/posts/"-->
                <el-upload
                        action="http://localhost:8081/uploads/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" style="text-align: left"
                        :on-change="changeFile"  :before-upload="beforeupload">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <!--  <span> 点击添加图片，不得超过20m</span>-->
                <!-- <el-upload
                         class="upload-demo"
                         action="http://localhost:8081/uploads"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :before-remove="beforeRemove"
                         multiple
                         :limit="3"
                         :on-exceed="handleExceed"
                         :file-list="fileList">
                     <el-button size="small" type="primary">点击上传</el-button>
                     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                 </el-upload>-->

                <p style="text-align: left;opacity: 0.5">点击添加图片,不得超过20M</p>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>


                <div style="width:100%;overflow: hidden;margin-left:150px;">
                    <img :src="src" alt="" style="width:100%;"/>
                </div>
<!--                <img :src="src" alt="" style="width: 50px;height: 50px;border: 1px solid">-->
<!--
                <form action="http://localhost:8081/uploads" method="post" enctype="multipart/form-data">

                    <input type="file" name="file" value="点击上传">
                    <input type="submit" value="点击">
                </form>-->


                <p style="text-align: left">想说的话</p>
                <div style="margin: 20px 0;"></div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 4}"
                        placeholder="有什么想说的就写在这里吧，盗用会被关小黑屋哦"
                        v-model="textarea2">
                </el-input>

                <p style="text-align: left">更多标签</p>
                <el-tag :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)"
                        style="float: left">
                    {{tag}}
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
                <el-tag :key="tag"
                        v-for="tag in modelTags"
                        :disable-transitions="false"
                        @click="clickAddTag(tag)">
                    {{tag}}
                </el-tag>

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
                <el-button type="danger" @click="insertProContent">
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


  Vue.component("input-nav", InputNavMenu)
  export default {
    name: "ImgInput",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        textarea1: '',
        textarea2: '',
        modelTags: ['限定捏土', 'jk', '汉服', 'Lolita', '手写', 'cos'],
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        testimg: '',
        src:'',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
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
        value: []
      }
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      changeFile(file) {
        console.log(file)
        // this.testimg = "G:/IDEA_Projects/bcy-imitation/src/main/java/com\\example\\bcyimitation\\img"+file.name
        // this.testimg = "http://localhost:8081/img/"+file.name
        // this.testimg = "G:/IDEA_Projects/bcy-imitation/src/main/resources/static/img" + file.name
        setTimeout(() =>{
          this.testimg = "http://localhost:8081/static/img/" + file.name
        },30)
      },
      beforeupload(file) {
        console.log(file);
        //创建临时的路径来展示图片
        var windowURL = window.URL || window.webkitURL;

        this.src=windowURL.createObjectURL(file);

      },
      handlePictureCardPreview(file) {
        console.log(file)
        // this.dialogImageUrl =  "G:\\IDEA_Projects\\bcy-imitation\\src\\main\\java\\com\\example\\bcyimitation\\img"+file;
        this.dialogImageUrl = file.url
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
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
      clickAddTag(tag) {
        this.dynamicTags.push(tag)
      },
      insertProContent() {
        console.log(this.testimg)
        request01({
          url: `test`,
          params: {
            uid: 1,
            prid: 1,
            cid: 1,
            pr_img: this.testimg,
            pr_info: this.textarea2,
            pr_date: `123213`,
            pr_givelike: 200
          },
          method: 'get',
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })

        /*  axios.get("http://localhost:8081/test",{
                params:{
                  uid: 1,
                  prid: 1,
                  cid: 1,
                  pr_img: "11",
                  pr_info:"哈哈哈",
                  pr_date:"123213",
                  pr_givelike:200
                },
            headers: {'content-type': 'application/x-www-form-urlencoded'}
          }).then(res =>{
            console.log(res)
          })*/


      },
    }
  }
</script>

<style>
    .el-tag {
        margin: 0px 5px;
    }

</style>