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
    this.token = this.getToken()
  },
  methods: {
    async getToken() {
      await axios
        .get('http://localhost:3000/token')
        .then(response => {
          this.token = response.data.token;
        });
    }
  }
}
</script>