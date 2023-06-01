<script setup>
  import NavComp from "./components/NavComp/NavComp.vue";
  import MainComp from "./components/MainComp/MainComp.vue";
  import InfoPersonal from "./components/InfoPersonal/InfoPersonal.vue";
  import ToolsComponent from "./components/ToolsComponent/ToolsComponent.vue";
  import PortFolio from "./components/PortFolio/PortFolio.vue";
  import FooterComp from "./components/FooterComp/FooterComp.vue";
</script>

<template>
  <div class="appStyle" id="appStyle">
    <NavComp />
    <MainComp />
    <PortFolio />
    <ToolsComponent />
    <InfoPersonal />
    <FooterComp />
  </div>
</template>

<style>
.appStyle {
  min-height: 100vh;
  padding-top: 60px;
  background-image: linear-gradient(
    135deg,
    rgb(2, 14, 68),
    rgb(14, 14, 102),
    rgb(87, 8, 87),
    purple,
    rgb(86, 10, 131)
  );
  background-size: 250% 250%;
  animation: animateBackground 10s infinite linear;
}

@keyframes animateBackground {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
