<template>
    <div>
        <input-nav></input-nav>
        <br>
        <el-row :gutter="20" style="width: 80%;margin:0 auto">
            <el-col :span="18">
                <el-card>
                    <div style="width: 80%;margin: 0 auto">
                        <span>2020-04-12</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>119字</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>46条评论</span>
                        <br><br>
                        <div>
                            <el-tag><i class="el-icon-s-management"></i>明日方舟</el-tag>
                            <el-tag>推进之王</el-tag>
                        </div>
                        <el-divider></el-divider>

                    </div>

                </el-card>
                <div>
                    <img src="https://img-bcy-qn.pstatp.com/editor/flag/17aw7/953e45c06fed11ea95b3073f3ddd4da3.jpg"
                         alt="">
                    <img src="https://img-bcy-qn.pstatp.com/editor/flag/17aw7/953e45c06fed11ea95b3073f3ddd4da3.jpg"
                         alt="">
                </div>

                <el-card>
                    <el-input type="textarea" placeholder="请输入评论吧" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
                    <el-button size="small" icon="el-icon-picture-outline">图片</el-button>
                    <el-button size="small" icon="el-icon-picture-outline">表情</el-button>
                    <el-button class="bcy-button" style="float: right">评论</el-button>
<!--                    <span><i class="el-icon-picture-outline"></i>图片</span>-->
                    <br>
                    <span>共 <span>16</span>评论</span>
                    <el-button class="bcy-button">按热度排序</el-button>
                    <el-button class="bcy-button">按发布排序</el-button>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card style="text-align: center;margin-bottom: 10px">
                    <el-avatar src="3.jpg" :size="80"></el-avatar>
                    <p>姓名</p>
                    <span>关注 17</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>粉丝&nbsp;14</span>
                    <p class="my-opacity">会写小说懒的写</p>
                    <el-button>关注</el-button>
                    <el-button icon="el-icon-message">私信</el-button>
                    <el-button>勾搭</el-button>
                </el-card>
                <el-card id="choucan">
                    <el-row :gutter="10">
                     <el-col :span="6">
                         <el-button style="width: 100%;">收藏</el-button>

                     </el-col>
                     <el-col :span="18">
                         <el-button style="width: 100%;"><i class="el-icon-magic-stick"></i> 赞 <span>242</span></el-button>

                     </el-col>
                    </el-row>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
  import InputNav from '../components/public-page/Input-NavMenu'

  export default {
    name: "Content",
    components: {
      InputNav
    }
  }
</script>

<style >
    #choucan .el-card__body{
        padding: 10px;
    }
    .my-opacity{
        opacity: 0.5;
    }

</style>