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
            <p>Node Js</p>
          </div>
          <div>
            <img src="../../assets/images/mongodb.jpg" alt="mongo db" style="width: 110px;">
            <p>Mongo DB</p>
          </div>
          <div>
            <img src="../../assets/images/php.jpg" alt="php" style="width: 110px;">
            <p>Mongo DB</p>
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
          <div>
            <img src="../../assets/images/vue.jpg" alt="vue" style="width: 110px;">
            <p>Vue.js</p>
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
  padding: 3vw 0;
  text-align: center;
}

.list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2vw;
}

.listTools {
  padding: 2vw;
  margin: 2vw;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

h4 {
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 2vw;
}

h5 {
  font-size: 20px;
  color: white;
  margin-bottom: 1.5vw;
}

.contTools {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.contTools div {
  width: 120px;
  margin: 1.5vw;
  transition: transform 0.3s;
}

.contTools div:hover {
  transform: scale(1.1);
}

img {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
}

p {
  margin-top: 0.5vw;
  font-size: 14px;
  color: white;
  text-align: center;
}

@media (min-width: 1000px) {
  .containTools {
    padding: 4vw 0;
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

  img {
    padding: 7px;
  }

  p {
    margin-top: 0.8vw;
    font-size: 16px;
  }
}
</style>
