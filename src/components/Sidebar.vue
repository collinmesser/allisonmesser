<template>
  <aside class="sidebar">
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
    <router-link to="hello">
      Hello!
    </router-link>
    <router-link to="projects">
      Design Portfolio
    </router-link>
    <router-link to="socialmedia">
      Social Media
    </router-link>
    <router-link to="contentcreation">
      Content Creation
    </router-link>
    <a
      id="show-modal"
      @click="showModal = true"
      href="javascript:void(0)"
    >
      Let's Chat!
    </a>
    <contact
      v-if="showModal"
      @close="showModal = false"
    >
      <h3 slot="header">
        custom header
      </h3>
    </contact>
  </aside>
</template>

<script>
import contact from './Contact.vue';

export default {
  name: "Sidebar",
  components: {
    contact,
  },
  data: function() {
    return {
      showModal: false
    };
  }
};
</script>

<style scoped>
.sidebar {
  align-content: start;
  display: grid;
  position: relative;
  width: 100%;
  -webkit-box-shadow: 5px 20px 20px 0px rgba(0,0,0,0.3); 
  box-shadow: 5px 20px 20px 0px rgba(0,0,0,0.3);
  padding-left: 3em;
  text-align: left;
}


.header-logo {
  max-width: 15em;
}
</style>
