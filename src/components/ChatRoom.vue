<template>
    <div class="chat-room">
        <div class="room-details">
            <h1>{{this.roomDetails.name}}</h1>
            Users: 
            <span v-for="user in this.roomDetails.users" :key="user.id">
                {{user}} |
            </span>
        </div>
        <div class="messages">
            Messages:
            <div>
                <div v-for="message in this.messages" :key="message.id">
                    <div class="message-item">{{message.message}}</div>
                </div>
            </div>
        </div>
        <InputMessage :roomID="chatRoomID" @newMessagePosted="newMessage"></InputMessage>
    </div>
</template>

<script>
import axios from 'axios';
import InputMessage from './InputMessage.vue';

export default {
    name: 'ChatRoom',
    components: {
        InputMessage,
    },
    props:{
        chatRoomID: {
            type: Number,
        }
    },
    data(){
        return {
            roomDetails: '',
            messages: [],
            roomId : this.chatRoomID,
        }
    },
    computed:{

    },
    watch: {
        chatRoomID: {
            // the callback will be called immediately after the start of the observation
            immediate: true, 
            handler (val) {
                this.roomId = val;
                this.fetchRoomDetails();
                this.fetchRoomMessages();
            }
        }
    },
    created(){
        this.fetchRoomDetails();
        this.fetchRoomMessages();
    },
    methods: {
        fetchRoomDetails(){
            axios
            .get(`http://localhost:8080/api/rooms/${this.roomId}`)
            .then((roomDetails) =>{
                this.roomDetails = roomDetails.data;
            })
        },
        fetchRoomMessages(){
            axios
            .get(`http://localhost:8080/api/rooms/${this.roomId}/messages`)
            .then((messages) =>{
                this.messages = messages.data;
            })
        },
        newMessage(){
            this.fetchRoomMessages();
        }
    },
}
</script>

<style scoped>
    .chat-room{
        display: grid;
        grid-template-rows: 30% 60% 10%;
    }
    .messages{
        background-color: lightgray;
        overflow-y: auto;
    }
    .message-item{
        margin: 0 0 2rem 0.5rem;
        border-radius: 9px;
        background-color: white;
        max-width: 40rem;
        width: fit-content;
        padding: 10px;
    }

</style>