<template>
  <div class="containTools" id="containTools">
      <h4>Herramientas</h4>
      <ul class="list">
          <li class="listTools">
            <h5>Programación</h5>
            <img src="../../assets/images/html.jpg" alt="html">
            <img src="../../assets/images/css.jpg" alt="css">
            <img src="../../assets/images/js.jpg" alt="javascript">
            <img src="../../assets/images/jquery.jpg" alt="jquery">
            <img src="../../assets/images/axios.png" alt="axios">
            <img src="../../assets/images/bootstrap.png" alt="bootstrap">
            <img src="../../assets/images/git.jpg" alt="git">
            <img src="../../assets/images/vue.jpg" alt="vue">
          </li>
          <li class="listTools">
            <h5>Diseño gráfico</h5>
            <img src="../../assets/images/ilustrator.jpg" alt="ilustratos">
            <img src="../../assets/images/photoshop.jpg" alt="photoshop">
            <img src="../../assets/images/indesing.png" alt="indesing">
            <img src="../../assets/images/premiere.png" alt="premiere">
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Tools'
}
</script>

<style scoped>

.listTools{
  padding: 1vw;
  margin: 1.5vw auto;
}
img{
  transition: 400ms;
  width: 7vw;
  margin: 1vw;
  background-color: white;
  border-radius: 10%;
  padding: 5px;
}
img:hover{
  box-shadow: 2px 6px 45px #ff714dc7;
}
h4{
  color: white;
  padding-top: 3vw;
  font-size: 23pt;
  font-weight: bold;
  text-align: center;
  margin-top: 3vw;
}
h5{
  font-size: 20pt;
  margin-bottom: 0.4vw;
  color: white;

}
.list{
  margin: 0.5vw auto;
}
@media (min-width: 1000px){

h4{
  font-size: 30pt;
  margin-bottom: 0.5vw;
}
.list{
  width: 80vw;
  margin: 0 auto;
}
}
</style>