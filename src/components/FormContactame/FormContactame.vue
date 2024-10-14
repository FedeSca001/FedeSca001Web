<template>
  <div class="container" id="formContactame">
    <h1>Envía tu consulta</h1>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="nombre">Nombre y apellido:</label>
        <input type="text" id="nombre" v-model="nombre" required class="input-field">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required class="input-field">
      </div>

      <div class="form-group">
        <label for="text">Mensaje:</label>
        <textarea id="text" v-model="text" required class="textarea-field"></textarea>
      </div>

      <p v-if="!tecla" class="success-message">No está disponible</p>
      <button type="submit" class="submit-button">Enviar</button>
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
  if (nombre.value.trim() === '' || email.value.trim() === '' || text.value.trim() === '') {
    alert('Por favor, complete todos los campos antes de enviar el mensaje');
  } else {
    const formData = {
      nombre: nombre.value,
      email: email.value,
      text: text.value,
      date: new Date()
    };

    axios.post('https://parking-back-end.onrender.com/mensaje/enviarMensaje', formData)
      .then(response => {
        alert('Mensaje enviado con éxito');
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => {
        alert('Error al enviar el mensaje');
        console.error(error);
      });
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #555;
}

.input-field, .textarea-field {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

.input-field:focus, .textarea-field:focus {
  border-color: #007BFF;
  outline: none;
}

.textarea-field {
  height: 150px;
  resize: vertical;
}

.submit-button {
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.success-message {
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
