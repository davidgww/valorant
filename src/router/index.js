import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const HeroDetail = () => import('@/views/heroDetail/HeroDetail.vue')
const GunDetail = () => import('@/views/gunDetail/GunDetail.vue')
Vue.use(VueRouter)

const routes = [
  // 首页
  // {
  //   path: '/',
  //   name: 'Home',
  //   meta: {
  //     title: "首页"
  //   },
  //   redirect: '/home'
  // },
  // 首页
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "首页"
    },
    component: Home
  },
    // 英雄
  {
    path: '/hero',
    name: 'Hero',
    meta: {
      title: "英雄"
    },
    component: () => import('@/views/hero/Hero.vue')
  },
  // 枪械
  {
    path: '/gun',
    name: 'Gun',
    meta: {
      title: "枪械"
    },
    component: () => import('@/views/gun/Gun.vue')
  },
  // 数据
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: "数据"
    },
    component: () => import('@/views/info/Info.vue')
  },
  // 视频
  {
    path: '/videos',
    name: 'Videos',
    meta: {
      title: "视频"
    },
    component: () => import('@/views/videos/Videos.vue')
  },
  // 教学
  {
    path: '/education',
    name: 'Education',
    meta: {
      title: "教学"
    },
    component: () => import('@/views/education/Education.vue')
  },
  // 社区
  {
    path: '/community',
    name: 'Community',
    meta: {
      title: "社区"
    },
    component: () => import('@/views/community/Community.vue')
  },
  // Liquipedia
  {
    path: '/Liquipedia',
    name: 'Liquipedia',
    meta: {
      title: "Liquipedia"
    },
    component: () => import('@/views/Liquipedia/Liquipedia.vue')
  },
  {
    path: '/HeroDetail',
    name: 'HeroDetail',
    meta: {
      title: "英雄详情"
    },
    component: () => import('@/views/heroDetail/HeroDetail.vue')
  },
  {
    path: '/GunDetail',
    name: 'GunDetail',
    meta: {
      title: "枪械详情"
    },
    component: () => import('@/views/gunDetail/GunDetail.vue')
  },
  {
    path: '/gamevideo',
    name: 'GameVideo',
    meta: {
      title: "游戏视频"
    },
    component: () => import('@/views/gamevideo/gamevideo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
