<template>
  <div class="hello">
    <p>hi {{name}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      name
    }
  },
  methods: {
    getPosts: function () {
      axios
        .get('http://localhost:8080/hi', {
          headers: {'Authorization' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNjkyMDc1QGhhbnN1bmcuYWMua3IiLCJleHAiOjE2MDgxMTAyMTEsImlhdCI6MTYwODEwNjYxMSwidXNlciI6eyJ1c2VybmFtZSI6IjE2OTIwNzVAaGFuc3VuZy5hYy5rciIsIm5hbWUiOiIo7Lu07ZOo7YSw6rO17ZWZ67aAKeyjvO2YnOumsCIsInBpY3R1cmUiOiJodHRwczpcL1wvbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbVwvLTZJQk43QmpfZXBBXC9BQUFBQUFBQUFBSVwvQUFBQUFBQUFBQUFcL0FNWnV1Y25OS3VQZzZkYy01SnVQaEF2NDBDV1NUQ1pBSkFcL3M5Ni1jXC9waG90by5qcGciLCJyb2xlcyI6WyJST0xFX01FTUJFUiJdfX0.SsqVeeobWnwSx2MaAY9ARvB71Z2qTJOjKtPN1J6STPg'}
          })
        .then((result) => {
          console.log(result);
          this.name = result.data.contents;
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


<style scoped>
</style>
