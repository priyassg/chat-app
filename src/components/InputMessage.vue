<template>
    <input type=text v-on:keyup.enter="addMessage" v-model="message"/>
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