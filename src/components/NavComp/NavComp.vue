<template>
  <section class="navComp">
    <router-link to="/"><button>Home</button></router-link>
    <router-link to="/infopersonal"><button>Personal.information</button></router-link>
    <router-link to="/studies"><button>Academic.Studies</button></router-link>
    <router-link to="/contact"><button>Contact</button></router-link>
    <div class="redesSociales">
      <a href="https://www.facebook.com/fede.scarpecci" target="blank">faceboock</a>
      <a href="https://www.instagram.com/fede_scarpecci/" target="blank">Instagram</a>
      <a href="https://github.com/FedeSca001" target="blank">GitHub</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavComp'
}
</script>

<style scoped>
.redesSociales{
  gap: 2px;
  display: inline-block;
}
a{
  color: white;
}
.navComp{
  background-color: black;
}
</style>