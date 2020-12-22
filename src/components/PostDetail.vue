<template>
    <div>
        <h2>Post Detail</h2>
        <table border="1">
            <tr>
                <td>제목</td>
                <td>{{post.title}}</td>
            </tr>
            <tr>
                <td>작성자</td>
                <td>{{post.writer}}</td>
            </tr>
            <tr>
                <td>작성일</td>
                <td>{{post.createdAt}}</td>
            </tr>      
            <tr>
                <td>내용</td>
                <td>{{post.contents}}</td>
            </tr>
        </table>   

        <div v-if="checkWriter()">
            <button @click="updatePostPage">수정</button>
            <button @click="deletePost2">삭제</button>
            <a href="javascript:;" @click="deletePost">삭제</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostDetail',
    data: function(){
        return {
            formPostId : {
                postId: null
            },
            postid: this.$route.params.postid,
            post: {
                postId: null,
                title: null,
                writer: null,
                createdAt: null,
                contents: null
            }
        }
    },
    computed: {
        user: function(){
            return this.$store.state.currentUser;
        }
    },
    methods: {
        getPost: function(){
            console.log("getPost")
            axios.get('http://localhost:8080/posts/detail/'+this.postid)
          .then((result) => {
            console.log(result);
            this.post = result.data.contents;
          })
          .catch(e => {
            console.log('error:', e)
          });
        },

        checkWriter: function() {
            const user = this.user.username
            const writer = this.post.writer
            console.log("user:" + user + ", writer:" + writer)
            return (user == writer)
            if(user!=null && user == writer){
                return true
            } else {
                return false
            }
        },

        updatePostPage: function(){ 
            console.log("update")
            this.$store.commit('setExistPost', this.post)
            this.$router.push("/post-update")
        },

        deletePost () {
            this.formPostId.postId = this.postid
            console.log("삭제")
            alert("test")
            axios.post('http://localhost:8080/posts/delete', 
                        this.formPostId ,
                        {headers: { 'Authorization': this.$store.state.token }}
            )
            .then( (result) => {
                console.log(result)
                this.$router.push("/posts")
            })
            .catch((res)=>console.log(res) );
        },

        deletePost2 :function(){
            console.log("delete post 2")
        }
    },

    mounted(){
        this.getPost();
    }
}
</script>
