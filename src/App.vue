<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img
          alt="AM Creative Logo"
          class="header-logo"
          page=""
          src="./assets/logos/AM_Creative-logo-circle-black-150.svg"
        >
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
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
  margin: 0 0 40px 50px;
  max-width: 100px;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
