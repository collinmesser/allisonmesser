<template>
  <aside class="sidebar">
    <About />
  </aside>
</template>

<script>
import About from './About';

export default {
  name: "Sidebar",
  components: {
    About,
  }
};
</script>

<style scoped>
.sidebar {
  position: relative;
  width: 100%;
  border-right: solid 1px black;
}
</style>
