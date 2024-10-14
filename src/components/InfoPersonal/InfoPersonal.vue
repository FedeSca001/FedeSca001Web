<template>
  <article class="infoPersonal" id="infoPersonal">
    <div class="section">
      <h1 class="sectionTitle">Personal Information</h1>
      <ul class="infoList">
        <li>
          <span class="infoLabel">Nombre: </span>
          <span class="infoValue">Federico Scarpecci</span>
        </li>
        <li>
          <span class="infoLabel">Edad: </span>
          <span class="infoValue">32</span>
        </li>
        <li>
          <span class="infoLabel">Nacionalidad: </span>
          <span class="infoValue">Italiano - Argentino</span>
        </li>
        <li>
          <span class="infoLabel">Ubicación actual: </span>
          <span class="infoValue">Málaga - España</span>
        </li>
        <li>
          <span class="infoLabel">Idiomas: </span>
          <span class="infoValue">Español - Italiano - Ingles</span>
        </li>
        <li>
          <span class="infoLabel">Estudios: </span>
          <span class="infoValue">HTML, CSS, JavaScript, Vue.js, Vuex, React.js</span>
        </li>
      </ul>
    </div>
    <div class="section">
      <h1 class="sectionTitle">Contacto</h1>
      <ul class="infoList">
        <li>
          <span class="infoLabel">Email: </span>
          <span class="infoValue">familadore@gmail.com</span>
        </li>
        <li>
          <span class="infoLabel">Teléfono: </span>
          <span class="infoValue">+34 674296437</span>
        </li>
        <li>
          <span class="infoLabel">Github: </span>
          <span class="infoValue">https://github.com/FedeSca001</span>
        </li>
        <li>
          <span class="infoLabel">Instagram: </span>
          <span class="infoValue">instagram.com/fedesca001/</span>
        </li>
        <li>
          <span class="infoLabel">LinkedIn: </span>
          <span class="infoValue">linkedin.com/in/federico-scarpecci-developer/</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "InfoPersonal",
};
</script>

<style scoped>
.infoPersonal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

.section {
  flex-basis: 100%;
  max-width: 100%;
  padding: 1rem;
}

.sectionTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
}

.infoList {
  list-style: none;
  padding: 0;
}

.infoList li {
  margin-bottom: 0.5rem;
  animation: slideIn 0.5s ease-in-out;
}

.infoLabel {
  font-weight: bold;
  color: rgb(98, 95, 194);
}

.infoValue {
  font-weight: normal;
  color: #000000;
}

@media (min-width: 480px) {
  .section {
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>
