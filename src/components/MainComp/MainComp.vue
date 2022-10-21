<template>
<div>
    <article class="articleComp">
    <img src="../../assets/images/fotoperfil.jpg" alt="imgperfil" class="imgProfile">
    <div class="textInit">
      <h1>Federico Scarpecci</h1>
      <h3>{{subText}}</h3>
    </div>
    </article>
    <h4>Carta de Presentación</h4>
    <p class="textPresentacion">
    Soy desarrollador front-end en búsqueda de mi primer empleo de programador. Comencé mis estudios de el mes de septiembre del año 2021 de forma autodidactica como la mayoría y luego tomé dos cursos, los cuales me ayudaron a consolidar mis conocimientos en las materias estudiadas. En mi camino de aprendizaje llevo visto html, css, javascript, react js y vue js. Se puede ver en mi repositorio de github que subí proyectos usando estas tecnologías, además de librerías como Bootstrap, jquery y Ajax, axios, ReactBootstrap, vuetify. En cuanto a los frameworks, comencé con react js y vue js, pero decidí enfocarme en el segundo. En vue js comencé en su versión 2 y luego estudié su versión 3 con las herramientas setup, pinia,vuex, router y vuetify haciendo llamas API y validando usuarios.
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
.imgProfile{
  border-radius: 4vw;
  height: 20vw;
}
.textInit{
  display: inline-block;
  color: white;
  font-weight: 800;
  font-size: 2.8vw;
}
h4{
  padding-top: 3vw;
  font-size: 2.4vw;
  font-weight: bold;
  text-align: center;
}
.textPresentacion{
  font-size: 1.3vw;
  padding: 1vw 15vw 3vw 15vw;
  color: black;
}
</style>