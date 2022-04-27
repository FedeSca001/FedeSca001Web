<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComp from './components/NavComp/NavComp.vue';
import HeaderComp from './components/HeaderComp/HeaderComp.vue';
import ToolsComponent from './components/ToolsComponent/ToolsComponent.vue';
import MainComp from './components/MainComp/MainComp.vue';
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
