<template>
  <article class="article">
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
      <h1 class="textInit">Contact me =</h1>
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
.divSection{
  font-size: 1.2vw;
  color: red;
  transition: 500ms;
}
div p {
  margin-left: 3vw;
  color: yellow;
}
.sectionArticle{
  display: flex;
  gap: 0.6vw;
}
.article{
    background-color: black;
    color: white;
    height: 35vw;
    gap: 2vw;
    padding: 3vw 10vw;
    transition: 600ms;
}

.textInit{
  color: white;
  font-weight: 800;
  font-size: 1.2vw;
}
.subText{
  color: white;
  font-weight: 400;
  font-size: 1.5vw;
}
</style>