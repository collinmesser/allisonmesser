<template>
  <section class="content-creation">
    <Sidebar />
    test
  </section>
</template>

<script>
import Sidebar from "../Sidebar";

export default {
  name: "ContentCreation",
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.content-creation {
  display: grid;
  grid-template-columns: 21em auto;

  aside {
    grid-row-start: 1;
    grid-row-end: 3;
  }
}
</style>
