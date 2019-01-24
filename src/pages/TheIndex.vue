<template>
  <main>
    <navbar/>
    <hero/>
    <services/>
    <about/>
    <contact/>
    <foot/>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: { Navbar, Hero, Services, About, Contact, Foot },
  mounted() {
    require("../plugins/scrollspy.js");
    require("../plugins/sidenav.js");
    require("../plugins/aos.js");
    require("../plugins/slider.js");
    require("../plugins/overscroll.js");
  }
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
span,
td,
label,
input,
textarea,
button {
  font-family: "Ubuntu", sans-serif;
}
.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 3em;
}

.box,
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
/* Scroll bar style */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  border-right: solid 5px #1d1f20;
  background: #5f5f5f;
}

::-webkit-scrollbar-track {
  border: none;
  background: #1d1f20;
}
</style>
