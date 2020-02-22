<template>
  <div class="hello">
    <p>
      Hey there! I'm Allison Messer, a designer, copywriter, and digital marketer. This website is currently in progress. If you'd like to get in touch for design/writing/coffee please fill out the form <router-link to="contact">
        here
      </router-link>.
    </p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/allisonmesser/">LinkedIn</a>
      <a href="https://twitter.com/AllisonMMesser">Twitter</a>
      <a href="https://www.behance.net/AllisonMesser">Bēhance</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
