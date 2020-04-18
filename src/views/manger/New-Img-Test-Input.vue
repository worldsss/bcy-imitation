<template>
    <div>
        <el-upload
                class="upload-file"
                drag
                :action="doUpload"
                :before-upload="beforeUpload"
                ref="newupload"
                multiple
                :auto-upload="false">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

        <button @click="newSubmitForm"></button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        doUpload: 'http://l/uploads'

      }
    },
    methods: {
      beforeUpload(file) {
        let fd = new FormData();
        fd.append('file', file);//传文件
        // fd.append('srid', this.aqForm.srid);//传其他参数
        axios.post('/api/uploads', fd).then(function (res) {
          alert('成功');
        }).catch(err =>{

        })

      },
      newSubmitForm() {//确定上传
        this.$refs.newupload.submit();
      }
    }
  }
</script>

<style scoped>

</style>