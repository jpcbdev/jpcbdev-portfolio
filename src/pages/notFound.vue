<template>
  <section>
    <div class="error-container">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p class="return">Regresar a
        <router-link to="/" tag="a">jpcbdev.com</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
section {
  height: 100vh;
  width: 100%;
  background-color: #ffed66;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-container {
  text-align: center;
}
h1 {
  font-size: 200px;
}
h2 {
  font-size: 20px;
}
a {
  color: teal;
}
</style>
