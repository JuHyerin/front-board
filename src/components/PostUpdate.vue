<template>
    <div>
        <h2>Post Update Form</h2>
        <form @submit.prevent='updatePost'>
            <p>
                <label>제목</label>
                <input type="text" v-model="form.title">
            </p>
            <p>
                <label>내용</label>
                <input type="text" v-model="form.contents">
            </p>
            
            <p>
                <input type="submit" value="수정">
            </p>
        </form>
    </div>
</template>

<script>
import api from '@/api/post'
export default {
    name: 'PostUpdate',
    data: function(){
        return {
            existPost: this.$store.state.existPost,
            form: {
                postId : this.$store.state.existPost.postId,
                title: this.$store.state.existPost.title,
                contents: this.$store.state.existPost.contents
            }
        }
    },
    methods: {
        updatePost (){
            api.updatePost(this.form, this.$store.state.token)
                .then(result => {
                    console.log("Success update Post")
                    console.log(result)
                    this.$router.push({name: 'PostDetail', params: {postid: this.form.postId}})
            })
        }
    },

}
</script>