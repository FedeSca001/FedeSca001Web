<template>
  <section class="navComp">
    <a href="#appStyle"><button class="home">Home</button></a>
    <a href="#articleMainComp" class="aboutLink"><button>Acerca de mí/</button></a>
    <a href="#infoPersonal" class="contacme"><button>Contacto/</button></a>
    <a href="#containTools" class="tools"><button>Skills/</button></a>
    <p class="containHoras">{{hour}}:{{minute}}-{{format}}/</p>
  </section>
</template>

<script setup>
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let format = '';
let selectFormat = hour > 11 ? format = 'PM' : format = 'AM'
</script>

<style scoped>
.home{
  font-size: 20pt;
  font-weight: 600;
  color: red;
  margin: 0 2vw;
}
.tools{
  color:rgb(0, 255, 0);
}
button{
  background: none;
  border: none;
  margin: 0.1vw 0.4vw;
  font-weight: 300;
  font-size: 11pt;
}
.containHoras{
    font-size: 11pt;
    font-weight: 500;
    color: rgb(255, 255, 255);
    display: inline-block;
}
.navComp{
  display: block;
  position: fixed;
  top: 0;
  height: 41px;
  background-color: rgba(42, 133, 0, 0.205);
  width: 100%;
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