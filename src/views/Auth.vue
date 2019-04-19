<template>
<div>
  {{ token }}
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
    this.getToken()
  },
  methods: {
    async getToken() {
      await axios
        .get('http://localhost:3000/token')
        .then(response => (this.token = response))
    }
  }
}
</script>