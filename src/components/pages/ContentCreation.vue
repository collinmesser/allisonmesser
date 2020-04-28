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

<style scoped>
.content-creation {
  display: grid;
  grid-template-columns: 33% auto;
}
</style>
