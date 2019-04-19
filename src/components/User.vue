<template>
  <div id="user">
    <div class="user-card">
      <img :src="avatar_url" />
      <h1>Jadson Luan</h1>
      <a href="https://github.com/jadsonluan">@jadsonluan</a>
    </div>
    <div>
      <button v-on:click='onLogout' class="logout-btn">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      avatar_url: require('../assets/temp-avatar.jpeg'),
    }
  },
  methods: {
    onLogout() {
      this.$cookie.delete("token");
      this.$router.go();
    }
  }
}
</script>

<style>
#user {
  display: grid;
  grid-template-columns: min-content 2fr;
  grid-gap: 50px;
}

div.user-card {
  width: 300px;
  text-align: center;
  padding-bottom: 15px;
}

div.user-card img {
  width: 300px;
  height: 300px;
}

#user h1 { margin-bottom: 2px; }

#user a { 
  color: #16C0B0; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 18px;
}

#user a:hover {
  color: #84CF6A;
  transition-duration: 0.33s;
}

#user .logout-btn {
  float: right;
  background: #2c3e50;
  color: white;
  border-radius: 30px;
  padding: 5px 15px;
  border: 2px solid #2c3e50;
  cursor: pointer;
}

#user .logout-btn:hover {
  transition-duration: 0.5s;
  background-color: white;
  color: #2c3e50;
}

</style>
