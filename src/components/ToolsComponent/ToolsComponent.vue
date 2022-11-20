<template>
  <div class="containTools" id="containTools">
      <h4>Herramientas</h4>
      <ul class="list">
          <li class="listTools">
            <h5>Programación</h5>
              <div class="contTools">
                <div>
                  <img src="../../assets/images/html.jpg" alt="html">
                  <p>HTML</p>
                </div>
                <div>
                  <img src="../../assets/images/css.jpg" alt="css">
                  <p>CSS</p>
                </div>
                <div>
                  <img src="../../assets/images/js.jpg" alt="javascript">
                  <p>JS</p>
                </div>
                <div>
                  <img src="../../assets/images/jquery.jpg" alt="jquery">
                  <p>JQUERY</p>
                </div>
                <div>
                  <img src="../../assets/images/axios.png" alt="axios">
                  <p>AXIOS</p>
                </div>
                <div>
                  <img src="../../assets/images/bootstrap.png" alt="bootstrap">
                  <p>BOOTP</p>
                </div>
                <div>
                  <img src="../../assets/images/git.jpg" alt="git">
                  <p>GIT</p>
                </div>
                <div>
                  <img src="../../assets/images/vue.jpg" alt="vue">
                  <p>VUE JS</p>
                </div>
              </div>
          </li>
          <li class="listTools">
            <h5>Diseño gráfico</h5>
            <div class="contTools">
              <div>
                <img src="../../assets/images/ilustrator.jpg" alt="ilustratos">
                <p>ILUSTRATOR</p>
              </div>
              <div>
                <img src="../../assets/images/photoshop.jpg" alt="photoshop">
                <p>PHOTOSHOP</p>
              </div>
              <div>
                <img src="../../assets/images/indesing.png" alt="indesing">
                <p>INDESIGN</p>
              </div>
              <div>
                <img src="../../assets/images/premiere.png" alt="premiere">
                <p>PREMIERE</p>
              </div>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Tools'
}
</script>

<style scoped>
.contTools{
  display: flex;
}
.listTools{
  padding: 1vw;
  margin: 1.5vw auto;
}
img{
  transition: 100ms;
  width: 10vw;
  margin: 1vw;
  background-color: white;
  border-radius: 10%;
  padding: 5px;
}
img:hover{
  box-shadow: 2px 6px 65px #ff714dc7;
}
h4{
  color: white;
  padding-top: 3vw;
  font-size: 23pt;
  font-weight: bold;
  text-align: center;
  margin-top: 3vw;
}
h5{
  font-size: 20pt;
  color: white;
}
p{
  font-size: 5pt;
  width: 7vw;
  margin: 0vw auto;
  color: white;
  text-align: center;
}
.list{
  margin: 0.5vw auto;
}
@media (min-width: 1000px){
h4{
  font-size: 30pt;
  margin-bottom: 0.5vw;
}
img{
  width: 7vw;
}
p{
  font-size: 1.3vw;
  width: 7vw;
  margin: 0vw auto;
  color: white;
  text-align: center;
}
.list{
  width: 80vw;
  margin: 0 auto;
}
}
</style>