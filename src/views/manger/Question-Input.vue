<template>
    <div>
        <input-nav></input-nav>
        <el-main style="width: 60%;margin:0 auto">
            <el-card>
                <h3>发布问题</h3>
                <el-divider></el-divider>
                <el-input placeholder="问题标题" v-model="questiontitle">

                </el-input>
                <br><br>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 8}"
                        placeholder="加入问题的细节的补充说明或尝试自己先做答，可能会掉落更多的回答哦"
                        v-model="textarea2">
                </el-input>
                <br><br>
                <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove" style="text-align: left">
                    <i class="el-icon-plus"></i>
                  <!--  <span> 点击添加图片，不得超过20m</span>-->

                </el-upload>
                <p style="text-align: left;opacity: 0.5">点击添加图片,不得超过20M</p>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

                <input-tag></input-tag>

            </el-card>
            <br>
            <div style="text-align: center">
                <el-button type="danger">
                    <i class="el-icon-edit-outline"></i>&nbsp;发布
                </el-button>
            </div>

        </el-main>

    </div>
</template>

<script>
    import Vue from 'vue'
    import InputTag from '../../components/public-page/Input-Tag'
    import InputNavMenu from "../../components/public-page/Input-NavMenu";
    import InputJurs from "../../components/public-page/Input-Jurisdiction";
    Vue.component("input-tag",InputTag)
    Vue.component("input-nav",InputNavMenu)
    Vue.component("input-jurs",InputJurs)
    export default {
        name: "",
        data(){
            return{
                questiontitle:"",
                textarea2:"",
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>