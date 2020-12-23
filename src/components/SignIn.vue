<template>
    <div>
       <form @submit.prevent='login'>
           <input type="text" v-model="user.email" placeholder="Email Address"/>
           <input type="password" v-model="user.password" placeholder="PassWord"/>
           <input type="submit" value="로그인"/>
       </form>
       <div>
           <a href="http://localhost:8080/oauth2/authorize/naver">Naver</a> <br>
           <a href="http://localhost:8080/oauth2/authorize/google">Google</a>
       </div>
    </div>
</template>

<script>
import api from '@/api/user'
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
            api.login(this.user)
                .then(result => {
                    this.$store.commit('setAuth',result.data.contents) //동기 
                    this.$router.push('/')
                })    
        },
    }
}
</script>
