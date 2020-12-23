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
import api from '@/api/post'
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
            if(!this.$store.state.authenticated){
                alert('please signin')
                this.$router.push('/sign-in')
            } else {
                api.createPost(this.form, this.$store.state.token)
                    .then(result => {
                            console.log("create Post")
                            console.log(result.data.contents)
                            this.$router.push('/posts')
                    })
            }
         }
    }
    
}
</script>