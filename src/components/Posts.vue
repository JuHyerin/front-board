<template>
  <div id="app">
    <h2>Post</h2>
    <div v-if="hasResult">
      <div>
        <table border="1">
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <tr v-for="post in posts" v-bind:key="post.postId" @click="postDetailPage(post.postId)" style="cursor:pointer">
            <td>{{post.title}}</td>
            <td>{{post.writer}}</td>
            <td>{{post.createdAt}}</td>
          </tr>
        </table>
      </div>
      <button v-if="pages.start!=1" @click="goToBefore">이전</button>
      <a v-for="page in paging" v-bind:key="page" @click="goToPage(page)">{{page}}</a>
      <button v-if="pages.now!=pages.total" @click="goToNext">이후</button>
      <div>
        <button v-on:click="createPostPage">글 작성하기</button>
      </div>
    </div>
    <button v-if="!hasResult" v-on:click="getPosts">글 불러오기</button>
  </div>
</template>

<script>
import api from '@/api/post'

export default {
  name: 'App',
  data: function () {
    return {
      posts: [],
      pages: {
        start: null,
        end: null,
        total: null,
        now: null
      },
      paging: [],
      
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    getPosts: function () {
      if(this.pages.now == null){
        this.pages.now=1
      }
      api.getPosts(this.pages.now)
          .then((result) => {
            console.log(result);
            this.posts = result.data.contents.posts;
            this.pages.start = result.data.contents.startPage
            this.pages.end = result.data.contents.endPage
            this.pages.total = result.data.contents.totalPage
            this.range(result.data.contents.startPage, result.data.contents.endPage)
          })
    },
    createPostPage: function(event){
      if(!this.$store.state.authenticated) {
        alert('please signin')
        this.$router.push('/sign-in')
      } else {
        this.$router.push('/post-form')
      }
    },
    postDetailPage(postId){
      this.$router.push({name: 'PostDetail', params: {postid: postId}})
    },
    range: function(start, end){
      var arr = []
      var index = 0
      for(var i = start; i <= end; i++ ){
        arr[index] = i 
        index++
      }
      this.paging = arr
    },
    goToPage(page){
      this.pages.now = page
      this.getPosts(page)
    },
    goToNext(){
      this.pages.now = this.pages.end + 1
      this.getPosts(this.pages.now)
    },
    goToBefore(){
      this.pages.now = this.pages.start -1 
      this.getPosts(this.pages.now)
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>