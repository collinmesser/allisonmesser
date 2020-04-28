<template>
  <div class="header">
    <h1 name="title-slot">
      {slot}
    </h1>
    <img
      alt="Header Image"
      class=""
      src="require(`../assets/designs/${src}`)"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    alt: {
      type: String,
      default: "Header Image",
    },
    class: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss"></style>
