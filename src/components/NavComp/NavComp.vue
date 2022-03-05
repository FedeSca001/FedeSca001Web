<template>
  <section class="navComp">
    <router-link to="/"><button>Home</button></router-link>
    <router-link to="/infopersonal"><button>Personal.information</button></router-link>
    <router-link to="/studies"><button>Academic.Studies</button></router-link>
    <router-link to="/contact"><button>Contact</button></router-link>
    <div class="redesSociales">
      <a href="https://www.facebook.com/fede.scarpecci" target="blank"><button>faceboock</button></a>
      <a href="https://www.instagram.com/fede_scarpecci/" target="blank"><button>Instagram</button></a>
      <a href="https://github.com/FedeSca001" target="blank"><button>GitHub</button></a>
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
  display: inline-block;
}
a{
  color: white;
}
button{
  background: none;
  border: none;
  color: aliceblue;
  margin: 0vh 0.4vw;
  font-weight: 300;
  font-size: 2vw;
}
.navComp{
  background-color: black;
  height: 3vw;
}
</style>