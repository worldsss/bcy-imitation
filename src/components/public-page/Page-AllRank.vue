<template>
    <div>
        <el-row>
            <el-col :span="8">
                <!--  <el-card :body-style="{ padding: '0px' }">
                      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                           class="image-big">
                      <div style="position: absolute;left: 10px;bottom: 10px;display: inline-block">
                          <el-avatar :size="40"
                                     :src="circleUrl"
                                     style="float: left">
                              地理
                          </el-avatar>
                          <p style="color: white;float:right;margin: 10px">_Sheya</p>
                      </div>

                  </el-card>
                  -->

            </el-col>
            <!--
                        <page-tags v-for="(item,index) in rankinto">
                            <img slot="img"
                                 :src="item.img"
                                 class="image-small">
                            <el-avatar slot="avatar" :size="30"
                                       :src="item.avator"
                                       style="float: left"></el-avatar>
                            <span slot="name">
                            {{item.name}}
                        </span>
                            <span slot="img-counts">
                            {{item.counts}}
                        </span>
                        </page-tags>
                        -->


            <el-col :span="16">
                <el-row>
                    <page-ranks :rankinto="ranksinto01">

                    </page-ranks>

                </el-row>
                <el-row>
                    <page-ranks :rankinto="ranksinto02">

                    </page-ranks>
                </el-row>
            </el-col>

        </el-row>
    </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>