<template>
    <div class="containHoras">{{now}}</div>
</template>

<script setup>
let today = new Date();
let now = today.toLocaleString();
let identificadorDeTemporizador;

function temporizadorDeRetraso() {
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 1000);
}

function funcionConRetraso() {
  today = new Date();
  now = today.toLocaleString();
}

function borrarAlerta() {
  clearTimeout(identificadorDeTemporizador);
}
temporizadorDeRetraso()
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