<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComp from './components/NavComp/NavComp.vue';
import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import FooterComp from "./components/FooterComp/FooterComp.vue"
</script>

<template>
  <div>
    <NavComp/>
    <HeaderComp/>
    <RouterView />
    <FooterComp/>
  </div>
</template>

<style>

</style>
