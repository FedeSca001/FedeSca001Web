<template>
  <article>
    <img src="../../assets/images/fotoperfil.png" alt="imgperfil">
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
      {subText: '<Front End Dev/>'}
    )
  }
}
</script>

<style scoped>
.textInit{
  display: inline-block;
}
</style>