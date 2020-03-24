<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style lang="scss">
body{
  margin: 0;
  box-sizing: border-box;

  #app{
    height: 100vh;
  }

  input{
    margin-bottom: 2rem;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: none;
    font-size: 1em;
    padding-left: 20px;
    border: 1px solid lightgray;
  }
}

</style>
