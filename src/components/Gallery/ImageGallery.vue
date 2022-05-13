<template>
  <article class="article">
    <img src="../../assets/images/agv.jpg" alt="agv">
    <img src="../../assets/images/band.jpg" alt="band">
    <img src="../../assets/images/pixel.jpg" alt="perfil">
    <img src="../../assets/images/pool.jpg" alt="agv">
    <img src="../../assets/images/hilario.jpg" alt="hilario">
    <img src="../../assets/images/jagger.jpg" alt="friends">
    <img src="../../assets/images/compañeros.jpg" alt="friends">
    <img src="../../assets/images/perfil.jpg" alt="friends">
    <img src="../../assets/images/ktm.jpg" alt="friends">
  </article>
</template>

<script>
export default {
    name: "imageGalleryComp",
}
</script>

<style scoped>
.article{
  background-color: black;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2vw;
  padding: 2vw 15vw;
  transition: 600ms;
}
img{
  height: 20vw;
  border-radius: 1.5vw;
}
</style>