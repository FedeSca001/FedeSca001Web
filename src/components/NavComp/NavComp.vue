<template>
  <section class="navComp">
    <a href="#appStyle"><button class="home">Home</button></a>
    <a href="#about" class="aboutLink"><button>Acerca de mí</button></a>
    <a href="#portfolioId" class="portfolio"><button>Portfolio</button></a>
    <a href="#containTools" class="tools"><button>Herramientas</button></a>
    <a href="#infoPersonal" class="contactMe"><button>Contacto</button></a>
    <a href="#formContactame" class="mensaje"><button>Enviar Mensaje</button></a>
  </section>
</template>

<style scoped>
.navComp {
  display: flex;
  justify-content: center;
  align-items: center;
}


.navComp a {
  text-decoration: none; /* Remueve el subrayado */
}

button {
  background: none;
  border: none;
  margin: 0 15px;
  padding: 10px;
  font-weight: 500;
  font-size: 14pt;
  color: var(--color-text);
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

button:hover {
  color: var(--vt-c-indigo); /* Color resaltado en hover */
  transform: translateY(-2px); /* Efecto sutil al pasar el cursor */
}

button:focus {
  outline: none;
  border-bottom: 2px solid var(--vt-c-indigo); /* Añade un borde en la parte inferior al seleccionar */
}

@media (min-width: 1000px) {
  .home {
    font-size: 18pt;
  }

  button {
    font-size: 14pt;
    margin: 0 20px;
  }
}

@media (max-width: 480px) {
  .navComp {
    flex-wrap: wrap; /* Flexibilidad en dispositivos móviles */
    justify-content: space-around;
    height: auto;
    padding: 10px;
  }

  button {
    font-size: 12pt;
    margin: 10px 5px;
  }
}

</style>
