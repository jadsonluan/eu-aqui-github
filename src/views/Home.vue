<template>
  <div id="home">
    <Login v-if="!currentUser"></Login>
    <User :token='currentUser' v-else></User>
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
  mounted() {
    // this.$cookie.delete("token");
    this.currentUser = this.$cookie.get('token');
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
  padding: 80px 100px;
}
</style>
