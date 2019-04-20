<template>
  <div class="git-card">
    <div class="git-card-icon" v-bind:style='{ background: iconColor }'>
      <font-awesome-icon :icon='icon' />
    </div>
    <div class ="git-card-info">
      <h3 class="git-card-label">{{label}}</h3>
      <span class="git-card-value">{{value != null ? value : 'Unknown'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitCardInfo',
  props: ['label', 'value', 'icon', 'iconColor']
}
</script>

<style>
.git-card {
  background: white;
  padding: 20px;
  /* height: 90px; */
  width: 210px;
  box-shadow: 0px 0px 40px rgba(0,0,0,.05);
  border: 2px solid rgba(0,0,0,.05);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.git-card:hover {
  box-shadow: 0px 0px 5px rgba(0,0,0,.3);
  transition-duration: 0.25s;
}

.git-card .git-card-icon {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-right: 15px;
  color: white;
  text-align: center;
  vertical-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.git-card-label {
  margin: 0;
  margin-bottom: 10px;
  color: grey;
  font-size: 14px;
}

.git-card-value {
  color: #2c3e50;
  font-weight: bold;
}
</style>
