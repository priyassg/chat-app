<template>
    <div class="input-field">
        <input type=text placeholder="Type a message..." v-on:keyup.enter="addMessage" v-model="message"/>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'InputMessage',
    data(){
        return {
            message: '',
        }
    },
    props:{
        roomID: {
            type: Number
        }
    },
    methods: {
        addMessage(){
            axios
            .post(`http://localhost:8080/api/rooms/${this.roomID}/messages`,{
                name: 'Priya',
                message: this.message,
            })
            .then(() =>{
                this.$emit('newMessagePosted');
            }).catch((error) => {
                console.log('Post data error: ',error)
            })
            this.message = '';
        },
    }
}
</script>
<style lang="scss" scoped>
    .input-field{
        box-shadow: 0px 1px 5px grey;
        z-index: 1;
        padding: 1rem 1rem 1rem 1rem;

        input{
            margin-bottom: 2rem;
            height: 100%;
            width: 100%;
        }
    }
</style>