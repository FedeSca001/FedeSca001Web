<template>
  <section class="navComp">
    <a href="#appStyle"><button class="home">Home</button></a>
    <a href="#about" class="aboutLink"><button>Acerca de mí</button></a>
    <a href="#portfolioId" class="portfolio"><button>Portfolio</button></a>
    <a href="#containTools" class="tools"><button>Herramientas</button></a>
    <a href="#infoPersonal" class="contactMe"><button>Contacto</button></a>
  </section>
</template>

<style scoped>
.navComp {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(42, 133, 0, 0.2);
  transition: background-color 0.5s;
}

.navComp:hover {
  background-color: rgba(19, 58, 0, 0.8);
}

.home {
  font-size: 16pt;
  font-weight: 600;
  color: red;
  margin: 0 10px;
}

.aboutLink {
  color: white;
}

.portfolio {
  color: rgb(0, 255, 0);
}

.tools {
  color: rgb(218, 209, 78);
}

.contactMe {
  color: rgb(43, 226, 180);
}

button {
  background: none;
  border: none;
  margin: 1px 4px;
  font-weight: 300;
  font-size: 10pt;
  transition: color 0.3s;
}

@media (min-width: 1000px) {
  .home {
    font-size: 24pt;
    margin: 0 20px;
  }

  button {
    font-size: 16pt;
  }
}

@media (max-width: 480px) {
  .navComp {
    height: auto;
    flex-wrap: wrap;
    padding: 10px;
  }

  .home {
    font-size: 14pt;
    margin: 5px 10px;
  }

  button {
    font-size: 12pt;
  }
}
</style>
