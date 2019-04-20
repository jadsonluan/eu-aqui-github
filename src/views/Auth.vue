<template>
<div>
  Autenticado! Seu token é {{ token }}
</div>
</template>
<script>
var axios = require('axios');

export default {
  name: 'auth',
  data() {
    return {
      token: undefined
    }
  },
  mounted() {
    if (!this.token || !this.$cookie.get('token')) {
      this.getToken().then(() => {
        this.$router.replace("/")
      });
    }
  },
  methods: {
    async getToken() {
      await axios
        .get('http://localhost:3000/token')
        .then(response => {
          console.log(response.data.token);
          this.token = response.data.token;
          this.$cookie.set('token', this.token, 1);
        });
    }
  }
}
</script>