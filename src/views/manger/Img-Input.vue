<template>
    <div>
        <!--        填写页面的导航栏-->
        <input-nav></input-nav>


        <el-main style="width: 60%;margin: 0 auto">
            <el-card>
                <h2>发布图片</h2>
                <el-divider></el-divider>
               <!-- <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                        <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                            <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file)"
                            >
                                <i class="el-icon-zoom-in"></i>
                            </span>
                            <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleDownload(file)"
                            >
          <i class="el-icon-download"></i>
        </span>
        <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>

                <p>点击添加图片</p>-->
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


                <p style="text-align: left">想说的话</p>
                <div style="margin: 20px 0;"></div>
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 4, maxRows: 4}"
                        placeholder="有什么想说的就写在这里吧，盗用会被关小黑屋哦"
                        v-model="textarea2">
                </el-input>

                <p style="text-align: left">更多标签</p>
                <el-tag :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)"
                        style="float: left">
                    {{tag}}
                </el-tag>
                <el-input
                        class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" style="float: left" size="small" @click="showInput">
                    添加标签+
                </el-button>
                <br><br>
                <p style="opacity: 0.5;text-align: left">
                    推荐标签（合适的标签能带来更多赞，COS、插画、绘画作品请打上‘COS’、‘插画’、‘绘画’标签哦)
                </p>
                <el-tag :key="tag"
                        v-for="tag in modelTags"
                        :disable-transitions="false"
                        @click="clickAddTag(tag)">
                    {{tag}}
                </el-tag>

            </el-card>
            <br>
            <el-card>
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
    import InputNavMenu from "../../components/public-page/Input-NavMenu"
    import Vue from 'vue'

    Vue.component("input-nav", InputNavMenu)
    export default {
        name: "ImgInput",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                textarea1: '',
                textarea2: '',
                modelTags: ['限定捏土', 'jk', '汉服', 'Lolita', '手写', 'cos'],
                dynamicTags: [],
                inputVisible: false,
                inputValue: '',
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
                }, {
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
            handleDownload(file) {
                console.log(file);
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            clickAddTag(tag) {
                this.dynamicTags.push(tag)
            }
        }
    }
</script>

<style>
    .el-tag {
        margin: 0px 5px;
    }

</style>