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
                    v-model="text"
                    maxlength="30"
                    show-word-limit
            >
            </el-input>
            <div style="margin: 20px 0;"></div>
            <el-input
                    type="textarea"
                    placeholder="作者有话说：介绍一下你的作品设定，阅读提示吧"
                    v-model="textarea"
                    maxlength="300"
                    :autosize="{ minRows: 3, maxRows: 4}"
                    show-word-limit
                    style="margin-bottom: 10px"
            >
            </el-input>
            <br>
<!--            mavon的markdown编辑器-->
            <div id="main" >
                <mavon-editor v-model="value" style="height: 500px" placeholder="输入正文,15000字以内，搬运他人作品不注明作者，会被关小黑屋哦~" />
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

            <input-tag></input-tag>


        </el-card>
        <br>
        <input-jurs></input-jurs>
        <br>
        <div style="text-align: center">
            <el-button type="danger">
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

    Vue.use(mavonEditor)
    Vue.component("input-nav",InputNavMenu)
    Vue.component("input-tag",InputTag)
    Vue.component("input-jurs",InputJurs)
    export default {
        name: "TestInput",
        data(){
            return{
                value:'',
                text: '',
                textarea: '',
                inputVisible: false,
                inputValue: '',
            }
        },
        methods:{
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

        }

    }
</script>
<link rel="stylesheet" href="G:\Vue-project\bcy-imitation\node_modules\editor.md\css\editormd.css">
<style scoped>

</style>