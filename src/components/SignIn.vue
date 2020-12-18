<template>
    <div>
       <form @submit.prevent='login'>
           <input type="text" v-model="user.email" placeholder="Email Address"/>
           <input type="password" v-model="user.password" placeholder="PassWord"/>
           <input type="submit" value="로그인"/>
       </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignIn',
  data(){
    return {
        user: {
            email:"",
            password:""
        }
    }
  },
  methods: {
           login () {
                axios.post('http://localhost:8080/users/signin', this.user)
                    .then((result) => {
                        this.$store.commit('setAuth',result.data.contents) //동기 
                        this.$router.push('/')
                    })
                    .catch(error => {
                        console.log("Error Login")
                        console.log(error)
                    })
            },
       }
}
</script>

<style scoped>
</style>
