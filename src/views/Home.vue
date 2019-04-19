<template>
  <div id="home">
    <Login v-if="!currentUser"></Login>
    <User v-else></User>
  </div>
</template>

<script>
import User from '@/components/User.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    User,
    Login
  },
  data() {
    return {
      currentUser: undefined
    }
  }
}
</script>

<style>
#home {
  padding: 40px;
}
</style>
