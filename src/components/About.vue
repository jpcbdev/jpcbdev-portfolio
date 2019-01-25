<template>
  <section class="section">
    <div data-aos="fade-up">
      <div class="section-heading">
        <h3 class="title is-2">Sobre mí</h3>
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <p class="has-text-justified">
                Inicié en el mundo de la programación hace
                <strong>3 años</strong> con
                <strong>Java</strong> posteriormente seguí en el ambiente de desarrollo
                <strong>.NET</strong> con
                <strong>CSharp</strong>, los siguientes años le he dedicado mi tiempo a todo lo relacionado con el desarrollo back y front
                end utilzando el potencial de
                <strong>Node.js</strong> con
                <strong>Javascript</strong> moderno tanto del lado del cliente como del servidor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="siema">
              <img src="../assets/slide01.jpeg" alt="Placeholder image">
              <img src="../assets/slide02.jpeg" alt="Placeholder image">
            </div>
          </div>
          <div class="column is-4">
            <h3 class="title is-3 has-text-centered">Perfil</h3>
            <div class="content">
              <table class="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>
                    <strong>Ubicación:</strong>
                  </td>
                  <td>Alajuela/Costa Rica</td>
                </tr>
                <tr>
                  <td>
                    <strong>Celular:</strong>
                  </td>
                  <td>0000-00-00</td>
                </tr>
                <tr>
                  <td>
                    <strong>Correo:</strong>
                  </td>
                  <td>jpcbdev@gmail.com</td>
                </tr>
              </table>
            </div>
            <div class="buttons is-centered">
              <a class="button is-link">
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
          <div class="column is-4">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-3 has-text-centered">Habilidades</h3>
                <div class="content">
                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>JavaScript</strong>
                          <progress class="progress is-primary" value="70" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Vue.js</strong>
                          <progress class="progress is-primary" value="70" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Node.js</strong>
                          <progress class="progress is-warning" value="60" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>HTML5/CSS3</strong>
                          <progress class="progress is-primary" value="80" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Databases</strong>
                          <progress class="progress is-warning" value="60" max="100"></progress>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.$_loadPlugins();
  },
  beforeMount() {},
  updated() {},
  methods: {
    $_loadPlugins() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      let Siema = require("siema/dist/siema.min.js");
      let slider = new Siema({
        selector: ".siema",
        duration: 200,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: false,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {}
      });
      setInterval(() => slider.next(), 6000);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style scoped>
section {
  background-color: #ffed66;
  min-height: 874px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: 450px;
}

.card {
  width: 100%;
  height: 450px;
  -webkit-box-shadow: 0 3px 2px #777;
  -moz-box-shadow: 0 3px 2px #777;
  box-shadow: 0 3px 2px #777;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
td {
  font-size: 1.2rem;
}
</style>
