<template>
  <v-app>
    <h1>Board</h1>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/posts" exact>Post</router-link>
    <router-link to="/sign-in" exact v-if='!this.$store.state.authenticated'>Login</router-link>
    <router-link to="/sign-out" exact v-else>Logout</router-link>
  <router-view/>
  </v-app>
</template>


<script>

</script>
