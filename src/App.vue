<template>
  <div class="container-fluid">
    <navigation-bar></navigation-bar>
    <router-view></router-view>
  </div>
  <footer-section></footer-section>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    NavigationBar, FooterSection
  }
}
</script>