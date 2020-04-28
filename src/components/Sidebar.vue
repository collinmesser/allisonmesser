<template>
  <aside
    id="menu"
    class="sidebar"
  >
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
      <svg
        class="icon icon-twitter"
        style="display:none;"
      >
        <defs>
          <symbol
            id="icon-twitter"
            viewBox="0 0 32 32"
          >
            <path
              d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
            />
          </symbol>
        </defs>
      </svg>
      <svg
        class="icon icon-twitter"
        style="display:none;"
      >
        <defs>
          <symbol
            id="icon-linkedin2"
            viewBox="0 0 32 32"
          >
            <path
              d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"
            />
            <path d="M2 12h6v18h-6v-18z" />
            <path
              d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"
            />
          </symbol>
        </defs>
      </svg>
      <a
        class="social-link"
        href="https://twitter.com/AllisonMMesser"
      >
        <svg class="icon icon-twitter"><use xlink:href="#icon-twitter" /></svg>
      </a>
      <a
        class="social-link"
        href="https://www.linkedin.com/in/allisonmesser/"
      >
        <svg class="icon icon-linkedin2">
          <use xlink:href="#icon-linkedin2" />
        </svg>
      </a>
      <contact
        v-if="showModal"
        @close="showModal = false"
      >
        <h3 slot="header">
          custom header
        </h3>
      </contact>
      <p class="footer-link">
        ©{{ new Date().getFullYear() }} AM Creative - Site by:
        <a href="https://collinmesser.com/">Collin Messer</a>
      </p>
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
  display: flex;
  flex-direction: column;
  height: 100%;
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
    display: flex;
    flex-direction: column;
    margin: 3em 0 0 3em;
    opacity: 1;

    a {
      color: rgba(0, 0, 0, 1);
      font-size: 1.25em;
      line-height: 1.75em;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:visited {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  .router-link-active {
    font-weight: 700;
  }

  .icon {
    color: rgba(0, 0, 0, 1);
    display: inline-block;
    width: 3em;
    height: 2em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    margin-top: 2em;
  }
  a.social-link:nth-of-type(2) {
    margin-left: 2.5em;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: rgba(0, 0, 0, 1);
    }
  }

  a.social-link:nth-of-type(3) {
    margin-left: 0.5em;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: rgba(0, 0, 0, 1);
    }
  }

  p.footer-link {
    bottom: 0;
    margin-left: 2em;
    position: absolute;

    a {
      color: rgba(0, 0, 0, 1);
      text-decoration: underline;

      &:hover {
        font-weight: 700;
      }

      &:visited {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}

.header-logo {
  max-width: 18em;
}

////////////////////// Hamburger menu

/*
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 *
 * https://codepen.io/erikterwan/pen/EVzeRP
 */

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
@media screen and (max-width: 991.98px) {
  #menu {
    position: absolute;
    width: 300px;
    height: 100vh;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
}
</style>
