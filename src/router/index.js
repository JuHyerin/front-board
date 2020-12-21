import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import SignIn from '@/components/SignIn'
import PostCreateForm from '@/components/PostCreateForm'
import PostDetail from '@/components/PostDetail'
import OAuth2Redirect from '@/components/OAuth2Redirect'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
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
    }
  ]
})
