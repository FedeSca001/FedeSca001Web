<template>
  <section class="navComp">
    <router-link to="/"><button class="home">Home</button></router-link>
    <router-link to="/infopersonal"><button>Personal.information/</button></router-link>
    <router-link to="/contact"><button>Contact/</button></router-link>
    <router-link to="/tools"><button>Tools/</button></router-link>
  </section>
</template>

<script>
export default {
  name: 'NavComp'
}
</script>

<style scoped>
.home{
  font-size: 1.2vw;
  font-weight: 600;
}
button{
  background: none;
  border: none;
  color: aliceblue;
  margin: 0.1vw 0.4vw;
  font-weight: 300;
  font-size: 1vw;
}
.navComp{
  background-color: black;
  height: 2vw;
}
</style>