import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import SignIn from '@/components/SignIn'
import PostCreateForm from '@/components/PostCreateForm'
import PostDetail from '@/components/PostDetail'
import OAuth2Redirect from '@/components/OAuth2Redirect'
import SignOut from '@/components/SignOut'
import PostUpdate from '@/components/PostUpdate'

Vue.use(Router)

export default new Router({
  mode: 'history', // url에 # 없애기
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      props: true
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component : SignIn
    },
    {
      path: '/post-form',
      name: 'PostForm',
      component: PostCreateForm
    },
    {
      path: '/post-detail/:postid',
      name: 'PostDetail',
      component: PostDetail,
      props: true
    },
    {
      path: '/oauth2redirect/:token',
      name: 'OAuth2Redirect',
      component: OAuth2Redirect,
      props: true
    },
    {
      path: '/sign-out',
      name: 'SignOut',
      component: SignOut
    },
    {
      path: '/post-update',
      name: 'PostUpdate',
      component: PostUpdate
    }
  ]
})
