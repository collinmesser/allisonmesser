<template>
  <div class="project">
    <div class="card">
      <router-link :to="page">
        <img
          :alt="alt"
          class=""
          :src="hover ? require(`../assets/designs/${hovered}`) : require(`../assets/designs/${src}`)"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      hover: false,
    }
  },
  props: {
    alt: {
      type: String,
      default: 'alt',
    },
    hovered: {
      type: String,
      default: '',
    },
    page: {
      type: String,
      default: 'Senna',
    },
    src: {
      type: String,
      default: '',
    },
  }
};
</script>

<style scoped>
img {
  cursor: pointer;
  max-width: 100%;
}

.project {
  display: grid;
}

.card {
  margin: 50px auto;
  max-width: 80%;
}
</style>
