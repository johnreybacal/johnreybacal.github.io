<template>
  <div id="center-divide-container" class="row">
    <div class="col-md-4 col-sm-12 col-xs-12 align-self-center mx-auto">
      <h2>{{ name }}</h2>
      <p>{{ email }}</p>
    </div>
    <div class="col-md-4 col-sm-8 col-xs-8">
      <div class="image-container mx-auto">
        <img class="profile-image" :src="image" />
      </div>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4">
      <ul>
        <li>Artist</li>
        <li>Developer</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "center-divide",
  data() {
    return {
      name: "Johnrey Bacal",
      email: "johnrey.bacal@yahoo.com",
      image: require("../assets/img/johnrey.jpg"),
    };
  },
};
</script>

<style>
#center-divide-container {
  width: 100%;
  background-color: steelblue;
}
.profile-image {
  width: 100%;
  position: relative;
  top: -25px;
}
.image-container {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  overflow: hidden;
}
</style>