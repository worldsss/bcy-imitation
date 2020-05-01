<template>
    <div>
        <el-container><!--style="border-bottom: 1px solid #e6e6e6"-->
            <el-header style="padding: 0">
                <input-nav></input-nav>

            </el-header>
            <el-main class="all-main">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in lunboImg" :key="item">
                        <img :src="item" alt="" style="width: 100%;height: 100%">
<!--                        <h3>{{ item }}</h3>-->
                    </el-carousel-item>
                </el-carousel>
                <div style="width: 100%;margin: 5px auto;height: 60px;text-align: center;border: 1px solid #e6e6e6;border-radius: 10px">
<!--                    @select="handleSelect"-->
                    <el-menu :default-active="activeIndex"
                             class="el-menu-demo"
                             style="width: 50%;margin: 0 auto;height: 60px;text-align: center"
                             mode="horizontal"
                             active-text-color="#fb678b"
                             >
                        <el-menu-item index="1">推荐</el-menu-item>
                        <el-menu-item index="2">关注</el-menu-item>
                        <el-menu-item index="3">榜单</el-menu-item>
                        <el-menu-item index="4">视频</el-menu-item>
                        <el-menu-item index="5">绘画</el-menu-item>
                        <el-menu-item index="6">COS</el-menu-item>
                        <el-menu-item index="7">写作</el-menu-item>
                        <el-menu-item index="8">问答</el-menu-item>

                    </el-menu>
                </div>


                <!-- 下面是不同的组件的代码-->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>


        </el-container>

    </div>
</template>

<script>
  import Vue from 'vue'
  import InputNav from '../components/public-page/Input-NavMenu'

  export default {
    name: "Index",
    components: {
      InputNav,
    },
    data() {
      return {
        input1: '',
        activeIndex: '/',
        lunboImg:['https://p9-bcy.byteimg.com/img/banciyuan/779d2d710f304e50a91e00825b2c3323~tplv-banciyuan-sq90.image',
          'https://p9-bcy.byteimg.com/img/banciyuan/95491050c9434d3fa21dc0c6b6136064~tplv-banciyuan-sq90.image',
          'https://p9-bcy.byteimg.com/img/banciyuan/f139b5cc25664951b7d5c085ae072b41~tplv-banciyuan-sq90.image',
          'https://p9-bcy.byteimg.com/img/banciyuan/22ee5b7b5983476a83901daff9e5a648~tplv-banciyuan-sq90.image']
      }
    },
    created() {
    /*  axios.get("http://127.0.0.1:8090/getSessionUserInfo")
          .then(res =>{
            console.log("这里是session中的对象"+res.data)
            //把当前已经登录的用户的信息再存入vuex中
            if(res.data!=null && res.data!=''){
              this.isUserShow = true
              //vue不推荐直接把值赋值给state中的属性，而是使用方法的方式赋值，这样才是响应式的
              this.$store.commit('addUserName',res.data)
            }else {
              this.isUserShow = false
            }
          })*/
    }

  }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    /*  .el-menu.el-menu--horizontal {
          border: 0px !important;
      }*/

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item {
        border-radius: 10px;
    }
</style>