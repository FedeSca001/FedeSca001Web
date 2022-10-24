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
.sections:hover{
  transition: 1.2s;
  background-color: rgba(255, 255, 255, 0.137);
}
div{
  display: block;
  width: 50%;
  text-align: center;
  margin: 4vw auto;
}
.btn{
  border-radius: 0.8vw;
  border: solid 0.5px;
  padding: 1vw 2vw;
  font-size: 14pt;
  font-weight: bold;
  color: white;
  border-color: #013658;
  box-shadow: 0 0 40px 40px #0063a5 inset, 0 0 0 0 #0063a5;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 350ms ease-in-out;
}
.btn:hover{
  background-color: rgb(0, 167, 0);
  border-color: white;
  box-shadow: 0 0 10px 0 rgb(0,255,0) inset, 0 0 10px 4px rgb(0,255,0);
}
@media (min-width: 1000px){
div{
  margin: 1.5vw auto;
}
.btn{
  font-size: 20pt;
}
}
</style>