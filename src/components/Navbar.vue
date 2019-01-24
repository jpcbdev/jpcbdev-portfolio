<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home">
          <i class="fab fa-sith fa-1x"></i>
        </a>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a href="#home" class="navbar-item">Home</a>
          <a href="#services" class="navbar-item">Servicios</a>
          <a href="#about" class="navbar-item">Sobre mí</a>
          <a href="#contact" class="navbar-item">Contácto</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
nav,
a:hover,
.navbar-dropdown,
.navbar-item,
.navbar-link,
.navbar-item:hover,
#navbarBasicExample,
.navbar-menu {
  background-color: #212121;
}
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
