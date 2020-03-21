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
  },
};
</script>

<style scoped>
.sidebar {
  position: relative;
  width: 100%;
  -webkit-box-shadow: 5px 20px 20px 0px rgba(0,0,0,0.3); 
  box-shadow: 5px 20px 20px 0px rgba(0,0,0,0.3);
}
</style>
