<template>
  <router-view/>
</template>

<script>
export default {
  mounted(){
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(255, 255, 255);
}

.text-center{
  text-align: center;
}
</style>
