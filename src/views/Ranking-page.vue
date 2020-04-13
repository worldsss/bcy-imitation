<template>
    <div>
        <br>
        <div style="text-align: center">
            <el-link class="my-font-size" :underline="false">绘画榜</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link class="my-font-size" :underline="false">COS榜</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link class="my-font-size" :underline="false">写作榜</el-link>
        </div>
        <div style="text-align: center">
            <br>
            <el-button-group>
                <el-button type="info" :autofocus="true">周榜</el-button>
                <el-button type="info">日榜</el-button>
                <el-button type="info">新人榜</el-button>
            </el-button-group>
        </div>
        <br>

       <!-- <el-row :gutter="10">
            <el-col :span="5">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>

        </el-row>-->
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="34.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="35.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="37.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="33.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="34.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="35.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="p-div-height">
                    <img src="37.jpg" alt="" class="my-rank-img">
                </div>
                <div style="margin-top: 5px">
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-avatar src="45.jpg" :size="25"></el-avatar>
                        </el-col>
                        <el-col :span="13">
                            <p class="p-rank">
                                这里是名称
                            </p>
                        </el-col>
                        <el-col :span="8" class="p-givelike">
                            <p class="p-rank">
                                <i class="el-icon-magic-stick"></i>
                                10.1w
                            </p>
                        </el-col>
                    </el-row>
                </div>
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
    .my-font-size {
        font-size: 22px;
    }

    .my-rank-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;

    }
    .p-div-height{
        height: 400px;
        /*height: 350px;*/
    }

    .p-rank {
        margin-top: 5px;
        font-size: 14px;
    }

    .p-givelike {
        /*margin-top: 5px;*/
        font-size: 14px;
        text-align: right;
    }

</style>