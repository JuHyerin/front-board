<template>
    <div>
        <h2>redirect processing</h2>
        Access Token: {{token}} <br>
        Stored Token: {{storedToken}} <br>
        Current User: {{currentUser}}
    </div>
</template>

<script>
export default {
    name: "oauth2redirect",
    data: function() {
        return {
            token: this.$route.params.token
        }
    },
    computed: {
        storedToken: function() {
            return this.$store.state.token
        },
        currentUser: function() {
            return this.$store.state.currentUser
        }
    },
    created(){
        console.log("create oauth2redirect")
        this.$store.commit('setToken', this.token)
        this.$store.dispatch('setCurrentUser', this.$store.state.token)
        this.$router.replace('/')
    }
}
</script>