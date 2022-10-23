<template>
  <section class="navComp">
    <router-link to="/"><button class="home">Home</button></router-link>
    <router-link class="infPers" to="/infopersonal"><button>Personal.information/</button></router-link>
    <router-link class="tools" to="/tools"><button>Tools/</button></router-link>
    <hour-comp />
  </section>
</template>

<script setup>
import HourComp from "../HourComp/HourComp.vue";

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
.navComp{
  height: 40px;
  width: 100%;
}
.navComp:hover{
  background-color: rgba(81, 255, 0, 0.205);
  transition: 1.2s;
}
.hourNav{
    font-size: 16pt;
    font-weight: 500;
    color: rgb(255, 238, 0);
    display: inline-block;
    text-align: right;
}
</style>