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

:root {
  --main-color: #2c3e50;
  --main-bg-color: #ffffff;
  --main-border-color: #adadad;
  --main-box-shadow-color: rgba(170, 170, 170, 0.8);
  --main-button-bg-color: rgb(209, 209, 209);
  --main-button-bg-color-orange: rgb(251, 100, 27);
  --main-black-color: black;
  --main-border-color-white: #e2e2e2;
  --main-border-color-gray: #c1c1c1;
  --main-divider-color-white: rgb(219, 219, 219);
  --main-loader-color-dark: rgb(24, 23, 23);

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
  height: 100vh;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(-main-bg-color);
}

.text-center{
  text-align: center;
}
</style>
