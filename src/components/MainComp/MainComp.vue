<template>
  <article>
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
article{
  background-color: grey;
}
.imgProfile{
  border-radius: 100%;
}
.textInit{
  display: inline-block;
}
</style>