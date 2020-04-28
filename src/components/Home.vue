<template>
  <div class="home">
    <div id="menuToggle">
      <input type="checkbox">
      <span />
      <span />
      <span />
      <Sidebar />
    </div>
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
  grid-template-columns: 21em auto;
  background-image: url("../assets/../assets/AM_Creative_Homepage-Allie.jpg");
  background-size: cover;
  background-position: center;

  #menuToggle input,
  #menuToggle span {
    display: none;
  }

  #menuToggle {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  section {
    grid-column: 2 / 3;
    margin-left: 2em;
  }

  @media screen and (max-width: 991.98px) {
    #menu {
      height: 71vh;
    }
    
    #menuToggle {
      position: absolute !important;
      grid-row-start: inherit;
      grid-row-end: inherit;
    }

    .header {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    section {
      grid-column: 1 / 3;
      margin-left: 1em;
    }
  }
}
</style>
