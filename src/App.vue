<template>
  <div id="app">
    <div class="bar"></div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view @authenticated='onAuth'/>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
export default {
  name: 'app',
  components: {
    Home,
    Auth
  },
  data() {
    return {
      currentUser: undefined
    }
  },
  methods: {
    onAuth(token) {
      this.currentUser = token;
    }
  }
}
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
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  height: 50px;
}
</style>
