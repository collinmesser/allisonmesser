<template>
  <div class="hero">
    <div class="hero-overlay" />
    <img
      alt="AM Creative Logo"
      class="hero-logo"
      src="../assets/logos/AM_Creative-logo-horizontal-black-1000.svg"
    >
  </div>
</template>

<script>
export default {
  name: "Hero",
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  position: relative;
  width: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128,0.5);
}

.hero-logo {
  margin-top: 50px;
  max-width: 75%;
}
</style>
