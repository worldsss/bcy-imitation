<template>
    <div>
        <!--        填写页面的导航栏-->
        <InputNavMenu>

        </InputNavMenu>
        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>
                <!--  action="http://localhost:8081/uploads/""
                action="https://jsonplaceholder.typicode.com/posts/"-->

                <!-- <img :src="src" alt="" style="width:100%;"/>-->
                <!--  <div style="width:100%;overflow: hidden;" v-html="addimgs">


                  </div>-->

                <div style="" class="addimg-div" v-for="(item,index) in addimgarr">
                    <img :src="item" alt="" class="my-uploadimg-style"/>
                    <!--                    <el-button type="danger" class="my-uploadbutton-style" @click="removeImg(index)" style="">删除</el-button>-->
                    <!--                    <button class="my-uploadbutton-style" style="" @click="removeImg(index)">删除</button>-->
                    <!--                    <button class="my-uploadbutton-style" style="" @click="removeImg(index)">删除</button>-->

                    <el-button type="danger" class="my-uploadbutton-style" icon="el-icon-delete"
                               @click="removeImg(index)" circle></el-button>
                </div>


                <el-upload
                        action="http://localhost:8090/uploads/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" style="text-align: left"
                        :on-change="changeFile"
                        :on-success="onSuccess"
                        :before-upload="beforeupload">
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

                <!--                这里是放大图片的显示-->
                <el-dialog :visible.sync="dialogVisible">
                    <!--                <el-dialog :visible.sync="true">-->
                    <!--                    <img width="100%" :src="dialogImageUrl" alt="">-->
                    <img width="100%" :src="src" alt="">
                </el-dialog>


                <!--  <div style="width:100%;overflow: hidden;margin-left:150px;">
                      <img :src="src" alt="" style="width:100%;"/>
                  </div>-->
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

               <input-tag></input-tag>

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
        // addimgs:`<img :src='src' style='width:100%'/>`,
        addimgs: '',
        addimgarr: [],
        uploadImgs:[],
        src: '',
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
        // this.addimgarr.
        alert("这里调用了？")
        var afx = 'blob:http://localhost:8080/' + file.name;
        for (var i = -1; i < this.addimgarr.length; i++) {
          if (this.addimgarr[i] == afx) {
            alert("删除这个")
          }
          alert("这里调用了？")
          console.log(this.addimgarr[i])
        }

      },
      changeFile(file) {
        console.log(file)
        // this.testimg = "G:/IDEA_Projects/bcy-imitation/src/main/java/com\\example\\bcyimitation\\img"+file.name
        // this.testimg = "http://localhost:8081/img/"+file.name
        // this.testimg = "G:/IDEA_Projects/bcy-imitation/src/main/resources/static/img" + file.name

        // this.testimg = "http://localhost:8081/static/img/" + file.name

        var imgs = "http://localhost:8090/static/img/" + file.name
        this.uploadImgs.push(imgs)

      /*  setTimeout(() => {
          // this.testimg = "http://localhost:8081/static/img/" + file.name
        }, 30)*/
      },
      beforeupload(file) {
        console.log(file);
        //创建临时的路径来展示图片
        var windowURL = window.URL || window.webkitURL;

        // this.src=windowURL.createObjectURL(file);
        var imgnumber = windowURL.createObjectURL(file);

        //在上面添加显示图片
        this.addimgs = this.addimgs + "<img src=" + imgnumber + " style='width:100%;'/>"
        // this.addimgs = this.addimgs + "<img src=" + file.url + " style='width:100%;'/>"

        //在图片数组中添加值
        this.addimgarr.push(imgnumber)
        // this.addimgarr.push(file.url)
        // alert(this.addimgarr)

        //重新写一个表单上传的方法
        this.param = new FormData();
        this.param.append('file', file, file.name);

        // var names = this.form.name;
        var names = "file";
        //下面append的东西就会到form表单数据的fields中；
        this.param.append('message', names);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        //然后通过下面的方式把内容通过axios来传到后台
        //下面的this.$reqs 是在主js中通过Vue.prototype.$reqs = axios 来把axios赋给它;
        /*  /!* this.$reqs.post("http://localhost:8081/uploads", this.param, config).then(function(result) {
             console.log(result);
           })*!/*/
        axios.post("http://localhost:8090/uploads", this.param, config)
            .then(res => {
              console.log(res)
            })

      },
      onSuccess(response, file, fileList) {
        /* alert("上传成功！")

         console.log(file.url)
         this.addimgarr.push(file.url)*/
        ;

        alert("上传成功！")

      },
      onSubmit() {//表单提交的事件


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
        var afx = 'blob:http://localhost:8080/' + file.name;
        for (var i = 0; i < this.addimgarr.length; i++) {
          if (this.addimgarr[i] == afx) {
            alert("删除这个")
          }
          console.log(this.addimgarr[i])
          console.log(afx)
        }

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
      /*  request01({
          url: `/test`,
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
*/

     /*   request01({
          url: `/test`,
          params: {
            uid: 1,
            prid: 1,
            cid: 1,
            pr_img: this.uploadImgs,
            pr_info: this.textarea2,
            pr_date: `123213`,
            pr_givelike: 200
          },
          method: 'get',
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })*/

        alert("发送请求")
           axios.get("http://localhost:8090/test",{
                 params:{
                   uid: 1,
                   prid: 1,
                   cid: 1,
                   pr_img: this.uploadImgs,
                   pr_info:this.textarea2,
                   pr_date:"123213",
                   pr_givelike:0
                 },
           }).then(res =>{
             console.log(res)
           })

      },
      //删除页面中显示的上传图片
      removeImg(index) {
        this.addimgarr.splice(index, 1)
        // delete this.addimgarr[index]
      },
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