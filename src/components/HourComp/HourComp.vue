<template>
    <div class="containHoras">{{hour}}:{{minute}}-{{format}}/</div>
</template>

<script setup>
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let format = '';
let selectFormat = hour > 11 ? format = 'PM' : format = 'AM'
</script>

<style scoped>
.containHoras{
    font-size: 1.4vw;
    font-weight: 500;
    color: rgb(255, 255, 255);
    display: inline-block;
}
</style>