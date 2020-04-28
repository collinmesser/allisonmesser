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

<style scoped>
.social-media {
  display: grid;
  grid-template-columns: 33% auto;
}
</style>
