<template>
  <section class="section" id="contact">
    <div data-aos="fade-up">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">Contácto</h3>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <form
                action="https://formspree.io/jpcbdev@gmail.com"
                method="POST"
                @click="$_validate"
              >
                <div class="field">
                  <label class="label">Nombre</label>
                  <div class="control">
                    <input name="nombre" class="input" type="text" placeholder="Su nombre" required>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Correo</label>
                  <div class="control has-icons-left">
                    <input
                      name="replyto"
                      v-model="form.email"
                      class="input"
                      type="email"
                      placeholder="Su correo"
                      required
                    >
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Mensaje</label>
                  <div class="control">
                    <textarea
                      name="mensaje"
                      v-model="form.msg"
                      class="textarea"
                      placeholder="Su mensaje"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="field submit-content">
                  <div class="control">
                    <input type="submit" class="button is-success" value="Enviar">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    $_validate: function() {
      if (this.form && Object.values(this.form).length === 3) {
      }
    }
  }
};
</script>
<style scoped>
.section-heading,
.container {
  margin-bottom: 60px;
}

.submit-content {
  display: flex;
  justify-content: center;
}

.box {
  background-color: #d8d8d8;
  -webkit-box-shadow: 0 3px 2px #777;
  -moz-box-shadow: 0 3px 2px #777;
  box-shadow: 0 3px 2px #777;
}
.section-heading {
  margin-bottom: 1.5rem;
}
input,
textarea {
  background-color: #ffffea;
}
</style>
