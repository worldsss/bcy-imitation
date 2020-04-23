<template>
    <div>
        <div class="main-left">
            <question-cute>
                <el-avatar slot="question-avatar" :size="50" src="3.jpg"></el-avatar>
                <span slot="question-name">我是一只猫</span>
                <span slot="question-text">战双里有哪些梗？</span>
                <span slot="question-nameLink">我是一只猫</span>
                <span slot="question-content">
                    双三大天王——火子哥，星子哥，栗子姐。星火燎原梗猜的到吧（狗头）黑星坠落，黑星为什么坠落？
                    火子哥一枪打爆了服务器。
                    （传）
                    火子哥一枪打爆了空中花园。
                    （传）
                    火子哥射爆了空中花园。
                    （再传）
                    火子哥社保了空中花园
                    〔人类：我们选择被感染体杀死〕
                    丽芙：今天大家没有拖丽芙后腿吧
                    神威：啊～（kimojiyogada！）
                    〔一开口就知道，老神威了〕
                    〔一开口就知道，神威老了〕
                </span>
                <span slot="question-collect">收藏</span>
                <span slot="question-go">123</span>
                <span slot="question-comment">1561</span>
                <span slot="question-click">165</span>
                <el-avatar slot="question-firstImg"
                           :size="70"
                           src="5.jpg"
                           shape="shape"
                           style="margin-top: 60%"></el-avatar>


            </question-cute>
            <question-cute v-for="(item,index) in questionCute">
                <el-avatar slot="question-avatar" :size="50" :src="item.user_avatar"></el-avatar>
                <span slot="question-name">{{item.user_name}}</span>
                <span slot="question-text">{{item.question_text}}</span>
                <span slot="question-nameLink">{{item.question_nameLink}}</span>
                <span slot="question-content">
                    {{item.question_content}}
                </span>
                <span slot="question-collect">{{item.question_collect}}</span>
                <span slot="question-go">{{item.question_go}}</span>
                <span slot="question-comment">{{item.question_comment}}</span>
                <span slot="question-click">{{item.question_click}}</span>
                <el-avatar slot="question-firstImg"
                           :size="70"
                           :src="item.question_img"
                           shape="square"
                           :fit="fits"
                           style="margin-top: 60%"></el-avatar>


            </question-cute>
        </div>
        <right-ranking-carousel></right-ranking-carousel>

    </div>
</template>

<script>
  import QuestionCute from '../components/Question-component/Question-cute'
  import RightRankingCarousel from '../components/public-page/Right-Ranking-Carousel'


  export default {
    name: "",
    components: {
      QuestionCute,
      RightRankingCarousel

    },
    data() {
      return {
        fits:'fill',
        questionCute: [
          {
            user_avatar: '3.jpg',
            user_name: '我是一只猫',
            question_text: ' 你平常吃饭吗？',
            question_nameLink: 'http://www.baidu.com',
            question_content: ' 双三大天王——火子哥，星子哥，栗子姐。星火燎原梗猜的到吧（狗头）黑星坠落，黑星为什么坠落？',
            question_collect: 12303,
            question_go: 3434,
            question_comment: 3432,
            question_click: 3423,
            question_img:'4.jpg'
          },
          {
            user_avatar: '4.jpg',
            user_name: '我是一只狗',
            question_text: ' 崩崩崩好玩吗？',
            question_nameLink: 'http://www.baidu.com',
            question_content: ' 双三大天王——火子哥，星子哥，栗子姐。星火燎原梗猜的到吧（狗头）黑星坠落，黑星为什么坠落？',
            question_collect: 12303,
            question_go: 3434,
            question_comment: 3432,
            question_click: 3423,
            question_img:'7.jpg'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>