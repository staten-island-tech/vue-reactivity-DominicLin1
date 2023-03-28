<script>
import {League} from '../../js/array';
import LeagueTemplate from "../components/LeagueTemplate.vue";
export default {
  data(){
return {League}
},
components: {
  LeagueTemplate,
}}
</script>

<template>
 <LeagueTemplate
 v-for=" champion in League" :key="champion" {{ champion }}
 :image="champion.img"
 :champion="champion.champion"
 :role="champion.role"
 :price="champion.price" />
</template>
 