<template>
    <div>
        <ul v-for="room in this.rooms" :key="room.id">
            <li @click="roomSelected(room.id)" class="text">{{room.name}}</li>
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
<style lang="scss" scoped>
    ul{
        margin: 0;
        li{
            list-style: none;
            width: 100%;
            height: 3.5rem;
            line-height: 3.5rem;
        }

        &:hover{
            background-color: darkred;
        }
    }
    
</style>