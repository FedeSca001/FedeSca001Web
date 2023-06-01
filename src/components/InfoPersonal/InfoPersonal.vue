<template>
  <article class="infoPersonal" id="infoPersonal">
    <div class="section">
      <h1 class="sectionTitle">Personal Information</h1>
      <ul class="infoList">
        <li>
          <span class="infoLabel">Name:</span>
          <span class="infoValue">Federico Scarpecci</span>
        </li>
        <li>
          <span class="infoLabel">Age:</span>
          <span class="infoValue">30</span>
        </li>
        <li>
          <span class="infoLabel">Nationality:</span>
          <span class="infoValue">Argentinian - Italian</span>
        </li>
        <li>
          <span class="infoLabel">Current Location:</span>
          <span class="infoValue">Argentinian</span>
        </li>
        <li>
          <span class="infoLabel">Language:</span>
          <span class="infoValue">Spanish</span>
        </li>
        <li>
          <span class="infoLabel">Studies:</span>
          <span class="infoValue">HTML, CSS, JavaScript, Vue.js, Vuex</span>
        </li>
      </ul>
    </div>
    <div class="section">
      <h1 class="sectionTitle">Contact</h1>
      <ul class="infoList">
        <li>
          <span class="infoLabel">Email:</span>
          <span class="infoValue">familadore@gmail.com</span>
        </li>
        <li>
          <span class="infoLabel">Phone:</span>
          <span class="infoValue">+393511911615</span>
        </li>
        <li>
          <span class="infoLabel">Address:</span>
          <span class="infoValue">Palo Mayor 1, Málaga, Andaluzia, España</span>
        </li>
        <li>
          <span class="infoLabel">Instagram:</span>
          <span class="infoValue">instagram.com/fedesca001/</span>
        </li>
        <li>
          <span class="infoLabel">LinkedIn:</span>
          <span class="infoValue">linkedin.com/in/federico-scarpecci-developer/</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "InfoPersonal",
};
</script>

<style scoped>
.infoPersonal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
}

.section {
  flex-basis: 100%;
  max-width: 100%;
  padding: 1rem;
}

.sectionTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
  color: #ff3860;
}

.infoList {
  list-style: none;
  padding: 0;
}

.infoList li {
  margin-bottom: 0.5rem;
  animation: slideIn 0.5s ease-in-out;
}

.infoLabel {
  font-weight: bold;
  color: #ff3860;
}

.infoValue {
  font-weight: normal;
  color: #333;
}

@media (min-width: 480px) {
  .section {
    flex-basis: 50%;
    max-width: 50%;
  }
}
</style>
