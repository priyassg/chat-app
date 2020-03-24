<template>
<div class="login-page">
    <div>
        <input type="text" placeholder="Type your username..." v-model="username" />
    </div>
    <div>
        <button @click="join">Join the DoordashChat!</button>
    </div>
    <p v-if="this.error">{{this.error}}</p>
</div>
</template>

<script>
export default {
    name: 'LoginPage',
    data(){
        return {
            username: '',
            error: null,
        }
    },
    methods:{
        join(){
            if(this.username){
                this.$router.push({
                    name: 'ChatPage',
                    params: {
                        username: this.username,
                    }
                })
            }else{
                this.error = "Please Enter name"
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .login-page{
        height: 100%;
        display: grid;
        justify-content: center;
        align-content: center;

        input{
            width: 25rem;
            height: 3rem;
        }
        button{
            background-color: red;
            width: 100%;
            height: 3rem;
            border-radius: 2px;
            color: white;
            font-size: 1em;
        }
    }
</style>