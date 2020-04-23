<template>
    <div>
        <input-nav></input-nav>
        <el-main style="width: 60%;margin:0 auto">
            <el-card>
                <h3>发布问题</h3>
                <el-divider></el-divider>

                <!--                问题标题-->
                <el-input placeholder="问题标题" v-model="quContent.qu_text">

                </el-input>
                <br><br>
                <!--                问题简介-->
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 8}"
                        placeholder="加入问题的细节的补充说明或尝试自己先做答，可能会掉落更多的回答哦"
                        v-model="quContent.qu_info">
                </el-input>
                <br><br>
                <!--                添加图片-->
                <div style="" class="addimg-div">
                    <img :src="img" alt="" class="my-uploadimg-style"/>
                    <el-button type="danger"
                               class="my-uploadbutton-style"
                               icon="el-icon-delete"
                               @click="removeImg"
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


                <!--                <input-tag></input-tag>-->

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
  import InputTag from '../../components/public-page/Input-Tag'
  import InputNavMenu from "../../components/public-page/Input-NavMenu";
  import InputJurs from "../../components/public-page/Input-Jurisdiction";


  export default {
    name: "",
    components: {
      InputTag,
      InputNavMenu,
      InputJurs
    },
    data() {
      return {
        //上传到服务器中提交文字的对象
        quContent: {
          qu_text: '',
          qu_info: '',
          qu_date: '',
        },
        quImgs: {
          img: "",
        },
        quimg: [],//用于保存当前上传的图片数组，上传之前循环赋值给要上传的字段
        img: '',//这里是上传图片的显示
        doUpload: '',//这里是错误的上传地址，用来阻断默认的上传事件
        dialogVisible: false,//是否显示模态框，用来显示大图
        dialogImageUrl: '', //模特框中图片的地址

      }
    },
    methods: {
      beforeUpload(file) {

        let fd = new FormData();
        fd.append('file', file);//传文件

        //在点击上传之后才会执行的异步操作
        axios.post("http://127.0.0.1:8090/uploadQuImgs", fd)
            .then(res => {
              console.log(res.data)

            }).catch(err => {

        })

      },
      change(file) {
        console.log(file)
        // this.img = file.url
        //把当前上传的文件的名字赋值给要上传的数据库中的img里
        this.quimg.push("http://localhost:8090/static/quimg/" + file.name)

        // this.proContent.pr_img = "http://localhost:8090/static/img/" + file.name
      },
      //真正的上传事件
      newSubmitForm() {//确定上传
        const _this = this
        axios.post("http://127.0.0.1:8090/insertQuContent", this.quContent)
            .then(res => {
              console.log(res)
              //把当前要上传的quid赋值给qu_imgs中的外键约束

              function recurTest(j, length) {

                _this.quImgs.img = _this.quimg[j]
                axios.post("http://127.0.0.1:8090/insertQuImg", _this.quImgs)
                    .then(res => {
                      console.log("第" + (j + 1) + "次循环");
                      if (++j < length) {
                        recurTest(j, length);
                      }
                    })

              }

              recurTest(0, this.quimg.length);
            })


        //提交上传事件
        this.$refs.newupload.submit();

      },
      //在模态框中查看图片大图
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      removeImg() {
        this.img = ""
      },
    },
    created() {

    }


  }
</script>

<style scoped>

</style>