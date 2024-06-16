<template>
  <div>
    <article class="articleMainComp" id="articleMainComp">
      <img
        src="../../assets/images/fotoperfil.jpg"
        alt="imgperfil"
        class="imgProfile"
      />
      <div class="textInit">
        <h1>Federico Scarpecci</h1>
        <h3>{{ subText }}</h3>
      </div>
    </article>
    <h4 id="about">Acerca de mí</h4>
    <p class="textPresentacion">
      Soy un apasionado del desarrollo web con experiencia sólida en tecnologías de frontend como HTML, CSS, JavaScript, React.js y Vue.js. Mi amor por crear interfaces atractivas y funcionales se refleja en proyectos innovadores que destacan por su calidad visual y experiencia de usuario.

Actualmente, estoy ampliando mis habilidades hacia el desarrollo Fullstack, explorando tecnologías como Node.js, MySQL y Linux. Mi objetivo es combinar mi experiencia en frontend con un dominio completo en el desarrollo backend, creando así soluciones web integrales y de alto rendimiento.
    </p>
  </div>
</template>

<script>
export default {
  name: "MainComp",
  data() {
    return { subText: "<front-end-dev/>" };
  },
};
</script>

<style scoped>
.articleMainComp {
  display: flex;
  align-items: center;
  padding: 4vw 10vw;
  gap: 2vw;
  transition: background-color 1.2s;
  background-color: rgba(255, 255, 255, 0.1);
}

.articleMainComp:hover {
  background-color: rgba(81, 255, 0, 0.39);
}

.imgProfile {
  border-radius: 50%;
  height: 23vw;
}

.textInit {
  display: inline-block;
  color: white;
  font-weight: 800;
  font-size: 15pt;
}

h4 {
  color: white;
  padding: 1.5vw;
  font-size: 23pt;
  font-weight: bold;
  text-align: center;
}

.textPresentacion {
  font-size: 11pt;
  padding: 2vw 15vw;
  margin-bottom: 3.5vw;
  color: white;
}

@media (min-width: 1000px) {
  .textInit {
    font-size: 35pt;
  }

  h4 {
    font-size: 30pt;
  }

  .textPresentacion {
    font-size: 15pt;
  }
}
</style>
