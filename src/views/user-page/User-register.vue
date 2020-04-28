<template>
    <div>
        <input-nav-menu></input-nav-menu>
        <div style="width: 100%;height: 700px;background-image: url(https://img-bcy-qnpubin.pstatp.com/Image/bg_cat4-17420cacdf.png)">
            <div style="position: absolute;top: 25%;left: 35%;width: 500px;">
                <el-card>
                    <h3>现在就加入半次元</h3>
                    <el-input placeholder="请输入用户名"
                              prefix-icon="el-icon-user" v-model="user.user_name" @blur="judgeUserName()"></el-input>
                    <br><br>
                    <el-input placeholder="请输入密码"
                              prefix-icon="el-icon-question" v-model="user.user_password"></el-input>
                    <br><br>
                    <el-checkbox v-model="checked">我已阅读并同意《半次元用户协议》和《隐私政策》</el-checkbox>
                    <br><br>
                    <div style="text-align: center">
                    <el-button class="bcy-buttons" style="width: 80%;text-align: center" @click="insertUser">创建账号</el-button>

                    </div>
                </el-card>

            </div>

        </div>

    </div>
</template>

<script>
    import InputNavMenu from '../../components/public-page/Input-NavMenu'


  export default {
    name: "",
    components:{
      InputNavMenu
    },
    data () {
      return {
        user:{
          user_name:'',
          user_password:'',
          user_avatar:'staticUserAvatar.jpg'
        },
        checked:false,
      };
    },
    methods:{
      insertUser(){
        axios.post("http://127.0.0.1:8090/insertUser",this.user)
        .then(res =>{
          console.log(res.data)
          if(res.data=="成功"){
            alert("注册成功！")
            this.$router.replace('/user-login')
          }
        })
      },
      judgeUserName(){
        axios.post("http://127.0.0.1:8090/judgeUserName",this.user)
            .then(res =>{
              console.log(res.data)
              if(res.data=="成功"){

              }else {
                alert("用户名重复")
                this.user.user_name = ""
              }
            })

      }
    }
  }
</script>

<style scoped>

</style>