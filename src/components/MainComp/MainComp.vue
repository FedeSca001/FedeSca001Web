<template>
<div>
  <article class="articleMainComp">
    <img src="../../assets/images/fotoperfil.jpg" alt="imgperfil" class="imgProfile">
    <div class="textInit">
      <h1>Federico Scarpecci</h1>
      <h3>{{subText}}</h3>
    </div>
  </article>
  <h4>Acerca de mí</h4>
  <p class="textPresentacion">
  Comencé mis estudios de el mes de septiembre del año 2021 de forma autodidactica como la mayoría y luego tomé dos cursos, los cuales me ayudaron a consolidar mis conocimientos en las materias estudiadas. En mi camino de aprendizaje llevo visto html, css, javascript, react js y vue js. Se puede ver en mi repositorio de github que subí proyectos usando estas tecnologías, además de librerías como Bootstrap, jquery y Ajax, axios, ReactBootstrap, vuetify. En cuanto a los frameworks, comencé con react js y vue js, pero decidí enfocarme en el segundo. En vue js comencé en su versión 2 y luego estudié su versión 3 con las herramientas setup, pinia,vuex, router y vuetify haciendo llamas API y validando usuarios.
  </p>
</div>
</template>

<script>
export default {
  name: 'MainComp',
  data() {
    return (
      {subText: '<front-end-dev/>'}
    )
  },
}
</script>

<style scoped>
.articleMainComp{
    display: flex;
    align-items: center;
    padding: 4vw 10vw;
    gap: 2vw;
    transition: 1.2s;
    background-color: rgba(255, 255, 255, 0.137);
}
.articleMainComp:hover{
    background-color: rgba(81, 255, 0, 0.39);
}
.imgProfile{
  border-radius: 4vw;
  height: 23vw;
}
.textInit{
  display: inline-block;
  color: white;
  font-weight: 800;
  font-size: 15pt;
}
h4{
  color: white;
  padding: 1.5vw;
  font-size: 23pt;
  font-weight: bold;
  text-align: center;
}
.textPresentacion{
  font-size: 11pt;
  padding: 1vw 15vw;
  color: white;
}
@media (min-width: 1000px){
  .textInit{
    font-size: 35pt;
  }
  h4{
    font-size: 30pt;
  }
  .textPresentacion{
    font-size: 15pt
  }
}
</style>