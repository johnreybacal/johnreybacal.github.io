<template>
  <h2>{{ name }}</h2>
  <p>Under construction!</p>
  <code-wars badge="large"></code-wars>
  <code-wars badge="small"></code-wars>
  <code-wars badge="micro"></code-wars>  
</template>

<script>

import CodeWars from './profiles/CodeWars.vue';

export default {
  components: { CodeWars },
  name: 'App',
  data() {
    return {
      name: 'Johnrey Bacal'
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
