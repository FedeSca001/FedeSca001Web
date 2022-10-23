<template>
  <section class="navComp">
    <router-link to="/"><button class="home">Home</button></router-link>
    <router-link class="infPers" to="/infopersonal"><button>Personal.information/</button></router-link>
    <router-link class="tools" to="/tools"><button>Tools/</button></router-link>
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
  font-size: 1.8vw;
  font-weight: 600;
  color: red;
  margin: 0 2vw;
}
.infPers{
  color: yellow;
}
.tools{
  color:rgb(0, 255, 0);
}
button{
  background: none;
  border: none;
  margin: 0.1vw 0.4vw;
  font-weight: 300;
  font-size: 1.4vw;
}
.containHoras{
    font-size: 1.4vw;
    font-weight: 500;
    color: rgb(255, 255, 255);
    display: inline-block;
}
.navComp{
  display: block;
  height: 40px;
  width: 100%;
}
.navComp:hover{
  background-color: rgba(81, 255, 0, 0.205);
  transition: 1.2s;
}

</style>