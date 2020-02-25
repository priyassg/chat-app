<template>
    <div>
        <ul v-for="room in this.rooms" :key="room.id">
            <li><button @click="roomSelected(room.id)">{{room.name}}</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'RoomList',
    props: {
        rooms: {
            type: Array,
        }
    },
    methods:{
        roomSelected(id){
            console.log('Room Selected',id);
            this.$emit('roomSelected', id);
        },
    }
}
</script>