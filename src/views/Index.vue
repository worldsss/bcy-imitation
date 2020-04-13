<template>
    <div>
        <el-container><!--style="border-bottom: 1px solid #e6e6e6"-->
            <el-header>
                <input-nav></input-nav>

            </el-header>
            <el-main style="width: 80%;margin: 0 auto;">
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
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
      }
    },

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