<template>
  <div id="login">
    <div>
      <h1>Hey, you!</h1>
      <p>We need you to authorize us to move on!</p>
      <a :href="auth">Log in</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  computed: {
    auth() {
      return "http://localhost:5000/auth/login";   
    },
  }
}
</script>
<style>
  #login {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #login > div {
    text-align: center;
  }

  #login a { 
    background: #16C0B0;
    color: white;
    padding: 10px 30px;
    font-weight: bold;
    margin: 5px 0;
    display: inline-block;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    text-decoration: none;
  }

  #login a:hover {
    transition-duration: 0.5s;
    background: #84CF6A;
  }
</style>
