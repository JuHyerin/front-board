<template>
    <div>
        <h2>Post Form</h2>
        <form @submit.prevent='createPost'>
            <p>
                <label>제목</label>
                <input type="text" v-model="form.title" placeholder="제목입력">
            </p>
            <p>
                <label>내용</label>
                <input type="text" v-model="form.contents" placeholder="내용입력">
            </p>
            
            <p>
                <input type="submit" value="등록">
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PostForm',
    data: function(){
        return {
            form: {
                title: null,
                contents: null
            }
        }
    },
    methods: {
        createPost (){
            console.log("create")
            axios.post('http://localhost:8080/posts/create', this.form,{
                headers: {
                    'Authorization' : this.$store.state.token
                }
            })
            .then(result => {
                console.log("Success Create Post")
                console.log(result.data.contents)
                this.$router.push('/posts')
            })
            .catch(error => {
                console.log("Error Create Post")
                console.log(error)
            })
        }
    }
    
}
</script>