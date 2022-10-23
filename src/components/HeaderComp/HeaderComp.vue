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
  border: solid 0.5px rgb(0, 255, 0);
  padding: 1vw 2vw;
  font-size: 2vw;
  font-weight: bold;
  color: white;
  border-color: #0063a5;
  box-shadow: 0 0 40px 40px #0063a5 inset, 0 0 0 0 #0063a5;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 350ms ease-in-out;
}
.btn:hover{
  background-color: rgb(0, 255, 0);
  border-color: white;
  box-shadow: 0 0 10px 0 rgb(0,255,0) inset, 0 0 10px 4px rgb(0,255,0);
}
</style>