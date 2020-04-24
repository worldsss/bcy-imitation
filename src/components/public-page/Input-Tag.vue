<template>
    <div>
        <p style="text-align: left">更多标签</p>
        <!--  <el-tag :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                  style="float: left">
              {{tag}}
          </el-tag>-->
        <el-tag :key="index"
                v-for="(tag,index) in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                style="float: left">
            {{tag.tags_name}}
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
        <!--        :key="tag.index"-->
        <!-- <el-tag
                 v-for="(tags,index) in modelTags"
                 :disable-transitions="false"
                 @click="addTags(tags)">
             {{tags}}
         </el-tag>-->
        <el-tag
                v-for="(tags,index) in modelTags"
                :disable-transitions="false"
                @click="addTags(tags)">
            {{tags.tags_name}}
        </el-tag>
    </div>
</template>

<script>
  export default {
    name: "InputTag",
    props: {
      modelTags: {
        type: Array,
        default() {
          // return ['限定捏土','jk','汉服','Lolita','手写','cos'] //这里是推荐的标签
          return [
            {
              "tid": 3,
              "tags_name": "崩坏",
              "proIndexList": null
            },
            {
              "tid": 4,
              "tags_name": "绘画",
              "proIndexList": null
            },
            {
              "tid": 7,
              "tags_name": "jk",
              "proIndexList": null
            },
            {
              "tid": 8,
              "tags_name": "汉服",
              "proIndexList": null
            },
            {
              "tid": 9,
              "tags_name": "Lolita",
              "proIndexList": null
            },
            {
              "tid": 10,
              "tags_name": "手写",
              "proIndexList": null
            },
            {
              "tid": 11,
              "tags_name": "cos",
              "proIndexList": null
            }
          ]
        }
      },
      dynamicTags: {
        type: Array,
        default() {
          return [
            {
              "tid": 0,
              "tags_name": "",
              "proIndexList": null
            }
          ] //这里是存放的选中的标签
        }
      }
    },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        textarea1: '',
        textarea2: '',
        // modelTags:['限定捏土','jk','汉服','Lolita','手写','cos'],
        // dynamicTags: [], //这里是存放的数组
        inputVisible: false,
        inputValue: '',
        moretags: false,
      }
    },
    methods: {
      /*  addTags(index){
          console.log('点击')
          for (var i=-1;i<this.dynamicTags.length;i++){
            if (this.dynamicTags[i] == index){
              this.moretags = false
              alert("不能添加相同的标签")
            }else {
              this.moretags = true

            }
          }
          if(this.moretags){
            this.dynamicTags.push(index)
          }
        },*/
      addTags(index) {
       /* console.log('点击')

        if (this.dynamicTags == "") {
          // alert("第一次点击")
          this.dynamicTags.push(index)
          console.log(this.dynamicTags)
        } else {
          for (var i=0;i<this.dynamicTags.length;i++){
            if (this.dynamicTags[i].tags_name == index.tags_name){
              this.moretags = false
              alert("不能添加相同的标签")
            }else {
              this.moretags = true

            }
          }
          if(this.moretags){
            this.dynamicTags.push(index)
          }
      }
*/
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
    /*  clickAddTag(tag){
          this.dynamicTags.push(tag)
      }*/
  }
  }
</script>

<style scoped>

</style>