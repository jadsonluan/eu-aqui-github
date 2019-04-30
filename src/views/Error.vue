<template>
<div id="error">
  <h1>
    Error: {{ error }}
  </h1>
</div>
</template>
<script>
export default {
  name: 'error',
  data() {
    return {
      error: null
    }
  },
  mounted() {
    if (this.$route.query) {
      const { error } = this.$route.query;
      this.error = error;
    }
  }
}
</script>

<style>
  #error {
    padding: 30px 50px;
  }

  #error h1 {
    margin: 0;
  }
</style>
