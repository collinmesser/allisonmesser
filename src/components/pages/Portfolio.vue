<template>
  <div class="portfolio">
    <Sidebar />
    <section>
      <div class="projects">
        <Project
          page="Senna"
          src="AMCreative_Portfolio-Senna_BW.png"
          hovered="AMCreative_Portfolio-Senna_Color.png"
          alt="Senna Logo"
        />
        <Project
          page="Nightmarket"
          src="AMCreative_Portfolio-NightMarket_BW.png"
          hovered="AMCreative_Portfolio-NightMarket_Color.png"
          alt="Sharonville Night Market Logo"
        />
        <Project
          page="Fiadventures"
          src="AMCreative_Portfolio-FIAdventures-BW.png"
          hovered="AMCreative_Portfolio-FIAdventures-Color.png"
          alt="FI Adventures Logo"
        />
        <Project
          page="Stripchurch"
          src="AMCreative_Portfolio-StripChurch-BW.png"
          hovered="AMCreative_Portfolio-StripChurch-Color.png"
          alt="Strip Church Dayton Logo"
        />
        <Project
          page="Truerevival"
          src="AMCreative_Portfolio_TrueRevival_BW.png"
          hovered="AMCreative_Portfolio_TrueRevival_Color.png"
          alt="TrueRevival Ministry Logo"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Sidebar from "../Sidebar.vue";
import Project from "../Project.vue";

export default {
  name: "Portfolio",
  components: {
    Sidebar,
    Project,
  },
};
</script>

<style scoped>
.portfolio {
  display: grid;
  grid-template-columns: 33% auto;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
