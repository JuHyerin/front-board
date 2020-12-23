//post 관련 axios
import axios from 'axios'

export default {
    getPosts(page){
        return axios.get('http://localhost:8080/posts?page='+page)
                    .catch(e => console.log('get posts error:', e))
    },
    
    getPostDetail(postId){
        return axios.get('http://localhost:8080/posts/detail/'+postId)
                    .catch(e => console.log('get post detail error:', e))
    },

    deletePost(postId, token){
        return axios.post('http://localhost:8080/posts/delete', 
                            {'postId': postId} ,
                            {headers: { 'Authorization': token }})
                    .catch(e => console.log('delete post error:', e))

    },
    
    createPost(form, token){
        return axios.post('http://localhost:8080/posts/create', 
                            form,
                            {headers: { 'Authorization' : token }})
                    .catch(e => console.log('delete post error:', e)) 
    },

    updatePost(form, token){
        return axios.post('http://localhost:8080/posts/update', 
                            form,
                            {headers: { 'Authorization' : token}})
                    .catch(e => console.log('update post error'))
    }
}