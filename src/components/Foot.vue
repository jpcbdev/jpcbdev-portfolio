<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>jpcbdev.com</strong> por
          <a href="https://github.com/dansup">Juan Pablo Carballo</a>.
        </p>
        <p>
          <a class="button">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a class="button">
            <i class="fab fa-github-square fa-2x"></i>
          </a>
        </p>
        <p>© 2019 jpcbdev. Todos los derechos reservados.</p>
      </div>
    </div>
    <cookie-law
      theme="blood-orange"
      transitionName="fade"
      message="Éste sitio web usa cookies, si permanece aquí acepta su uso."
      buttonText="Acepto!"
    ></cookie-law>
  </footer>
</template>
<script>
import CookieLaw from "vue-cookie-law";
export default {
  components: { CookieLaw }
};
</script>
<style  scoped>
footer {
  background-color: #212121;
  padding: 3rem 1.5rem 4rem;
}
a {
  background-color: #212121;
  color: white;
  border: none;
}
p,
strong {
  color: white;
}
.Cookie {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
  opacity: 0.9;
  text-align: center;
}
</style>
