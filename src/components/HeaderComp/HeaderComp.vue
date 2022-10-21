<template>
  <section class="sections">
    <div>
      <router-link to="/portfolio">
        <v-btn flat color="black" variant="outlined" class="btn">PortFolio</v-btn>
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
  border-radius: 0.3vw;
  border: none;
  padding: 1.6vw;
  font-size: 1.2vw;
}
.btn:hover{
  transition: 200ms;
  background-color: rgb(9, 255, 0);
  border-color: blanchedalmond;
  font-weight: 500;
}
</style>