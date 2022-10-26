<script setup>
import NavComp from './components/NavComp/NavComp.vue';
import MainComp from './components/MainComp/MainComp.vue';
import InfoPersonal from './components/InfoPersonal/InfoPersonal.vue';
import ToolsComponent from './components/ToolsComponent/ToolsComponent.vue';
import PortFolio from './components/PortFolio/PortFolio.vue';
import FooterComp from "./components/FooterComp/FooterComp.vue"
</script>

<template>
  <div class="appStyle">
    <NavComp/>
    <MainComp/>
    <InfoPersonal/>
    <ToolsComponent/>
    <PortFolio/>
    <FooterComp/>
  </div>
</template>

<style>
.appStyle{
  min-height: 100vh;
  background-image: linear-gradient(135deg,rgb(2, 14, 68),rgb(14, 14, 102),rgb(87, 8, 87),purple, rgb(86, 10, 131));
  background-size: 100%;
}
</style>
