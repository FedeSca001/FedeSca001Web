<template>
  <section class="navComp">
    <router-link to="/"><button class="home">Home</button></router-link>
    <router-link class="infPers" to="/infopersonal"><button>Personal.information/</button></router-link>
    <router-link class="tools" to="/tools"><button>Tools/</button></router-link>
  </section>
</template>

<script>
export default {
  name: 'NavComp'
}
</script>

<style scoped>
.home{
  font-size: 19pt;
  font-weight: 600;
  color: red;
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
  font-size: 13pt;
}
.navComp{
  background-color: black;
  height: 40px;
}
</style>