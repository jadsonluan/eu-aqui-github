<template></template>
<script>
var axios = require('axios');

export default {
  name: 'auth',
  data() {
    return {
      client_id: 'Iv1.5110000ec4e59088',
      client_secret: '7606b76bf217c9db8e15b80d80d183d9ff955f79'
    }
  },
  mounted() {
    const { code } = this.$route.query;
    console.log(code);
    const uri = 'https://github.com/login/oauth/access_token';
    axios({
      url: uri,
      method: 'POST',
      headers: { 'Access-Control-Allow-Origin': '*'},
      params: {
        code,
        client_id: this.client_id,
        client_secret: this.client_secret,
        redirect_uri: '/'
      }
    }).then(response => {
      console.log(response.data);
    }).catch(err => console.log(err));
  }
}
</script>