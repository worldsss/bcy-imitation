<template>
    <div>
<!--        所有主页显示的导航栏 @select="handleSelect"-->
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"

                 router="true">
            <el-menu-item >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586095787109&di=9d94e497c119221870c877eca449b9b0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F406662d67a08dfa8a2f552df19400886b240a4eb3781-btlcig_fw658" width="50" height="50" alt="">
            </el-menu-item>
            <el-menu-item index="1">推荐</el-menu-item>
            <el-menu-item index="2">关注</el-menu-item>
            <el-menu-item index="3">榜单</el-menu-item>
            <el-menu-item index="4">视频</el-menu-item>
            <el-menu-item index="img-page">绘画</el-menu-item>
            <el-menu-item index="6">COS</el-menu-item>
            <el-menu-item index="7">写作</el-menu-item>
            <el-menu-item index="8">问答</el-menu-item>
            <el-menu-item style="float: right;padding-left: 5px">
                <el-button type="danger" size="mini" v-popover:inputs style="background-color: #fb678b">
                    <i class="el-icon-edit-outline" style="color: white"></i>
                    发布
                </el-button>
            </el-menu-item>

            <el-popover width="200px"
                        placement="bottom-start"
                        ref="inputs"
                        trigger="hover">
                <p>测试</p>

            </el-popover>

            <el-menu-item style="float: right;">
                <el-badge is-dot class="item"><i class="el-icon-view"></i></el-badge>
            </el-menu-item>
            <el-menu-item style="float: right;">
                <el-avatar :size="40"
                           :src="circleUrl">
                    头像
                </el-avatar>
            </el-menu-item>
            <el-menu-item style="float: right;padding: 0">
                <el-input
                        placeholder="搜索cos,绘画,文字.."
                        suffix-icon="el-icon-search"
                        size="medium"
                        v-model="input1">
                </el-input>
            </el-menu-item>

        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
            }
        },
        methods: {
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
        }
    }
</script>

<style scoped>

</style>