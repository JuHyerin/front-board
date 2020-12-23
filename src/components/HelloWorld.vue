<template>
  <div class="hello">
    <label>hi</label>
    <label v-if="user!=null">{{user.name}} ({{user.username}}) </label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  computed: {
    user: function(){
      return this.$store.state.currentUser;
    }
  }
}
</script>