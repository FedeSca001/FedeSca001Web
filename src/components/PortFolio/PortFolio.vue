<template>
  <article class="articleComp">
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
            <a :href="item.link" target="_blank">
                Github
                </a>
            <a :href="item.deploy" target="_blank">Link to deploy</a>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text class="about">
            {{item.description}}
        </v-card-text>
    </v-card>
  </article>
</template>

<script>
import list from '../../assets/portfolio.json'
export default {
    name: 'portFolio-comp',
    data(){
        return {
            show: true,
            items: list
        }
    }
}
</script>

<style scoped>
.links{
    margin-top: 0.6vw;
}
.titleCard{
    height: 6vw;
}
.title{
    font-size: 1.5vw;
}
.subtitle{
    font-size: 1vw;
}
.about{
    font-size: 0.8vw;
}
.card{
    height: 20vw;
}
.icon{
    height: 1.5vw;
}
a{
    margin: 0 0.3vw;
    font-style: none;
    padding-bottom: 0;
}
</style>