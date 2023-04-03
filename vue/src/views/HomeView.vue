<script>
import {League} from '../../js/array';
import Button from '../components/Button.vue'
import LeagueTemplate from "../components/LeagueTemplate.vue";
export default {
  data(){
return {League}
},
 components: {
  LeagueTemplate,
  Button
}} 


</script>
 
<template>
 

<div class="work">
    <LeagueTemplate
    
  v-for=" champion in  League" :key="champion" 
  :champion="champion.champion"
  :price="champion.price"
  :role=champion.role
  :image="champion.img"/> 
  <Button @test-click="Add">Add to Cart</Button>
</div>



</template> 





 <style scoped>
 .background{
 
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

}
button{
    width: 200px;
font-size: 16px;}

</style>