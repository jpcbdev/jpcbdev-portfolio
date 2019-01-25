<template>
  <section class="hero section is-default is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <div data-aos="zoom-in">
              <figure class="image is-4by3">
                <img src="../assets/hero.jpg" alt="Description">
              </figure>
              <h1 class="title is-2">Juan Carballo</h1>
              <h2 class="subtitle is-4">Programador y desarrollador web</h2>
              <p>
                <a
                  target="_blank"
                  class="button"
                  href="https://www.linkedin.com/in/juan-pablo-carballo-a17892170/"
                >
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a target="_blank" class="button" href="https://github.com/jpcbdev">
                  <i class="fab fa-github-square fa-2x"></i>
                </a>
                <a
                  class="button"
                  href="https://www.youtube.com/channel/UCYKR43X1m_Ly8E7CLbbNOYQ/featured?view_as=subscriber"
                  target="_blank"
                >
                  <i class="fab fa-youtube-square fa-2x"></i>
                </a>
              </p>
              <p>
                © 2019
                <strong>jpcbdev</strong>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  height: calc(100vh - 1px);
  background-color: #ffed66;
}

.hero-body {
  margin-top: 60px;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  border: none;
  background-color: transparent;
}

figure {
  -webkit-clip-path: circle(30% at 50% 50%);
  clip-path: circle(30% at 50% 50%);
  transform: rotate(-90deg);
}
p {
  margin-top: 20px;
}
</style>
