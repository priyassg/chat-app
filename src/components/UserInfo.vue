<template>
    <div>{{this.username}}</div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        username: {
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">
    div{
        font-size: x-large;
    }
</style>