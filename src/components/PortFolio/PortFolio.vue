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
          <a :href="item.link" target="_blank" class="link">Github</a>
          <a :href="item.deploy" target="_blank" class="link">Link to app</a>
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
.img-style {
  width: 180px;
  margin: auto;
}

.img-card {
  background: white;
  border-radius: 5px;
  padding: 5px;
  width: 190px;
  margin: 15px;
}

.card-header {
  display: flex;
  align-items: center;
}

.articlePortFolioComp {
  align-items: center;
  padding: 2vw 0vw;
  transition: 1.2s;
  background-image: linear-gradient(
    135deg,
    rgba(253, 95, 3, 0.2),
    rgba(255, 94, 0, 0.2),
    rgba(255, 94, 0, 0.2),
    rgba(255, 94, 0, 0.2),
    rgba(255, 187, 0, 0.2)
  );
  background-size: 100%;
}

.articlePortFolioComp:hover {
  background-color: rgba(255, 94, 0, 0.39);
}

.links {
  background-color: white;
  text-align: center;
  margin-top: 0.2vw;
  padding: 4pt;
}

.title {
  font-size: 20pt;
  color: white;
}

.subtitle {
  font-size: 14pt;
  color: white;
}

.link {
  font-size: 10pt;
  margin: 0 5px;
}

.about {
  color: white;
  font-size: 10pt;
  padding: 1.5vw;
}

.card {
  margin: 20px auto;
  width: 80vw;
  box-shadow: 0px 12px 52px rgba(0, 0, 0, 0.8);
  padding: 20px;
  background-color: rgba(81, 26, 153, 0.164);
  border-radius: 10px;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0px 6px 50px 5px #edff4d63 inset, 2px 6px 25px #edff4d, 0px 12px 52px rgba(187, 245, 194, 0.322);
}

a {
  text-decoration: none;
}

h4 {
  color: white;
  padding: 1.5vw;
  font-size: 30pt;
  text-align: center;
}

.containCard {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@media (min-width: 1000px) {
  .card {
    height: auto;
    width: 40vw;
    padding: 30px;
    border-radius: 20px;
    margin: 25px;
  }

  .about {
    font-size: 12pt;
    padding: 1.5vw;
    height: 100%;
    overflow: auto;
  }

  .title {
    font-size: 18pt;
  }

  .subtitle {
    font-size: 15pt;
  }

  .links {
    margin-top: 0.6vw;
    padding: 8pt;
  }

  .link {
    font-size: 12pt;
  }

  a {
    margin: 0 0.3vw;
  }
}

@media (max-width: 480px) {
  .card {
    width: 90vw;
    padding: 20px;
    margin: 10px;
  }

  .title {
    font-size: 18pt;
  }

  .subtitle {
    font-size: 12pt;
  }

  .link {
    font-size: 12pt;
  }

  .about {
    font-size: 10pt;
    padding: 10px;
  }

  h4 {
    font-size: 20pt;
    padding: 10px;
  }
}
</style>
