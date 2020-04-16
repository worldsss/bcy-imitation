<template>
    <div style="background-color: #f0f0f0">
        <input-nav></input-nav>

        <div style="" id="user-set">
            <br>
            <div style="width: 60%;margin: 0 auto">
                <el-tabs v-model="activeName" style="padding: 10px 30px">
                    <el-tab-pane label="编辑资料" name="first" style="">
                        <el-card>
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="站内昵称">
                                    <el-input v-model="form.name"></el-input>
                                    <span style="opacity: 0.5;">请输入4-30位字符，支持中英文、数字、下划线或中划线
                                    修改昵称会造成已发布动态中@你的昵称失效</span>
                                </el-form-item>
                                <!-- <el-form-item label="活动区域">
                                     <el-select v-model="form.region" placeholder="请选择活动区域">
                                         <el-option label="区域一" value="shanghai"></el-option>
                                         <el-option label="区域二" value="beijing"></el-option>
                                     </el-select>
                                 </el-form-item>-->
                                <el-form-item label="地区">
                                    <el-cascader
                                            v-model="value"
                                            :options="options"></el-cascader>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio label="男"></el-radio>
                                        <el-radio label="女"></el-radio>
                                        <el-radio label="保密"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="个人简介">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>
                                <el-form-item label="身份标签">
                                    <el-tag
                                            :key="tag"
                                            v-for="tag in dynamicTags"
                                            closable
                                            :disable-transitions="false"
                                            @close="handleClose(tag)">
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
                                    <span>{{dynamicTags.length}}/3</span>
                                    <!--                                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
                                </el-form-item>
                                <el-form-item >
                                    <el-tag  v-for="(item,index) in tags" class="input-new-tag" @click="addTags(item)">{{item}}</el-tag>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="danger" @click="onSubmit">保存</el-button>
                                </el-form-item>
                                <br><br>
                            </el-form>
                        </el-card>

                    </el-tab-pane>
                    <el-tab-pane label="修改头像" name="second" >
                        <el-card >
                            <div style="width: 55%;margin: 0 auto">
                                <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove"
                                        :limit="1">
                                    <i class="el-icon-plus"></i>
                                </el-upload><!--:visible.sync="dialogVisible"-->
                                <el-dialog >
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                                <p>点击上传头像</p>
                                <span style="opacity: 0.5;font-size: 14px">请上传分辨率大于300x300的jpg或者png图片，图片大小不要超过20M</span>
                                <br><br>
                                <el-button class="bcy-buttons">保存头像</el-button>
                                <el-button type="info">取消</el-button>

                            </div>


                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="修改封面" name="third">
                        <el-card >
                            <div style="width: 55%;margin: 0 auto">
                                <el-upload
                                        class="upload-demo"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        list-type="picture">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                                <p>点击上传封面</p>
                                <span style="opacity: 0.5;font-size: 14px">请上传分辨率大于1200x300的jpg或者png图片，图片大小不要超过20M，可上传多张图片随机显示哦</span>
                                <br><br>
                                <el-button class="bcy-buttons">保存头像</el-button>
                                <el-button type="info">取消</el-button>

                            </div>


                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="修改密码" name="fourth">
                        <el-card>
                            <el-form ref="form" :model="form" label-width="90px" style="width: 500px">
                                <el-form-item label="绑定手机号">
                                    <span>155*****456</span>
                                </el-form-item>
                                <el-form-item label="手机验证码" >
                                    <el-input style="width: 300px"></el-input><el-button class="bcy-buttons" style="display: inline-block">点击获取</el-button>
                                </el-form-item>
                                <el-form-item label="新密码">
                                    <el-input style="width: 300px"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="bcy-buttons">确认修改密码</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-tab-pane>
                    <el-tab-pane label="绑定关联" name="fifth">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="免打扰设置" name="sixed">
                        <el-card style="padding: 10px">
                            <br>
                            <strong>我可以被哪些人勾搭</strong>
                            <br>
                            <el-radio v-model="redio" label="1">所有人</el-radio>
                            <br>
                            <el-radio v-model="redio" label="2">所有人(禁止匿名)</el-radio>
                            <br>
                            <el-radio v-model="redio" label="3">我的粉丝</el-radio>
                            <br>
                            <el-radio v-model="redio" label="4">禁止任何人勾搭我</el-radio>
                            <br>
                            <br>
                            <strong>我可以被哪些人勾搭</strong>
                            <br>
                            <el-radio v-model="redio2" label="1">我关注的人(以及官方账号)</el-radio>
                            <br>
                            <el-radio v-model="redio2" label="2">所有人</el-radio>
                            <br>
                        </el-card>
                    </el-tab-pane>
                </el-tabs>
                <br><br>
            </div>
        </div>


    </div>
</template>

<script>
    import InputNav from '../../components/public-page/Input-NavMenu'

  export default {
    name: "",
    components:{
      InputNav
    },
    data() {
      return {
        activeName: 'first',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '男',
          desc: ''
        },
        dynamicTags: [],
        inputVisible: false,
        inputValue: '',
        imageUrl: '',
        redio:'1',
        redio2:'2',
        value: [],
        options: [{
          value: 'zhinan',
          label: '河南省',
          children: [{
            value: 'shejiyuanze',
            label: '郑州市',
            children: [{
              value: 'yizhi',
              label: '南阳市'
            }, {
              value: 'fankui',
              label: '开封市'
            }, {
              value: 'xiaolv',
              label: '洛阳市'
            }, {
              value: 'kekong',
              label: '平顶山市'
            }]
          }, {
            value: 'daohang',
            label: '开封市',
            children: [{
              value: 'cexiangdaohang',
              label: '洛阳市'
            }, {
              value: 'dingbudaohang',
              label: '平顶山市'
            }]
          },{
            value: 'daohang',
            label: '洛阳市',
            children: [{
              value: 'cexiangdaohang',
              label: '洛阳市'
            }, {
              value: 'dingbudaohang',
              label: '平顶山市'
            }]
          }]
        }, {
          value: 'zujian',
          label: '洛阳市',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],

        tags:['Coser','绘师','写手','CV','P主','摄影君','后期君'],
        moretags:false,
        inputVisible:true,


      }

    },

    methods: {
      addTags(index){
        console.log('点击')
        for (var i=-1;i<this.dynamicTags.length;i++){
          if (this.dynamicTags[i] == index){
            this.moretags = false
            alert("不能添加相同的标签")
          }else {
            this.moretags = true

          }
        }
        if(this.moretags ){
          if(this.dynamicTags.length<3){
            this.dynamicTags.push(index)
          }else {
            alert("身份标签最多添加三个")
          }

        }

          // this.dynamicTags.push(index)
        // 推荐使用


      },
      displayDate(){
        var arr = [{ d: '2015-10-12',C:'Apple'}, { d: '2015-10-12',C:'Apple'}, { d: '2015-10-13',C :'Apple' }];
        var find = false;
        for (var i = 0; i < arr.length; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].d == arr[j].d && arr[i].C==arr[j].C) { find = true; break;}
          }
          if (find) break;
        }
        alert(find)
      },
      onSubmit() {
        console.log('submit!');
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handlePictureCardPreview(){

      },
      dialogImageUrl(){

      },
      handleRemove(){

      },
      dialogVisible(){

      },
      handlePreview(){

      },


    }
  }
</script>

<!--在给element加样式的时候不要加后面的scope-->
<style >

   /* .tabs-title-font{
        font-size: 18px;

    }*/

   #user-set .el-radio__input.is-checked .el-radio__inner{
       background-color: #ff6fa2 !important;
       border-color: #ff6fa2 !important;
   }
   #user-set .el-radio__input.is-checked+.el-radio__label{
       color: #ff6fa2 !important;

   }
   #user-set .el-tabs__nav-wrap{
       background-color: white;
       padding: 5px 35px 0px;
   }
   #user-set .el-tabs__active-bar{
       background-color: #ff6fa2 !important;
   }
   #user-set .el-tabs__item.is-active{
       color: #ff6fa2 !important;
    }
   #user-set .el-tabs__item:hover{
       color: #ff6fa2 !important;
   }
   #user-set  .el-tabs__item{
        font-size: 17px !important;
    }

    .bcy-buttons{
        background-color: #ff6fa2 !important;
        color: white !important;
    }

   .button-new-tag {
       margin-left: 10px;
       height: 32px;
       line-height: 30px;
       padding-top: 0;
       padding-bottom: 0;
   }


   .avatar-uploader .el-upload {
       border: 1px dashed #d9d9d9;
       border-radius: 6px;
       cursor: pointer;
       position: relative;
       overflow: hidden;
   }
   .avatar-uploader .el-upload:hover {
       border-color: #409EFF;
   }
   .avatar-uploader-icon {
       font-size: 28px;
       color: #8c939d;
       width: 178px;
       height: 178px;
       line-height: 178px;
       text-align: center;
   }
   .avatar {
       width: 178px;
       height: 178px;
       display: block;
   }
</style>