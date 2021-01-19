<template>
  <header class="masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <div class="image-container masthead-avatar mb-5">
          <img class="profile-image" :src="image" alt="" />
        </div>
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">{{ name }}</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">{{ title }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "mast-head",
  inject: ['name'],
  data() {
    return {
      title: "Developer - Artist",
      image: require("../assets/img/johnrey.jpg"),
    };
  },
};
</script>

<style>
.profile-image {
  width: 100%;
  position: relative;
  top: -25px;
}
.image-container {
  width: 16rem !important;
  height: 16rem !important;
  border-radius: 100%;
  overflow: hidden;
}
</style>