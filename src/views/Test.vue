<!--<template>
    <div id="content">
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData"></vue-waterfall-easy>
    </div>
</template>-->
<template>
    <div id="content">
        <vue-waterfall-easy :imgsArr="imgsArr"
                            @scrollReachBottom="fetchImgsData"
                            @click="clickFn"
                            :linkRange="linkRange"
                            :maxCols="maxCols"
                            :imgWidth="imgWidth" style="">
            <div slot="waterfall-head">
                <input-navs></input-navs>
            </div>


            <div class="img-info" slot-scope="props">
                <el-row :gutter="10">
                    <el-col :span="2">
                        <el-avatar style="float: left">
                            测试
                        </el-avatar>
                    </el-col>
                    <el-col :span="6">
                        <p style="margin-top: 10px">这里是名称</p>
                    </el-col>
                </el-row>

                <br>
                <p class="some-info">第{{props.index+1}}张图片</p>
                <p class="some-info" style="margin: 0px">{{props.value.info}}</p>
                <p class="some-info" style="margin: 0px">{{props.value.tag}}</p>
                <br>
                <div v-for="(item,index) in props.value.infor">
                    <el-button type="info"
                               size="mini"
                               plain="true"
                               :autofocus="false"
                               v-for="(item1,index) in item.tag">
                        {{item1}}
                    </el-button>
                    <br>
                    <ui class="img-ul">
                        <li class="img-li">
                            <el-link icon="el-icon-star-off" :underline="false" type="info">收藏</el-link>
                        </li>
                        <li class="img-li">
                            <el-link icon="el-icon-position" :underline="false" type="info">11345</el-link>
                        </li>
                        <li class="img-li">
                            <el-link icon="el-icon-chat-line-round" :underline="false" type="info">{{item.comments}}
                            </el-link>
                        </li>
                        <li class="img-li">
                            <el-link icon="el-icon-view" :underline="false" type="info">{{item.giveUp}}</el-link>

                        </li>
                    </ui>
                </div>
            </div>

            <!--           <div class="img-info" slot-scope="props"  style="width: 30%;float: right;background-color: #4b15ab"></div>-->
        </vue-waterfall-easy>
        <div style="width: 20%;position: absolute;right: 0;top: 400px;">
            <p>测试</p>
            <p>测试</p>
            <p>测试</p>
            <p>测试</p>
            <p>测试</p>
            <p>测试</p>
        </div>
    </div>
</template>


<script>
    import vueWaterfallEasy from 'vue-waterfall-easy'
    import InputNavs from '../views/Index'

    export default {
        name: 'morePicture',
        components: {
            vueWaterfallEasy,
            InputNavs
        },
        data() {
            return {
                imgsArr: [],         //存放所有已加载图片的数组（即当前页面会加载的所有图片）
                fetchImgsArr: [],     //存放每次滚动时下一批要加载的图片的数组
                linkRange: 'img',
                maxCols: '3',
                imgWidth: 400,
            }
        },
        methods: {
            initImgsArr(n, m) {   //初始化图片数组的方法，把要加载的图片装入
                var arr = []
                for (var i = n; i < m; i++) {
                    arr.push({
                        src: `/${ i + 1}.jpg`,
                        link: 'http://www.baidu.com',
                        info: '图片的描述怎么没见',
                        href: 'http://www.baidu.com',
                        infor: [{
                            tag: ['明日方舟', '崩坏', 'fate'],
                            giveUp: 10,
                            comments: 30,
                        }]
                    }) //src为加载的图片的地址、link为超链接的链接地址、
                    //info为自定义的图片展示信息，请根据自己的情况自行填写
                }
                return arr
            },

            fetchImgsData() {    //获取新的图片数据的方法，用于页面滚动满足条件时调用
                this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)   //数组拼接，把下一批要加载的图片放入所有图片的数组中
            },
            clickFn(event, {index, value}) {
                // 阻止a标签跳转
                event.preventDefault()
                // 只有当点击到图片时才进行操作
                if (event.target.tagName.toLowerCase() == 'img') {
                    console.log('img clicked', index, value)
                    // location.href="http://www.baidu.com"
                    window.open("http://www.baidu.com")
                }
            },

        },
        created() {
            this.imgsArr = this.initImgsArr(0, 30)       //初始化第一次（即页面加载完毕时）要加载的图片数据
            this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
        }
    }

</script><!--    要想页面显示这里是必填项-->
<style>

    /*
            #content{
                position: absolute;   !* !*必须*!*!
                top:32px;             !* !*top必须，大小可控制*!*!
                bottom:0;            !*  !*bottom必须，一直延申到当前块底部*!*!
                width:100%;
            }*/

    #content {
        position: absolute;
        top: 32px;
        bottom: 0;
        width: 100%;
    }

    /*
        #content {
            !*height: 800px;*!
            height: 100%;
        }
    */

    .img-ul {
        width: 90%;
        height: 30px;
        margin: 10px auto;
        display: block;
    }

    .img-li {
        width: 25%;
        height: 20px;
        line-height: 20px;
        float: left;
        list-style: none;

    }

</style>