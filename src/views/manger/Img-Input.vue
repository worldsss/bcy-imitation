<template>
    <div>
        <!--        填写页面的导航栏-->
        <InputNavMenu>

        </InputNavMenu>
        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>

              <!--  <div style="" class="addimg-div" v-for="(item,index) in proContent.pr_img">
                    <img :src="item" alt="" class="my-uploadimg-style"/>
                    <el-button type="danger"
                               class="my-uploadbutton-style"
                               icon="el-icon-delete"
                               @click="removeImg(index)"
                               circle>
                    </el-button>
                </div>-->

                <div style="" class="addimg-div">
                    <img :src="proContent.pr_img" alt="" class="my-uploadimg-style"/>
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

               <!-- &lt;!&ndash;        当点击这个发布时，上传事件才发生&ndash;&gt;
                <button @click="newSubmitForm">发布</button>-->

                <p style="text-align: left;opacity: 0.5">点击添加图片,不得超过20M</p>
                <p style="text-align: left">想说的话</p>
                <div style="margin: 20px 0;"></div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 4}"
                        placeholder="有什么想说的就写在这里吧，盗用会被关小黑屋哦"
                        v-model="proContent.pr_info">
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
        modelTags: ['限定捏土', 'jk', '汉服', 'Lolita', '手写', 'cos'],
        doUpload: 'http://l/uploads',
        dialogImageUrl: '',
        dialogVisible: false, //是否显示模态框

        //表单上传的对象
        proContent:{
          uid:"1",
          prid:"1",
          cid:"1",
          pr_info: '',
          // pr_img: [],
          pr_img: "",
          pr_data: new Date(),
          pr_givelike:"0"
        },
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
      beforeUpload(file) {
        let fd = new FormData();
        fd.append('file', file);//传文件
        // fd.append('srid', this.aqForm.srid);//传其他参数


        //在点击上传之后才会执行的异步操作
        axios.post('/api/uploads', fd).then(function (res) {
          alert('上传成功');
        }).catch(err => {

        })

      },
      change(file){
        this.proContent.pr_img = file.url
      },
      //真正的上传事件
      newSubmitForm() {//确定上传
        this.$refs.newupload.submit();
        axios.post("/api/test",this.proContent).then(res =>{
          alert(res.data)
        })


      },
      //在模态框中查看图片大图
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }

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