<template>
  <section class="sections">
    <div><router-link to="/"><v-btn flat variant="outlined">Graphic design</v-btn></router-link></div>
    <div><router-link to="/"><v-btn flat variant="outlined">Programming</v-btn></router-link></div>
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
</style>