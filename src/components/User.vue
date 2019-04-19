<template>
  <div class="user-card">
    <img :src="avatar_url" />
    <h1>Jadson Luan</h1>
    <a href="https://github.com/jadsonluan">@jadsonluan</a>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      avatar_url: require('../assets/temp-avatar.jpeg'),
    }
  }
}
</script>

<style>

div.user-card {
  width: 300px;
  text-align: center;
  padding-bottom: 15px;
}

div.user-card img {
  width: 300px;
  height: 300px;
}

h1 { margin-bottom: 2px; }
a { 
  /* #84CF6A */
  /* #16C0B0 */
  color: #16C0B0; 
  text-decoration: none; 
  font-weight: bold; 
  font-size: 18px;
}

</style>
