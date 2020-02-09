<template>
  <div class="project">
    <div class="card">
      <img
        :alt="alt"
        class=""
        :src="require(`../assets/designs/${src}`)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    alt: String,
    src: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 90%;
}

.project {
  display: grid;
}
</style>
