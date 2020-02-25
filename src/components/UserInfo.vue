<template>
    <div>UserInfo {{this.username}}</div>
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