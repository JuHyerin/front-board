//user 및 로그인 관련 axios
import axios from 'axios'
export default{
    login(user){
       return axios.post('http://localhost:8080/users/signin', user)
                    .catch(e => console.log('login error') + e)
    }
}