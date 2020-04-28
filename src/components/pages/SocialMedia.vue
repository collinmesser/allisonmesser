<template>
  <div class="social-media">
    <div id="menuToggle">
      <input type="checkbox">
      <span />
      <span />
      <span />
      <Sidebar />
    </div>
    <Header src="AM_Creative_SocialMedia.jpg">
      <template v-slot:header>
        <h1>Social Media<br>Portfolio</h1>
      </template>
    </Header>
    <section>
      <SMCard src="SCC.png">
        <template v-slot:header>
          <h2>
            Sharonville Convention Center
          </h2>
        </template>
        <template v-slot:body>
          <p class="social-link">
            <a href="https://www.facebook.com/sharonvilleconventioncenter/">Facebook</a>
          </p>
          <p class="social-link">
            <a href="https://twitter.com/CincySCC">Twitter</a>
          </p>
          <p>The Sharonville Convention Center provides a contemporary and relaxed suburban location for meetings, conventions, banquets, trade shows and public events with all the amenities of a big city. Sharing events and community announcements are crucial to bringing in new attractions as well as attendees and vendors. Working with the Sharonville Convention Center has been exciting and fun to engage with their audience and build followers to their social media.</p>
        </template>
      </SMCard>
      <SMCard src="CBN.png">
        <template v-slot:header>
          <h2>
            Christian Blue Network
          </h2>
        </template>
        <template v-slot:body>
          <p class="social-link">
            <a href="https://www.facebook.com/ChristianBluePages/">Facebook</a>
          </p>
          <p class="social-link">
            <a href="https://twitter.com/TrustBlueReview">Twitter</a>
          </p>
          <p class="social-link">
            <a href="https://www.instagram.com/trustbluereview/">Instagram</a>
          </p>
          <p class="social-link">
            <a href="https://www.linkedin.com/company/christian-blue-pages/">Linkedin</a>
          </p>
          <p>Christian Blue Network (CBN) is the only Christian business directory in the country that provides advertisements specifically for business who live out their faith as leaders in the marketplace. My goal is to engage their followers as well as promote the business members of CBN by encouraging them in their walk with Christ. I have really enjoyed working with hand in hand with the staff by educating and directing posts for their members and accuratly relay their brand message. Other tasks include PR for events and Facebook advertising.</p>
        </template>
      </SMCard>
      <SMCard src="Romick.png">
        <template v-slot:header>
          <h2>
            Romick Orthodontics
          </h2>
        </template>
        <template v-slot:body>
          <p class="social-link">
            <a href="https://www.facebook.com/romickorthodontics/">Facebook</a>
          </p>
          <p class="social-link">
            <a href="https://www.linkedin.com/company/romickorthodontics/">Linkedin</a>
          </p>
          <p>Romick Orthodontics is a small practice in Anderson, Ohio who didn’t have a lot of extra time to focus on growing their social media. I was able to increase their followers by posting consistenly on their Facebook and Linkedin pages as well as create a successful Facebook advertising campaign. </p>
        </template>
      </SMCard>
      <SMCard src="GCI.png">
        <template v-slot:header>
          <h2>
            Gutter Covers International
          </h2>
        </template>
        <template v-slot:body>
          <p class="social-link">
            <a href="https://www.facebook.com/guttercoversinternational/">Facebook</a>
          </p>
          <p class="social-link">
            <a href="https://twitter.com/gci1234">Twitter</a>
          </p>
          <p class="social-link">
            <a href="https://www.linkedin.com/company/gutter-covers-international-llc/">Linkedin</a>
          </p>
          <p>Gutter Covers International (GCI) is a family-owned company in Batavia, Ohio. They are the Gold Standard in the gutter protection market and pride themselves on have 100% American-made aluminum. What they lacked was a professional social media prescence and high-quality images. The majority of their audience is dealers from around the US and they wanted to utilize social media to bring their dealers together and provide information for them to share on their own business pages. I love to create many custom designs for posts to keep their brand cohesive and professional.</p>
        </template>
      </SMCard>
    </section>
  </div>
</template>

<script>
import Header from "../Header";
import Sidebar from "../Sidebar";
import SMCard from "../SMCard";

export default {
  name: "SocialMedia",
  components: {
    Header,
    Sidebar,
    SMCard
  },
};
</script>

<style scoped lang="scss">
.social-media {
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
</style>
