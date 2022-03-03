<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComp from './components/NavComp/NavComp.vue';
import HeaderComp from './components/HeaderComp/HeaderComp.vue';
</script>

<template>
  <div>
    <NavComp/>
    <HeaderComp/>
    <RouterView />
  </div>
</template>

<style>

</style>
