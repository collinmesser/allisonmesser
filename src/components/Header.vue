<template>
  <div class="header">
    <header class="fp">
      <slot name="header" />
    </header>
    <img
      alt="Header Image"
      class=""
      :src="require(`../assets/headers/${src}`)"
    >
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

<style scoped lang="scss">
.header {
  img {
    width: 100%;
  }

  header {
    top: 5em;
    color: #fff;
    margin-left: 2em;
    position: absolute;
  }

  @media screen and (max-width: 991.98px) {
    header {
      top: 0;
      margin-left: 8em;
    }
  }
}
</style>
