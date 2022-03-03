<template>
  <section class="sections">
    <div class="grafic">
      <button type="button">Graphic design</button>
    </div>
    <div class="progr">
      <button type="button" class="progr">Programming</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
.grafic{
  background-image: url("../../assets/images/agv.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
div{
  display: block;
  width: 50%;
  align-items: center;
  text-align: center;
}
button{
  margin: 1vh 1vw;
  height: 5vh;
  width: 14vw;
  font-weight: 800;
  font-size: 1rem;
  background: none;
  border: none;
}
.sections{
  display: flex;
  background-color: blue;
}
</style>