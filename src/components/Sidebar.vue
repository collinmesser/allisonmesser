<template>
  <aside class="sidebar">
    <div class="insidebar">
      <router-link
        class="logo-link"
        to="/"
      >
        <img
          alt="AM Creative Logo"
          class="header-logo"
          page=""
          src="../assets/logos/AM_Creative-logo-horizontal-black-1000.svg"
        >
      </router-link>
      <nav>
        <router-link to="hello">
          Hello!
        </router-link>
        <router-link to="portfolio">
          Design Portfolio
        </router-link>
        <router-link to="socialmedia">
          Social Media Portfolio
        </router-link>
        <!-- <router-link to="contentcreation">
          Content Creation
        </router-link> -->
        <a
          id="show-modal"
          @click="showModal = true"
          href="javascript:void(0)"
        >
          Let's Chat!
        </a>
      </nav>
      <svg class="icon icon-twitter"><use xlink:href="#icon-twitter" /></svg>
      <svg class="icon icon-twitter"><use xlink:href="#icon-twitter" /></svg>
      <contact
        v-if="showModal"
        @close="showModal = false"
      >
        <h3 slot="header">
          custom header
        </h3>
      </contact>
    </div>
  </aside>
</template>

<script>
import contact from "./Contact.vue";

export default {
  name: "Sidebar",
  components: {
    contact,
  },
  data: function() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  align-content: start;
  background-image: url("../assets/AM-Sidebar-2.svg");
  background-size: cover;
  display: grid;
  position: relative;
  width: 100%;
  text-align: left;

  .insidebar {
    background: rgba(250, 250, 250, 0.4); //#6fc0be;
    height: 100%;
  }

  & > a {
    margin-top: 2.5em;
    opacity: 1;
    text-align: center;
  }

  nav {
    display: grid;
    margin: 3em 0 0 3em;
    opacity: 1;

    a {
      font-size: 1.25em;
      line-height: 1.75em;
    }
  }

  .router-link-active {
    font-weight: 700;
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
}

.header-logo {
  max-width: 18em;
}
</style>
