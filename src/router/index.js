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

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:Index
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
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

            },
            {
                path:'/ranking-page',
                component:RankingPage
            }
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
/*
router.beforeEach((to, from, next) => {
    // document.title = to.matched[0].meta.title

    next()
})
*/


export default router
