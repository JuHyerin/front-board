<template>
  <div id="app">
    <h2>Post</h2>
    <div v-if="hasResult">
      <div >
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
        <button v-on:click="createPostPage">글 작성하기</button>
      </div>
      
    </div>
    <button v-else v-on:click="getPosts">글 불러오기</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    getPosts: function () {
      axios.get('http://localhost:8080/posts')
          .then((result) => {
            console.log(result);
            this.posts = result.data.contents;
          })
          .catch(e => {
            console.log('error:', e)
          });
    },
    createPostPage: function(event){
      this.$router.push('/post-form')
    },
    postDetailPage(postId){
      this.$router.push({name: 'PostDetail', params: {postid: postId}})
      //this.$router.push('/post-detail')
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 560px;
}
</style>
