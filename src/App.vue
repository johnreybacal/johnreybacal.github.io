<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <p>Under construction!</p>
    <p>Technologies I'm using in building this profile</p>
    <ul>
      <li v-for="link in techLinks" :key="link.url">
        <a :href="link.url">
          {{ link.description }}
        </a>
      </li>
    </ul>

    <center-divide></center-divide>
    <link-section></link-section>
  </div>
</template>

<script>
import CenterDivide from "./components/CenterDivide.vue";
import LinkSection from "./components/LinkSection.vue";

export default {
  components: { CenterDivide, LinkSection },
  name: "App",
  data() {
    return {
      name: "Johnrey Bacal",
      techLinks: [
        {
          url: 'https://v3.vuejs.org/',
          description: 'Vue 3'
        },
        {
          url: 'https://getbootstrap.com/',
          description: 'Bootstrap 5'
        },
        {
          url: 'https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg',
          description: 'This amazing guide on CI for github pages'
        },
        {
          url: 'https://pages.github.com/',
          description: 'Github pages'
        }
      ]
    };
  },
};
</script>