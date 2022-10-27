<template>
  <article class="articlePortFolioComp">
    <h4>Portfolio</h4>
    <div class="containCard">
        <v-card v-for="item in items" :key="item.id"
        class="mx-auto card"
        width="28%">
            <div class="titleCard">
                <v-card-title class="title">
                    {{item.title}}
                </v-card-title>
                <v-card-subtitle class="subtitle">
                    {{item.subTitle}}
                </v-card-subtitle>
            </div>
            <v-card-actions class="links">
                <img class="icon" src="../../assets/images/githubicon.png" alt="github">
                <a :href="item.link" target="_blank" class="link">Github</a>
                <a :href="item.deploy" target="_blank" class="link">Link to app</a>
            </v-card-actions>
            <v-card-text class="about">
                {{item.description}}
            </v-card-text>
        </v-card>
    </div>
  </article>
</template>

<script>
import list from '../../assets/portfolio.json'
export default {
    name: 'portFolio-comp',
    data(){
        return {
            items: list
        }
    }
}
</script>

<style scoped>
.articlePortFolioComp{
    align-items: center;
    padding: 2vw 10vw 5vw;
    gap: 2vw;
    transition: 1.2s;
    background-image: linear-gradient(135deg,rgba(253, 95, 3, 0.2),rgba(255, 94, 0, 0.2),rgba(255, 94, 0, 0.2),rgba(255, 94, 0, 0.2), rgba(255, 187, 0, 0.2));
    background-size: 100%;
}
.articlePortFolioComp:hover{
    background-color: rgba(255, 94, 0, 0.39);
}
.links{
    margin-top: 0.6vw;
}
.titleCard{
    height: 6vw;
    font-weight: 900;
    color: black;
}
.title{
    font-size: 1.5vw;
}
.subtitle{
    font-size: 1vw;
}
.link{
    font-size: 1.2vw;
}
.about{
    font-size: 1.2vw;
    font-weight: 600;
}
.card{
    height: 23vw;
    box-shadow: 0px 12px 52px rgba(0, 0, 0, 0.8);

}
.card:hover{
    box-shadow: 0px 6px 50px 5px #edff4d63 inset, 2px 6px 25px #edff4d, 0px 12px 52px rgba(187, 245, 194, 0.322);
}
.icon{
    height: 1.5vw;
}
a{
    margin: 0 0.3vw;
    font-style: none;
    padding-bottom: 0;
}
h4{
  color: white;
  padding: 1.5vw;
  font-size: 30pt;
  font-weight: bold;
  text-align: center;
}
.containCard{
    display: flex;
}
</style>