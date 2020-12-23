<template>
    <div>
        <h2>SignOut processing</h2>
    </div>
</template>

<script>
export default {
    name: 'SignOut',
    created() {  
        this.$store.dispatch('initAuth')
        alert('success logout')
        this.$router.push('/')  
    }
}
</script>