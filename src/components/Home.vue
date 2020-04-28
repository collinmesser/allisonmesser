<template>
  <div class="home">
    <Sidebar />
    <section class="landing-img" />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 33% auto;
  background-image: url("../assets/../assets/AM_Creative_Homepage-Allie.jpg");
  background-size: cover;
  background-position: center;
}
</style>
