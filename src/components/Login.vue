<template>
  <div id="login">
    <h1>Hey, you!</h1>
    <p>We need you to authorize us to move on!</p>
    <a :href="auth">Log in</a>
  </div>
</template>
<script>
import dotenv from 'dotenv'
export default {
  name: 'login',
  data() {
    return {
      client_id: 'Iv1.5110000ec4e59088'
    }
  },
  computed: {
    auth() {
      return `https://github.com/login/oauth/authorize?client_id=${this.client_id}`;   
    },
  }
}
</script>
<style>
  #login { text-align: center; padding: 50px; }

  #login a { 
    background: #16C0B0;
    color: white;
    padding: 10px 15px;
    margin: 5px 0;
    display: inline-block;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  #login a:hover {
    transition-duration: 0.5s;
    background: #84CF6A;
  }
</style>
