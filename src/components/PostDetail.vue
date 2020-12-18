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
        <div>
            <button @click="updatePostPage">수정</button>
            <button @click="deletePost">삭제</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'PostDetail',
    data: function(){
        return {
            postid: this.$route.params.postid,
            post: {
                title: null,
                writer: null,
                createdAt: null,
                contents: null
            }
        }
    },
    methods: {
        getPost: function(){
            axios.get('http://localhost:8080/posts/detail/'+this.postid)
          .then((result) => {
            console.log(result);
            this.post = result.data.contents;
          })
          .catch(e => {
            console.log('error:', e)
          });
        },

        updatePostPage: function(){

        },

        deletePost: function(){

        }
    },

    mounted(){
        this.getPost();
    }
}
</script>
