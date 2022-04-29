<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComp from './components/NavComp/NavComp.vue';
import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import ToolsComponent from './components/ToolsComponent/ToolsComponent.vue';
import MainComp from './components/MainComp/MainComp.vue';
import FooterComp from './components/FooterComp/FooterComp.vue';
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
