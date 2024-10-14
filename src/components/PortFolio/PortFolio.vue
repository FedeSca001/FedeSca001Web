<template>
  <article class="articlePortFolioComp" id="portfolioId">
    <h4>Portfolio</h4>
    <div class="containCard">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="card-header">
          <div class="img-card">
            <img class="img-style" :src="`../src/assets/images/${item.img}.png`" :alt="item.img">
          </div>
          <div class="titleCard">
            <h5 class="title">{{ item.title }}</h5>
            <h6 class="subtitle">{{ item.subTitle }}</h6>
          </div>
        </div>
        <div class="links">
          <a :href="item.link" target="_blank" class="link">View Code</a>
          <a :href="item.deploy" target="_blank" class="link">Live Demo</a>
        </div>
        <p class="about">{{ item.description }}</p>
      </div>
    </div>
  </article>
</template>


<script>
import list from "../../assets/portfolio.json";

export default {
  name: "portFolio-comp",
  data() {
    return {
      items: list,
    };
  }
};
</script>

<style scoped>
.articlePortFolioComp {
  width: 100%;
  padding: 4vw 2vw;
  background-color: #fefefe;
}

h4 {
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

/* Estilos de las tarjetas */
.containCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.15);
}

/* Encabezado de la tarjeta */
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.img-card {
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  width: 120px;
  height: 120px;
  margin-right: 20px;
}

.img-style {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titleCard {
  flex-grow: 1;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.subtitle {
  font-size: 14px;
  font-weight: 300;
  color: #777;
  margin: 5px 0 0;
}

/* Links */
.links {
  text-align: center;
  margin-top: 15px;
}

.link {
  color: #007BFF;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  transition: color 0.3s;
}

.link:hover {
  color: #0056b3;
}

/* Descripción */
.about {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-top: 10px;
}

/* Responsivo */
@media (min-width: 768px) {
  .card {
    width: 45%;
  }
}

@media (min-width: 1200px) {
  .card {
    width: 30%;
  }
}
</style>
