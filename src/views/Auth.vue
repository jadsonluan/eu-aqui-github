<template>
<div>
  Autenticado! Seu token é {{ token }}
</div>
</template>
<script>
export default {
  name: 'auth',
  data() {
    return {
      token: undefined
    }
  },
  mounted() {
    if (this.$route.params.token) {
      if (!this.token || !this.$cookie.get('token')) {
        this.setUpToken();
      }
    }

    this.$router.replace("/");
  },
  methods: {
    setUpToken() {
      this.token = this.$route.params.token;
      this.$cookie.set('token', this.token, 1);
    }
  }
}
</script>