<template>
  <div class="containTools" id="containTools">
    <h4>Herramientas</h4>
    <ul class="list">
      <li class="listTools">
        <h5>Programación</h5>
        <div class="contTools">
          <div>
            <img src="../../assets/images/html.jpg" alt="html" style="width: 110px;">
            <p>HTML</p>
          </div>
          <div>
            <img src="../../assets/images/css.jpg" alt="css" style="width: 110px;">
            <p>CSS</p>
          </div>
          <div>
            <img src="../../assets/images/js.jpg" alt="javascript" style="width: 110px;">
            <p>JavaScript</p>
          </div>
          <div>
            <img src="../../assets/images/nodejs.jpg" alt="node js" style="width: 110px;">
            <p>Node.Js</p>
          </div>
          <div>
            <img src="../../assets/images/php.jpg" alt="php" style="width: 110px;">
            <p>Php</p>
          </div>
          <div>
            <img src="../../assets/images/mongodb.jpg" alt="mongo db" style="width: 110px;">
            <p>Mongo DB</p>
          </div>
          <div>
            <img src="../../assets/images/sql.jpeg" alt="mongo db" style="width: 110px;">
            <p>My Sql</p>
          </div>
          <div>
            <img src="../../assets/images/vue.jpg" alt="vue" style="width: 110px;">
            <p>Vue.js</p>
          </div>
          <div>
            <img src="../../assets/images/reactjs.png" alt="vue" style="width: 110px;">
            <p>React.js</p>
          </div>
          <div>
            <img src="../../assets/images/jquery.jpg" alt="jquery" style="width: 110px;">
            <p>jQuery</p>
          </div>
          <div>
            <img src="../../assets/images/axios.png" alt="axios" style="width: 110px;">
            <p>Axios</p>
          </div>
          <div>
            <img src="../../assets/images/bootstrap.png" alt="bootstrap" style="width: 110px;">
            <p>Bootstrap</p>
          </div>
          <div>
            <img src="../../assets/images/git.jpg" alt="git" style="width: 110px;">
            <p>Git</p>
          </div>
        </div>
      </li>
      <li class="listTools">
        <h5>Diseño gráfico</h5>
        <div class="contTools">
          <div>
            <img src="../../assets/images/ilustrator.jpg" alt="ilustrator" style="width: 110px;">
            <p>Ilustrator</p>
          </div>
          <div>
            <img src="../../assets/images/photoshop.jpg" alt="photoshop" style="width: 110px;">
            <p>Photoshop</p>
          </div>
          <div>
            <img src="../../assets/images/indesing.png" alt="indesing" style="width: 110px;">
            <p>InDesign</p>
          </div>
          <div>
            <img src="../../assets/images/premiere.png" alt="premiere" style="width: 110px;">
            <p>Premiere</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.containTools {
  padding: 4vw 0;
  text-align: center;
  background-color: var(--color-background-soft);
}

.list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 3vw;
  list-style: none;
}

.listTools {
  padding: 2vw;
  margin: 2vw;
  background-color: var(--color-background); /* Color de fondo armonizado */
  border-radius: 12px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

h4 {
  color: var(--color-heading);
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 2vw;
  transition: color 0.3s;
}

h5 {
  font-size: 22px;
  color: var(--color-text);
  margin-bottom: 1.5vw;
}

.contTools {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.contTools div {
  width: 130px;
  margin: 1.5vw;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contTools div:hover {
  transform: scale(1.1); /* Efecto al hacer hover */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra al hacer hover */
}

img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: solid 1.5px var(--color-border); /* Borde refinado */
  padding: 8px;
}

p {
  margin-top: 0.8vw;
  font-size: 15px;
  color: var(--color-text);
  text-align: center;
}

@media (min-width: 1000px) {
  .containTools {
    padding: 5vw 0;
  }

  .listTools {
    padding: 2vw;
    margin: 1vw;
  }

  h4 {
    font-size: 36px;
  }

  h5 {
    font-size: 24px;
    margin-bottom: 1vw;
  }

  .contTools div {
    width: 150px;
    margin: 1vw;
  }

  p {
    margin-top: 0.5vw;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .contTools div {
    width: 100px;
    margin: 1vw;
  }

  p {
    font-size: 13px;
  }
}

</style>
