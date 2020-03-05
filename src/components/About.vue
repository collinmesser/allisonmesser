<template>
  <div class="hello">
    <p>
      Hey there! I'm Allison Messer, a designer, copywriter, and digital marketer. This website is currently in progress. Please  
      <a
        id="show-modal"
        @click="showModal = true"
        href="javascript:void(0)"
      >
        click here to get in touch
      </a>
      <contact
        v-if="showModal"
        @close="showModal = false"
      >
        <h3 slot="header">
          custom header
        </h3>
      </contact>
      for design/writing/coffee.
    </p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/allisonmesser/">LinkedIn</a>
      <a href="https://twitter.com/AllisonMMesser">Twitter</a>
      <a href="https://www.behance.net/AllisonMesser">Bēhance</a>
    </div>
  </div>
</template>

<script>
import contact from './Contact.vue';

export default {
  name: "About",
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
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.hello {
  margin: 0 3em;
}

.hello p {
  font-size: 24px;
}
</style>
