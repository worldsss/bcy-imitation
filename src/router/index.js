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
        path: '/user-main',
        name: 'UserMain',
        component: UserMain,
        meta:{
            title:'个人主页'
        },
    },
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
