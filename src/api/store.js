//store에서 호출하는 axios
import axios from 'axios'

export default {
    getUser(token){
        return axios.get('http://localhost:8080/hi',
                            {headers : { 'Authorization': token }})
                    .catch(e => console.log('get user error:', e));
    }
}