<template>
  <section class="sections">
    <div class="grafic"><router-link to="/"><button type="button grafic">Graphic design</button></router-link></div>
    <div class="progr"><router-link to="/"><button type="button progr">Programming</button></router-link></div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
.sections{
  max-height: 8vw;
  display: flex;
  align-items: center;
}
div{
  display: block;
  width: 50%;
  text-align: center;
  margin: 1vh auto;
}
button:hover{
  transition-duration: 500ms;
  background-color: black;
  color: azure;
}
button{
  padding: 1vw;
  border-radius: 1vw;
  font-weight: 800;
  font-size: 1.5rem;
  background: none;
  border: none;
}
</style>