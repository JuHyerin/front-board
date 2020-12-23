import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/store'

//VUEX 사용처리
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        authenticated: false,
        token: null,
        currentUser: {
            username: null,
            name: null
        },
        existPost: {
            postId: null,
            title: null,
            contents: null
        }
    },
    mutations:{
        setToken(state, token){ //OAuth 인증을 통해 발급받은 토큰 저장
            state.token = token;
        },
        setCurrentUser(state, contents){
            state.currentUser = contents
            state.authenticated = true
        },
        setAuth(state, contents){
            state.token = contents.token
            state.currentUser = contents
            state.authenticated = true
        },
        initAuth(state){
            state.token = null
            state.currentUser = null
            state.authenticated = false
        },
        setExistPost(state, post){
            console.log(post.postId + "stored")
            state.existPost = post
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
        },

        existPost(state) {
            return state.existPost;
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken',token)
        },

        setCurrentUser({commit}, token){ //저장된 토큰으로 서버에 사용자 정보 요청
            api.getUser(token)
                .then((result) => {
                    console.log(result)
                    commit('setCurrentUser', result.data.contents)
                })
        },
        
        setAuth({commit}, contents){ //DB접근 singin
            commit('setAuth',contents)
        },

        initAuth({commit}){
            commit('initAuth')
        },
        setExistPost({commit}, post){ //게시물 수정 시 기존 내용 출력
            commit('setExistPost', post)
        }
    }
})