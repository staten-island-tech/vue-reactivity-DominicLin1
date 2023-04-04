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
 

<div class="work">
  
    <LeagueTemplate
    
  v-for=" champion in  League" :key="champion" 
  :champion="champion.champion"
  :price="champion.price"
  :role=champion.role
  :image="champion.img"
  /> 

</div>



</template> 





 <style scoped>
 #app{
 background-color: black;
   width: 100vw;
   height: 100vh;
 }
 
 .img{
   width: 100%;
   height: 100%;
   justify-content: center;
 } 
 h1{
 text-align: center;
 }
 
.parent{
     
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;

}
.work{
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  background-color:white

}
button{
    width: 200px;
font-size: 16px;}

 .display-card{
  
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 25px;
  font: gold;
  padding: 20px;
  margin: 10px 20px;
  width: 25vw;
  border: white;
  border-radius: 5px;
  font-family: Caveat,cursive; 
  flex-shrink: 5;
 }

 #shop{
position: absolute; top: 80%;
}

</style>