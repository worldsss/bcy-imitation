import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Test from "../views/Test";
import ImgPage from "../views/Img-Page"
import ImgInput from "../views/manger/Img-Input"
import TestInput from '../views/manger/Test-Input'
import QuestionInput from '../views/manger/Question-Input'
import UserMain from '../views/user-page/User-main'
import AttentionPage from '../views/Attention-page'
import RankingPage from '../views/Ranking-page'
import RecommendPage from '../views/Recommend-Page'
import CosPage from '../views/Cos-Page'
import WritePage from '../views/Write-Page'
import Content from '../views/Content-Page'
import UserSetting from '../views/user-page/User-setting'
import UserMessage from '../views/user-page/User-message'
import ImgUpload from '../views/Test-imgupload'
import NewImgInput from '../views/manger/new-Img-Input'
import NewImgTestInput from '../views/manger/New-Img-Test-Input'
import Test02 from '../views/manger/Test02'
import QuestionsPage from '../views/Questions-page'
import ImgsPage from "../views/manger/Imgs-Input"
import UserRegister from '../views/user-page/User-register'
import UserLogin from '../views/user-page/User-login'
import CirclePage from '../views/circle-page'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:Index,
        meta:{
            title:'半次元'
        }
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        redirect:'/recommend-page',
        meta:{
            title:'半次元'
        },
        children: [
            {
                path: '/img-page',
                name: '查询图书',
                meta:{
                    title:'绘画'
                },
                component: ImgPage //注册组件
            },
            {
                path:'/attention-page',
                component:AttentionPage,
                meta:{
                    title:'关注'
                },

            },
            {
                path:'/ranking-page',
                component:RankingPage,
                meta:{
                    title:'榜单'
                },
            },
            {
                path:'/recommend-page',
                component:RecommendPage,
                meta:{
                    title:'半次元'
                }
            },
            {
                path:'/cospage-page',
                component:CosPage,
                meta:{
                    title:'COS'
                }
            },
            {
                path:'/write-page',
                component:WritePage,
                meta:{
                    title:'写作'
                }
            },
            {
              path:'/question-page',
              component:QuestionsPage,
              meta:{
                  title:'问答'
              }
            },

        ]
    }, {
        path: '/test',
        name: 'Test',
        component: Test,
        meta:{
            title:'绘画'
        },
    }, {
        path: '/img-input',
        name: 'ImgInput',
        component: ImgInput,
        meta:{
            title:'发布图片'
        },
    },
    {
        path: '/circle-page/:tid',
        // path: '/circle-page',
        name: 'CirclePage',
        component: CirclePage,
        meta:{
            title:'圈子'
        },
    },
    {
        path: '/test-input',
        name: 'TestInput',
        component: TestInput,
        meta:{
            title:'发布文字'
        },
    }, {
        path: '/question-input',
        name: 'QuestionInput',
        component: QuestionInput,
        meta:{
            title:'发布问题'
        },
    },
    {
        path:'/imgs-input',
        component:ImgsPage,
        meta:{
            title:'多图片上传'
        }
    },
   /* {
        path: '/user-main',
        name: 'UserMain',
        component: UserMain,
        meta:{
            title:'个人主页'
        },
    },*/
    {
        path: '/user-main/:uid',
        // path: '/user-main',
        name: 'UserMain',
        component: UserMain,
        // redirect:'user-pro-content',
        meta:{
            title:'个人主页'
        },
       /* children:[
            {
                path:'/user-pro-content:id',
                // path:'user-pro-content',
                component:UserProContent,
            },
            {
                path:'/user-collect-content',
                component:UserCollectContent,
            },
        ]
*/




    },
    {
        path: '/user-setting',
        name: 'UserSetting',
        component: UserSetting,
        meta:{
            title:'个人主页'
        },
    },
    {
        path: '/user-register',
        name: 'UserSetting',
        component: UserRegister,
        meta:{
            title:'用户注册'
        },
    },
    {
        path: '/user-login',
        name: 'UserSetting',
        component: UserLogin,
        meta:{
            title:'用户登录'
        },
    },
    {
        path: '/content/:prid',
        name: 'UserMain',
        component: Content,
        meta:{
            title:'内容'
        },
    },
    {
        path: '/user-message',
        name: 'UserMessage',
        component: UserMessage,
        meta:{
            title:'消息'
        },
    },
    {
        path: '/test-imgupload',
        name: 'ImgUpload',
        component: ImgUpload,
        meta:{
            title:'消息'
        },
    },
    {
        path:'/new-img-input',
        component:NewImgInput
    },
    {
        path:'/new-img-test-input',
        component:NewImgTestInput
    },
    {
        path:'/test02',
        component:Test02,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


//导航守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    document.title = to.meta.title


    next()
})


export default router
