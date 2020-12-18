import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//VUEX 사용처리
Vue.use(Vuex)


const resourceHost = "http://localhost:8080"

export default new Vuex.Store({
    state:{
        authenticated: false,
        token: null,
        currentUser: null
    },
    mutations:{
        setAuth(state, contents){
            state.token = contents.token;
            state.currentUser = {
                email : contents.username,
                name : contents.name,
            }
            state.authenticated = true
        }
    },
    getters:{
        token(state) {
            return state.token;
        },
        user(state) {
            return state.currentUser;
        },
        authenticated(state) {
            return state.authenticated;
        }
    },
    actions:{
        setAuth(commit, contents){
            commit('setAuth',contents)
           
            /* return axios
                .post('http://localhost:8080/users/signin', email, {
                    headers : {'Content type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
                })
                .then( (result) => commit('setToken', result.data.contents) )
                .catch(); */
        }
    }
})