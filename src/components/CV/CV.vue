<script setup>
const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://fedesca001-front-end.netlify.app/assets/Federico-Scarpecci-CV.pdf'; // Reemplaza 'tu-dominio' con tu dominio de Netlify
    link.download = 'Federico-Scarpecci-CV.pdf';
    link.click();
}
</script>

<template>
    <div id="DescargaCV">
        <button class="btnCV" type="button" @click="downloadCV">Descargar CV</button>
    </div>
</template>



<style>
#DescargaCV {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
}

.btnCV {
    font-size: 25px;
    background-color: aliceblue;
    padding: 8px 15px;
    border-radius: 3px;
    border: solid rgb(255, 255, 255, 100) 1px;
    margin: 15px auto;
    box-shadow: 0 5px 6px rgba(199, 199, 199, 0.473); /* Sombras */
    transition: all 0.3s ease; /* Efecto de transición */
}

.btnCV:hover {
    background-color: rgba(78, 78, 78, 0.247);
    color: aliceblue;
    border: solid whitesmoke 1px;
    transform: scale(1.05);
}
</style>
