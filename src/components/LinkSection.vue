<template>
  <h3>Links</h3>
  <code-wars badge="small"></code-wars>
  <a :href="hackerRankUrl">HackerRank Profile</a>
</template>

<script>
import CodeWars from '../profiles/CodeWars.vue'
export default {
  components: { CodeWars },
  data() {
    return {
      hackerRankUrl: 'https://www.hackerrank.com/johnreybacal?hr_r=1'
    };
  }
}
</script>