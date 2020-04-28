<template>
  <section class="social-media">
    <Sidebar />
    test
  </section>
</template>

<script>
import Sidebar from "../Sidebar";

export default {
  name: "SocialMedia",
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.social-media {
  display: grid;
  grid-template-columns: 21em auto;

  aside {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
</style>
