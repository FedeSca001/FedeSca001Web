<script setup>
  import NavComp from "./components/NavComp/NavComp.vue";
  import MainComp from "./components/MainComp/MainComp.vue";
  import InfoPersonal from "./components/InfoPersonal/InfoPersonal.vue";
  import ToolsComponent from "./components/ToolsComponent/ToolsComponent.vue";
  import PortFolio from "./components/PortFolio/PortFolio.vue";
  import FooterComp from "./components/FooterComp/FooterComp.vue";
  import FormContactame from "./components/FormContactame/FormContactame.vue";

</script>

<template>
  <div class="appStyle" id="appStyle">
    <NavComp />
    <MainComp />
    <PortFolio />
    <ToolsComponent />
    <InfoPersonal />
    <FormContactame />
    <FooterComp />
  </div>
</template>

<style>
/* Estructura básica de la app */
.appStyle {
  min-height: 100vh;
  padding: 0 60px;
  background-color: var(--color-background-soft);
  transition: background-size 0.5s, background-color 0.5s;
}

/* Tipografía y espaciado global */
body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: 1.75;
  font-size: 16px;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Mejorar la estructura global */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  color: var(--color-heading);
}

h4 {
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  color: var(--color-text);
  margin-bottom: 1.5em;
}

/* Espaciado entre secciones */
div > section {
  padding: var(--section-gap) 0;
  max-width: 1200px;
  margin: 0 auto;
}


.MainComp h1 {
  font-size: 48px;
  color: var(--color-heading);
  margin-bottom: 20px;
}

.MainComp p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
  color: var(--color-text);
}

/* Portfolio */
.PortFolio {
  padding: var(--section-gap) 20px;
  background-color: var(--color-background-soft);
}

.PortFolio h4 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
}

.PortFolio .card {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.PortFolio .card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.PortFolio .card h5 {
  font-size: 20px;
  margin-bottom: 10px;
}

.PortFolio .card p {
  font-size: 14px;
  color: var(--color-text);
}

/* Tools Section */
.ToolsComponent {
  padding: var(--section-gap) 20px;
  text-align: center;
  background-color: var(--color-background-mute);
}

.ToolsComponent h4 {
  font-size: 28px;
  margin-bottom: 30px;
}

.ToolsComponent ul {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.ToolsComponent li {
  background-color: var(--color-background);
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.ToolsComponent li:hover {
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
}

/* InfoPersonal */
.InfoPersonal {
  padding: var(--section-gap) 20px;
  text-align: center;
}

.InfoPersonal h4 {
  font-size: 28px;
  margin-bottom: 30px;
}

.InfoPersonal p {
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
  color: var(--color-text);
}

/* Formulario de contacto */
.FormContactame {
  padding: var(--section-gap) 20px;
  background-color: var(--color-background);
}

.FormContactame h4 {
  text-align: center;
  font-size: 28px;
}

.FormContactame form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-background-soft);
  border-radius: 8px;
}

.FormContactame form input, 
.FormContactame form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

.FormContactame form button {
  padding: 12px 24px;
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-white);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.FormContactame form button:hover {
  background-color: #1f2c40;
}

/* Footer */
.FooterComp {
  padding: 20px;
  text-align: center;
  background-color: var(--color-background-mute);
  color: var(--color-text);
}

.FooterComp p {
  margin: 0;
}

</style>
