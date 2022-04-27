<template>
  <div class="articleComp">
      <ul class="list">
          <li class="listTools">
            <h4>Programming</h4>
            <img src="../../assets/images/html.png" alt="html">
            <img src="../../assets/images/cssimage.png" alt="css">
            <img src="../../assets/images/javascript.png" alt="javascript">
            <img src="../../assets/images/bootstrap.png" alt="bootstrap">
            <img src="../../assets/images/jquery.png" alt="jquery">
            <img src="../../assets/images/git.png" alt="git">
            <img src="../../assets/images/vuejs.png" alt="vue">
          </li>
          <li class="listTools">
            <h4>Graphic Design</h4>
            <img src="../../assets/images/ilustratos.png" alt="ilustratos">
            <img src="../../assets/images/photoshop.png" alt="photoshop">
            <img src="../../assets/images/indesing.png" alt="indesing">
            <img src="../../assets/images/premiere.png" alt="premiere">
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
.listTools{
  background-color: white;
  padding: 2vw;
  margin: 1.5vw auto;
  border-radius: 1vw;
}
img{
  max-height: 70px;
  margin: 0.4vw;
}
h4{
  font-size: 2vw;
  margin-bottom: 0.5vw;
}
.list{
  margin: 0 auto;
}
</style>