<template>
  <div id="app">
    <img
      alt="AM Creative Logo"
      class="header-logo"
      src="./assets/logos/AM_Creative-logo-circle-black-150.svg"
    >
    <Hero />
    <div class="projects">
      <Project 
        src="AMCreative_Portfolio-Senna_BW.png" 
        alt="Senna Logo"
      />
      <Project 
        src="AMCreative_Portfolio-Senna_BW.png" 
        alt="Senna Logo"
      />
    </div>

    <!-- <About></About> -->
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Project from './components/Project.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Project
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  display: grid;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 40px;
  text-align: center;
}

.header-logo {
  float: left;
  margin-left: 50px;
  max-width: 100px;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
