<template>
  <div class="home">
    <Sidebar class="col" />
    <section>
      <img
        alt=""
        class="landing-img"
        src="../assets/designs/AMCreative_Portfolio-StripChurch-Color.png"
      >
    </section>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: "Home",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 33% auto;
}

.landing-img {
  
}
</style>
