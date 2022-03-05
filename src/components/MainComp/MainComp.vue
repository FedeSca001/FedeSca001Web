<template>
  <article class="articleComp">
    <img src="../../assets/images/fotoperfil.png" alt="imgperfil" class="imgProfile">
    <div class="textInit">
      <h1>Federico Scarpecci</h1>
      <h2>{{subText}}</h2>
    </div>
  </article>
</template>

<script>
export default {
  name: 'MainComp',
  data() {
    return (
      {subText: '<front-end-dev/>'}
    )
  }
}
</script>

<style scoped>
.imgProfile{
  border-radius: 100%;
  height: 20vw;
}
.textInit{
  display: inline-block;
  color: white;
  font-weight: 800;
  font-size: 2vw;
}
</style>