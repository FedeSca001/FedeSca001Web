<template>
  <section class="navComp">
    <a href="#appStyle"><button class="home">Home</button></a>
    <a href="#about" class="aboutLink"><button>Acerca de mí/</button></a>
    <a href="#portfolioId" class="portfolio"><button>Portfolio/</button></a>
    <a href="#containTools" class="tools"><button>Herramientas/</button></a>
    <a href="#infoPersonal" class="contacme"><button>Contacto/</button></a>
  </section>
</template>

<script setup>

</script>

<style scoped>
.home{
  font-size: 12pt;
  font-weight: 600;
  color: red;
  margin: 0 2vw;
}
.tools{
  color:rgb(218, 209, 78);
}
.aboutLink{
  color: white;
}
.portfolio{
  color:rgb(0, 255, 0);
}
.contacme{
  color: rgb(43, 226, 180);
}
button{
  background: none;
  border: none;
  margin: 0.1vw 0.4vw;
  font-weight: 300;
  font-size: 8pt;
}
.navComp{
  display: block;
  position: fixed;
  top: 0;
  height: 41px;
  width: 100%;
  background-color: rgba(42, 133, 0, 0.205);
}
.navComp:hover{
  background-color: rgb(19, 58, 0,0.8);
  transition: 1.2s;
}
@media (min-width: 1000px){
.home{
  font-size: 24pt;
}
button{
  font-size: 16pt;
}
.containHoras{
  font-size: 16pt;
}
.navComp{
  height: 60px;
  width: 100%;
  padding: 0.2vw 0;
}
}
</style>