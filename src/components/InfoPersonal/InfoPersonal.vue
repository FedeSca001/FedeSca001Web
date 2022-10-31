<template>
  <article class="infoPersonal" id="infoPersonal">
    <div class="sectionArticle">
        <h1 class="textInit">Personal information =</h1>
        <div class="divSection">
          {
            <p>name: 'Federico Scarpecci',</p>
            <p>age: 30,</p>
            <p>nationality: Argentinan,</p>
            <p>now-living: Argentinan,</p>
            <p>language: 'Spanish',</p>
            <p>studies: ['HTML','Css','Javascript','Vue Js','Vuex']</p>
          }
        </div>
      </div>
    <div class="sectionArticle">
      <h1 class="textInit">Contacto =</h1>
      <div class="divSection">
        {
          <p>e-mail: 'familadore@gmail.com',</p>
          <p>phone: '+393511911615',</p>
          <p>address: 'Vía Rubino Nicodemi 42 - Fisciano - Salerno - Italia.'</p>
          <p>instagram: 'instagram.com/fedesca001/',</p>
          <p>linkedin: 'linkedin.com/in/federico-scarpecci-developer/',</p>
        }
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'InfoPersonal'
}
</script>

<style scoped>
.infoPersonal{
  padding: 2vw;
  justify-content: center;
}
.articleComp{
  display: block;
}
.divSection{
  width: 50vw;
  font-size: 10pt;
  color: rgb(255, 0, 0);
  transition: 500ms;
}
div p {
  margin-left: 3vw;
  color: yellow;
}
.sectionArticle{
  display: flex;
  margin: 5vw 0vw;
}
.textInit{
  width: 40vw;
  text-align: end;
  padding: 0vw 1vw;
  color: white;
  font-weight: 800;
  font-size: 11pt;
}
.subText{
  color: white;
  font-weight: 400;
}
@media (min-width: 1000px){
.divSection{
  font-size: 16pt;
  width: 60vw;
}
.textInit{
  font-size: 18pt;
  width: 30vw;
}
}
</style>