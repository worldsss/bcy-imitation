<template>
    <div>
        <input-nav-menu></input-nav-menu>
        <div style="width: 100%;height: 700px;background-image: url(https://img-bcy-qnpubin.pstatp.com/Image/bg_cat4-17420cacdf.png)">
            <div style="position: absolute;top: 25%;left: 35%;width: 500px;">
                <el-card>
                    <div style="width: 60%;margin: 0 auto">
                        <el-image src="https://img-bcy-qnpubin.pstatp.com/Image/logo/logo_login-8762776905.png">

                        </el-image>
                    </div>
                    <br>
                    <el-input placeholder="请输入用户名"
                              prefix-icon="el-icon-user" v-model="user.user_name"></el-input>
                    <br><br>
                    <el-input placeholder="请输入密码"
                              prefix-icon="el-icon-question" v-model="user.user_password"></el-input>
                    <br><br>
                    <el-link type="primary">注册账号</el-link>
                    <br><br>
                    <div style="text-align: center">
                        <el-button class="bcy-buttons" style="width: 80%;text-align: center" @click="insertUser">登录</el-button>

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
          uid:0,
          user_name:'',
          user_password:'',
          user_avatar:'staticUserAvatar.jpg',
        },
        checked:false,
      };
    },
    methods:{
      insertUser(){
        axios.post("http://127.0.0.1:8090/userLogin",this.user)
            .then(res =>{
              console.log(res.data)
              // alert('登录成功')
              // alert(res.data)
              if(res.data!=''){
                // alert("登录成功")
                this.$message({
                  message: '登录成功!',
                  type: 'success',
                  offset: 100
                });
                // this.user.uid = res.data

                this.user = res.data
                this.$store.commit('addUserName',this.user)

                //试了半天，发现组件对vuex的判断比我发出请求到接受到session再赋值给vuex要快的多，没办法使用前端自己的session
                sessionStorage.setItem("userName",this.user.user_name)
                sessionStorage.setItem("uid",this.user.uid)
                sessionStorage.setItem("useAvatar",this.user.user_avatar)



                this.$router.replace("/")
              }else {
                alert("登录失败，请重新输入用户名或密码!")
              }


            })
      }
    }
  }
</script>

<style scoped>

</style>