<template>
  <div class="portfolio">
    <div id="menuToggle">
      <input type="checkbox">
      <span />
      <span />
      <span />
      <Sidebar />
    </div>
    <Header src="AM_Creative_DesignPortfolio.jpg">
      <template v-slot:header>
        <h1>Design<br>Portfolio</h1>
      </template>
    </Header>
    <section>
      <div class="projects">
        <Project
          src="AMCreative_Portfolio-Senna_BW.png"
          hovered="AMCreative_Portfolio-Senna_Color.png"
          alt="Senna Logo"
        />
        <Project
          src="AMCreative_Portfolio-NightMarket_BW.png"
          hovered="AMCreative_Portfolio-NightMarket_Color.png"
          alt="Sharonville Night Market Logo"
        />
        <Project
          src="AMCreative_Portfolio-FIAdventures-BW.png"
          hovered="AMCreative_Portfolio-FIAdventures-Color.png"
          alt="FI Adventures Logo"
        />
        <Project
          src="AMCreative_Portfolio-StripChurch-BW.png"
          hovered="AMCreative_Portfolio-StripChurch-Color.png"
          alt="Strip Church Dayton Logo"
        />
        <Project
          src="AMCreative_Portfolio_TrueRevival_BW.png"
          hovered="AMCreative_Portfolio_TrueRevival_Color.png"
          alt="TrueRevival Ministry Logo"
        />
        <Project
          src="AMCreative_Portfolio_Libations_BW.png"
          hovered="AMCreative_Portfolio_Libations_Color.png"
          alt="Libations"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../Header";
import Sidebar from "../Sidebar.vue";
import Project from "../Project.vue";

export default {
  name: "Portfolio",
  components: {
    Header,
    Sidebar,
    Project,
  },
};
</script>

<style scoped lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: 21em auto;

  #menuToggle input,
  #menuToggle span {
    display: none;
  }

  #menuToggle {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  section {
    grid-column: 2 / 3;
    margin-left: 2em;
  }

  @media screen and (max-width: 991.98px) {
      #menuToggle {
        position: absolute !important;
        grid-row-start: inherit;
        grid-row-end: inherit;
      }

      .header {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }

      section {
        grid-column: 1 / 3;
        margin-left: 1em;
      }
  }
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
