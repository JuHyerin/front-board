<template>
  <div id="app">
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <p>{{post}}</p>
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
      axios.get('http://localhost:8080/posts'/* , {
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset = utf-8'
                      }
                    } */)
          .then((result) => {
            console.log(result);
            this.posts = result.data.contents;
          })
          .catch(e => {
            console.log('error:', e)
          });
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
