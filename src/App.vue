<template>
  <div id="app">
    <div class="bar"></div>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body, html { padding: 0; margin: 0; }

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div.bar {
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  height: 50px;
}
</style>
