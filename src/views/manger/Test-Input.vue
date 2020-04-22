<template>
    <div>
        <input-nav></input-nav>

        <br>
        <el-card style="width: 60%;margin: 0 auto">
            <h3>发布文字</h3>
            <el-divider></el-divider>
            <el-input
                    type="text"
                    placeholder="有趣的标题更吸引人(30字以内)"
                    v-model="Pc_content.pc_title"
                    maxlength="30"
                    show-word-limit
            >
            </el-input>
            <div style="margin: 20px 0;"></div>
            <el-input
                    type="textarea"
                    placeholder="作者有话说：介绍一下你的作品设定，阅读提示吧"
                    v-model="Pc_content.pc_info"
                    maxlength="300"
                    :autosize="{ minRows: 3, maxRows: 4}"
                    show-word-limit
                    style="margin-bottom: 10px"
            >
            </el-input>
            <br>
            <!--            mavon的markdown编辑器-->
            <div id="main">
                <mavon-editor v-model="Pc_content.pc_content"
                              style="height: 500px"
                              placeholder="输入正文,15000字以内，搬运他人作品不注明作者，会被关小黑屋哦~"
                              ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
            </div>
        </el-card>
        <br>
        <el-card style="width: 60%;margin: 0 auto;text-align: left">
            <p>选择合集</p>
            <el-select v-model="value" placeholder="选择合集">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"

                        :value="item.value">
                </el-option>
            </el-select>
            <el-link type="primary">创建合集</el-link>
            <br><br>
            <!-- 标签选择-->
            <input-tag></input-tag>


        </el-card>
        <br>
        <input-jurs></input-jurs>
        <br>
        <div style="text-align: center">
            <el-button type="danger" @click="submits()">
                <i class="el-icon-edit-outline"></i>&nbsp;发布
            </el-button>
        </div>

    </div>
</template>


<script>
  import Vue from 'vue'
  import mavonEditor from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import InputNavMenu from '../../components/public-page/Input-NavMenu'
  import InputTag from '../../components/public-page/Input-Tag'
  import InputJurs from '../../components/public-page/Input-Jurisdiction'
  import marked from 'marked'


  Vue.use(mavonEditor)
  Vue.component("input-nav", InputNavMenu)
  Vue.component("input-tag", InputTag)
  Vue.component("input-jurs", InputJurs)
  export default {
    name: "TestInput",
    data() {
      return {
        value: '', //markdown的编辑器
        text: '', //标题
        textarea: '', //描述
        inputVisible: false,
        inputValue: '',
        options: [1, 2, 3, 4],

        Pc_content:{
          pc_content:'',
          pc_title:'',
          pc_info:'',
        },
        img_file:[],
        file_url:'',
        content:'',
      }
    },
    methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      //提交整个文字内容
      submits(){
        //这里是Markdown的语法转换成html后的内容
        let markdown = this.$refs.md.d_render;
        alert(markdown)
        this.Pc_content.pc_content = markdown

        axios.post("http://localhost:8090/insertPcContent", this.Pc_content)
            .then(res =>{
              console.log(res)

            })
      },
      // 绑定@imgAdd event
      $imgAdd(pos, $file) {
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('file', $file);
        // this.img_file[pos] = "http://127.0.0.1:8090/static/img"+$file.name;
        this.file_url = "http://127.0.0.1:8090/static/img/"+$file.name;
        axios({
          url: 'http://127.0.0.1:8090/uploadsTextImg',
          method: 'post',
          data: formdata,
          // headers: { 'Content-Type': 'multipart/form-data' },
        }).then((res) => {
          let _res = res.data;
          console.log(res)
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          // this.$refs.md.$img2Url(pos, "<img src='"+this.file_url+"'/>");
          this.$refs.md.$imgUpdateByUrl(pos, this.file_url);


        })
      },
      $imgDel(pos) {
        delete this.img_file[pos];
      }

    },
    created() {
    }
  }
</script>

<style scoped>

</style>