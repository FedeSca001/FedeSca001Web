<template>
  <section class="sections">
    <div class="grafic"><button type="button">Graphic design</button></div>
    <div class="progr"><button type="button">Programming</button></div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
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
.sections{
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: blue;
}
</style>