<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComp from './components/NavComp/NavComp.vue';
import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import FooterComp from "./components/FooterComp/FooterComp.vue"
</script>

<template>
  <div class="appStyle">
    <NavComp/>
    <HeaderComp/>
    <RouterView />
    <FooterComp/>
  </div>
</template>

<style>
.appStyle{
  background-image: linear-gradient(135deg,rgb(2, 14, 68),rgb(0, 0, 134), rgb(86, 10, 131));
  background-size: 100%;
}
</style>
