<template>
  <section class="hero section is-default is-bold" id="home">
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
</style>
