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
  justify-content: center;
  padding: 5vw 10vw;
  gap: 3vw;
  transition: background-color 0.5s ease;
  background-color: var(--color-background-soft); /* Fondo suave para resaltar el contenido */
  border-radius: 12px; /* Bordes redondeados para un look moderno */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra ligera para resaltar el bloque */
}

.imgProfile {
  border-radius: 50%;
  height: 18vw;
  width: 18vw;
  object-fit: cover; /* Asegura que la imagen de perfil no se deforme */
  border: 4px solid var(--color-border); /* Añade un borde sutil para destacar */
  transition: transform 0.3s ease;
}

.imgProfile:hover {
  transform: scale(1.05); /* Efecto sutil al pasar sobre la imagen */
}

.textInit {
  color: var(--color-heading);
  font-weight: 800;
  font-size: 2rem;
  text-align: left;
}

.textInit h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.textInit h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  font-weight: 400;
}

h4 {
  color: var(--color-heading);
  padding: 2vw;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.textPresentacion {
  font-size: 1rem;
  padding: 0 15vw;
  margin-bottom: 3.5vw;
  line-height: 1.8; /* Mejora la legibilidad */
  color: var(--color-text);
}

@media (min-width: 1000px) {
  .textInit {
    font-size: 2.5rem;
  }

  .textInit h1 {
    font-size: 3rem;
  }

  .textInit h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  .textPresentacion {
    font-size: 1.25rem;
    padding: 0 12vw;
  }
}

</style>
