<template>
  <a :href="this.url">
    <img :src="this.badgeUrl" />
  </a>
</template>

<script>
export default {
  name: "code-wars",
  props: {
    badge: {
      type: String,
      required: true,
      validator: function (value) {
        return (value === 'large' || value === 'small' || value === 'micro')
      },
    },
  },
  data() {
    return {
      url: "https://www.codewars.com/users/johnreybacal",
      badgeUrl: 'https://www.codewars.com/users/johnreybacal/badges/' + this.badge
    };
  }
};
</script>
