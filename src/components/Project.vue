<template>
  <div class="project">
    <div class="card">
      <router-link :to="page">
        <img
          :alt="alt"
          class=""
          :src="hover ? require(`../assets/designs/${hovered}`) : require(`../assets/designs/${src}`)"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
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

<style scoped>
img {
  cursor: pointer;
  max-width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

img:hover {
  box-shadow: 0 20px 34px 0px rgba(0,0,0,0.25);
}

.project {
  display: grid;
}

.card {
  margin: 50px auto;
  max-width: 80%;
}

.projectPage img{
  max-width: 70%;
}
</style>
