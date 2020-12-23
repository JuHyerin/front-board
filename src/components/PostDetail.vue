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
            <button @click="deletePost">삭제</button>
        </div>
    </div>
</template>

<script>
import api from '@/api/post'

export default {
    name: 'PostDetail',
    data: function(){
        return {
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
          api.getPostDetail(this.postid)
                .then((result) => {
                    console.log("getPost")
                    console.log(result);
                    this.post = result.data.contents;
                })
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
            console.log("update post")
            this.$store.commit('setExistPost', this.post)
            this.$router.push("/post-update")
        },

        deletePost () {
            
            api.deletePost(this.postid, this.$store.state.token)
                .then( (result) => {
                    console.log("delete post")
                    console.log(result)
                    this.$router.push("/posts")
                    alert("삭제완료")
                })
        }
    },

    mounted(){
        this.getPost();
    }
}
</script>
