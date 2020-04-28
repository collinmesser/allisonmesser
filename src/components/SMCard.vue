<template>
  <div class="SMCard">
    <div class="card">
      <header class="fp">
        <slot name="header" />
      </header>
      <body>
        <slot name="body" />
      </body>
      <img
        :alt="alt"
        class=""
        :src="require(`../assets/social/${src}`)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SMCard",
  data() {
    return {
      hover: false,
    }
  },
  props: {
    alt: {
      type: String,
      default: 'alt',
    },
    hovered: {
      type: String,
      default: '',
    },
    page: {
      type: String,
      default: 'Senna',
    },
    src: {
      type: String,
      default: '',
    },
  }
};
</script>

<style scoped lang="scss">

.SMCard {

  .card {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 2;
    margin: 3em 0;
    
    header {
      align-self: end;
      margin-left: 4em;
    }

    body {
      grid-row: 2 / 2;
      margin: 0 4em;

      .social-link {
        margin: 0;
      }
    }

    img {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      margin-right: 2em;
      width: 19em;
    }

    @media screen and (max-width: 991.98px) {
      header {
        align-self: flex-start;
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        margin: 0 1em;
      }

      body {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        margin: 6em 1em 0;
      }
      img {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      width: 19em;
    }
    }
  }
}

</style>
