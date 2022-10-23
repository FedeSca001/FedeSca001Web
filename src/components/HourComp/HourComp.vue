<template>
    <div class="containHoras">{{date}}</div>
</template>

<script setup>
let date = new Date(Date.now());
let hour = date.getHours;
let minute = date.getMinutes;
let seconds = date.getSeconds;
</script>

<style scoped>
.containHoras{
    font-size: 16pt;
    font-weight: 500;
    color: rgb(255, 255, 255);
    display: inline-block;
    text-align: right;
}
</style>