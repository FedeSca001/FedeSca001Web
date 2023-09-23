<template>
    <div class="container" id="formContactame">
      <h1>Envía tu consulta</h1>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="nombre">Nombre y apellido:</label>
          <input type="text" id="nombre" v-model="nombre" required class="half-width" :disabled="tecla">
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required class="half-width" :disabled="tecla">
        </div>
  
        <div class="form-group">
          <label for="text">Mensaje:</label>
          <textarea id="text" v-model="text" required readonly class="full-width"></textarea>
        </div>
  
        <p v-if="!tecla" class="success-message">No está disponible</p>
        <button type="submit" class="submit-button" :disabled="tecla">Enviar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { ref, onMounted } from 'vue';
  
  const nombre = ref('');
  const email = ref('');
  const text = ref('');
  const tecla = ref(false);
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://parking-back-end.onrender.com/mensaje/getAlgo');
      tecla.value = response.status;
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  });
  
  const submitForm = () => {
    const formData = {
      nombre: nombre.value,
      email: email.value,
      text: text.value,
      date: new Date()
    };
  
    axios.post('http://localhost:5000/mensaje/enviarMensaje', formData)
      .then(response => {
        alert('Mensaje enviado con éxito');
        console.log(response.data);
      })
      .catch(error => {
        alert('Error al enviar el mensaje');
        console.error(error);
      });
  }
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input.half-width, textarea.full-width {
    width: 100%; /* Ambos campos ocuparán el 100% del ancho */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  textarea.full-width {
    resize: none; /* Evita que los usuarios puedan redimensionar el textarea */
    height: 200px; /* Ajusta la altura del textarea según tus necesidades */
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
  </style>