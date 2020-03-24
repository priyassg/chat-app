<template>
    <div class="chat-page">
        <div class="left">
            <UserInfo class="user-info" :username='this.username'></UserInfo>
            <RoomList class="room-list" @roomSelected='roomSelected' :rooms='this.rooms'></RoomList>
        </div>
        <ChatRoom class="chat-room" :chatRoomID='this.selectedRoomId'></ChatRoom>
    </div>
</template>

<script>
import axios from 'axios';
import UserInfo from './UserInfo.vue';
import RoomList from './RoomList.vue';
import ChatRoom from './ChatRoom.vue';

export default {
    name: 'ChatPage',
    components: {
        UserInfo,
        RoomList,
        ChatRoom,
    },
    props:{
        username: {
            type: String
        }
    },
    data(){
        return{
            rooms: '',
            selectedRoomId: 0,
        }
    },
    created(){
        this.fetchRooms();
    },
    methods: {
        fetchRooms(){
            axios
            .get('http://localhost:8080/api/rooms')
            .then((rooms) =>{
                this.rooms = rooms.data || [];
            })
        },
        roomSelected(id){
            console.log('Inside Parent: ', id);
            this.selectedRoomId = id;
        }
    }
}
</script>

<style scoped lang="scss">
    .chat-page{
        height: 100%;
        display: grid;
        grid-template-columns: 20% 80%;

        .left{
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            display: grid;
            grid-template-rows: 30% 70%;
            background-color: #ff1a1a;
            color: white;
            text-transform: capitalize;
        }
        .chat-room{
            grid-column-start: 2;
            grid-row-start: 1;
        }
    }
</style>