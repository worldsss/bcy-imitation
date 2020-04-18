<template>
    <div>

        <div style="" class="addimg-div" v-for="(item,index) in addimgarr">
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

        <!--        当点击这个发布时，上传事件才发生-->
        <button @click="newSubmitForm">发布</button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        doUpload: 'http://l/uploads',
        dialogImageUrl: '',
        dialogVisible: false, //是否显示模态框
        addimgarr: [], //用来显示正在等待上传时的图片数组

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
        this.addimgarr.push(file.url)
      },
      //真正的上传事件
      newSubmitForm() {//确定上传
        this.$refs.newupload.submit();
      },
      //在模态框中查看图片大图
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>
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

</style>