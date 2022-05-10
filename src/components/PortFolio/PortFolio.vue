<template>
  <article class="articleComp">
    <v-card v-for="item in items" :key="item.id"
    class="mx-auto"
    width="28%">
    <v-img
      :src="item.img"
      height="250px"></v-img>
    <v-card-title>
      {{item.title}}
    </v-card-title>

    <v-card-subtitle>
      {{item.subTitle}}
    </v-card-subtitle>
    <v-card-actions>
        <a :href="item.link" target="blank">Link to deploy</a>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{item.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
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
a{
    font-style: none;
}
</style>