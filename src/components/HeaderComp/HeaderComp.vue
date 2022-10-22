<template>
  <section class="sections">
    <div>
      <router-link to="/portfolio">
        <button flat color="black" variant="outlined" class="btn">PortFolio</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style scoped>
.sections{
  display: flex;
  align-items: center;
}
div{
  display: block;
  width: 50%;
  text-align: center;
  margin: 1vw auto;
}
.btn{
  border-radius: 0.8vw;
  border: solid 1.5px rgb(0, 255, 0);
  padding: 1vw 2vw;
  font-size: 2vw;
  font-weight: bold;
  color: black;

}
.btn:hover{
  transition: 600ms;
  background-color: rgb(0, 255, 0);
  border-color: white;

}
</style>