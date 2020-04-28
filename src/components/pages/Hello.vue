<template>
  <div class="hello">
    <Sidebar />
    <Header src="AM_Creative_Hello.jpg" />
    <section>
      <h2 class="fp-script">
        Hey There!
      </h2>
      <p>
        Well hi! I want to personally say THANK YOU for stopping by and learning
        a little bit about me.
      </p>
      <h2 class="fp-script">
        So... Who are you?
      </h2>
      <p>
        I’m Allison Messer, born and raised in the great city Dayton, Ohio where
        I’ve had the opportunity to learn, work and grow in a creative
        atmosphere. I am incredibly passionate about well-organized design and
        content and enjoy working with companies and individuals to bring their
        ideations to realized creation. I have a rich background in branding and
        marketing content and love helping bring brands to life through the
        creation of content, design and social media presence. To me, written
        word and design are not much different. They both achieve the same
        outcome of connection.
      </p>
      <h2 class="fp-script">
        What about when you aren’t creating design and content?
      </h2>
      <p>
        I get to spend my days with a really cool guy that is my husband who is
        a talented web designer and two incredibly silly and fun-loving kids. I
        wonder where they get their silliness from... still looking for that
        answer. I believe that supporting our local community should be a
        crucial part of life and by loving others, we can reshape the future. I
        am committed to doing my part by consistently finding ways to generously
        give back and serve alongside nonprofits. Health and fitness are two
        lovely parts of my life that are integrated into my daily routine. In
        the summer of 2019, I took the leap and became a CrossFit Level 1
        Trainer and have been coaching at MesserFit in Lebanon, Ohio. It turns
        out that I’m really good at telling people what to do, I mean
        motivating. But all jokes aside, building relationships is an important
        factor for making lifestyle changes and I feel pretty lucky to be able
        to have that impact in many people’s lives.
      </p>
      <h2 class="fp-script">
        What’s your Enneagram Type?
      </h2>
      <p>
        I thought you were probably wondering that. I’m an Enneagram Type One
        with a Two wing. I’m an advocate with a strong sense of ethics and moral
        compass.
      </p>
    </section>
  </div>
</template>

<script>
import Header from "../Header";
import Sidebar from "../Sidebar";

export default {
  name: "Hello",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
.hello {
  display: grid;
  grid-template-columns: 21em auto;
  grid-template-rows: minmax(100px, auto);

  aside {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  section {
    margin-left: 2em;
  }

  h2 {
    background-color: #6fc0be;
    clip-path: polygon(0 15%, 100% 25%, 100% 75%, 0 85%);
    color: #fff;
    display: inline-block;
    padding: 0.5em 0.5em 0.5em 1em;
  }

  p {
    padding-left: 1.75em;
  }
}
</style>
