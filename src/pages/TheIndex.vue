<template>
  <main>
    <navbar/>
    <router-view></router-view>
    <!-- <foot/> -->
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: { Navbar, Foot },
  data() {
    return {};
  },
  mounted() {
    this.$_loadPlugins();
  },
  methods: {
    $_loadPlugins() {
      require("../plugins/scrollspy.js");
      require("../plugins/sidenav.js");
      require("../plugins/aos.js");
      require("../plugins/overscroll.js");
    }
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

/* buttons animations */
a {
  font-weight: bold;
  color: white;
}

a:hover {
  animation: wiggle 1s ease;
  animation-iteration-count: 1;
  color: white;
}
@keyframes wiggle {
  20% {
    transform: translateX(4px);
  }
  40% {
    transform: translateX(-4px);
  }
  60% {
    transform: translateX(2px);
  }
  80% {
    transform: translateX(-1px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
