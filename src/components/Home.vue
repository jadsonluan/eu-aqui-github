<template>
  <div id="home">
    <User></User>
  </div>
</template>

<script>
import User from './User.vue';
export default {
  name: 'Home',
  components: {
    User
  }
}
</script>

<style>
#home {
  padding: 40px;
}
</style>
