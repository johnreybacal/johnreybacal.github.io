<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <p>Under construction!</p>

    <center-divide></center-divide>

    <code-wars badge="large"></code-wars>
    <code-wars badge="small"></code-wars>
    <code-wars badge="micro"></code-wars>
  </div>
</template>

<script>
import CenterDivide from "./components/CenterDivide.vue";

import CodeWars from "./profiles/CodeWars.vue";

export default {
  components: { CodeWars, CenterDivide },
  name: "App",
  data() {
    return {
      name: "Johnrey Bacal",
    };
  },
};
</script>