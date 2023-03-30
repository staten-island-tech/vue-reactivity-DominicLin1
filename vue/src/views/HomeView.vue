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
<!-- 
<template>
 <LeagueTemplate> -->
  <u1>
 <l1 v-for=" champion in League" :key="champion" {{ champion }} </l1>
</u1>
<!--   :image="champion.img" -->
<!--  :champion="champion.champion"
 :role="champion.role"
 :price="champion.price"
</LeagueTemplate>
</template> -->
