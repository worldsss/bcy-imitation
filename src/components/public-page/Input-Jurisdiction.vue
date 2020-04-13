<template>
    <div>
        <el-card style="width: 60%;margin: 0 auto">
            <p style="text-align: left">权限设置</p>
            <el-radio-group v-model="radio" style="display:block;text-align: left">
                <el-radio :label="3" style="margin-bottom: 10px">所有人可见</el-radio>
                <br>
                <el-radio :label="6" style="margin-bottom: 10px">登录后可见</el-radio>
                <br>
                <el-radio :label="9">仅粉丝可见</el-radio>
            </el-radio-group>
            <br>
            <el-checkbox-group v-model="checkList" style="text-align: left">
                <el-checkbox label="允许右键"></el-checkbox>
                <el-checkbox label="添加水印"></el-checkbox>
            </el-checkbox-group>
            <p style="text-align: left">转载规则</p>
            <el-select
                    v-model="value"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    placeholder="请选择文章标签"
                    style="float: left">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <br><br>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "InputJurisdiction",
        data(){
            return{
                radio: 3,
                checkList: ['允许右键'],
                options: [{
                    value: '署名+原地址',
                    label: '署名+原地址'
                }, {
                    value: '非商业性使用',
                    label: '非商业性使用'
                }, {
                    value: '禁止未授权转载',
                    label: '禁止未授权转载'
                },{
                    value: '禁止修改',
                    label: '禁止修改'
                }],
                value: []
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
            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },

        }
    }
</script>

<style scoped>

</style>