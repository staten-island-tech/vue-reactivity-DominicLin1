<script>
import LeagueTemplate from '../components/LeagueTemplate.vue';

import League2 from "../components/LeagueTemplate.vue";

export default {
  components: { LeagueTemplate },
  name: "LeagueTemplate2",
  props: {
    image: String,
    champion: String,
    role: Array,
    price: Number,
  },
  computed: {
    getImage: function () {
      return League2.img;
    },
  }}
</script>
<template>
  <div class="Shop">

<LeagueTemplate v-for=" champion in  League2" :key="champion" 
  :champion="champion.champion"
  :price="champion.price"
  :role=champion.role
  :image="champion.img"
  /> 
  </div>
</template>
<style>
#app {
  background-color: white;
  width: 100vw;
  height: 100vh;
}


.img {
  width: 100%;
  height: 100%;
  justify-content: center;
}
h1 {
  text-align: center;
}

.parent {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
.work {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background-color:white;
}

.display-card {
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 25px;
  padding: 20px;
  margin: 10px 20px;
  width: 25vw;
  border: black solid 10px;
  border-radius: 5px;
  font-family: Caveat, cursive;
  flex-shrink: 5;
}
</style>