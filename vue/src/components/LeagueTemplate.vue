
<template>
  <main>
    <div class="parent">
    <div class="display-card">
             <img class="display-img" :src="image"/> 
            <h2 class="display-champion" id= "display-champion">{{ champion}}</h2>
            <h3 class="display-role" id="display-role"> {{ role }}</h3>
            <h3 class="display-price" id="display-price"> {{ price }}</h3>
            <Button @test-click="Add">Add to Cart</Button>
            </div>
            </div>
  </main>
</template>

<script>
import Button from "../components/Button.vue"
import { League } from '../../js/array';
export default {
  name: "LeagueTemplate",
  props: {
     image: String, 
    champion: String,
    role: Array,
    price: Number, 
  },
  computed:{
    getImage:function(){
      return League.img;
    }
  },
  methods:{
   Add:function (){
    console.log("Add");

  }
}
}

</script>

 <style scoped>
 #app{
 background-color: black;
   width: 100vw;
   height: 100vh;
 }
 button{
    width: 200px;
font-size: 16px;
 text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  margin: 1rem;
  font-size:16;
  border-radius: 10rem;
  transition: all 0.2s;
  position: relative;
  animation: moveInBottom 0.5s ease-out 0.75s;
  background-color: aqua;
  animation-fill-mode: backwards;
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
  background-color: black;

}

 .display-card{
  
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 25px;
  padding: 20px;
  margin: 10px 20px;
  width: 25vw;
  border: black solid 10px;
  border-radius: 5px;
  font-family: Caveat,cursive; 
  flex-shrink: 5;
 }

 </style>