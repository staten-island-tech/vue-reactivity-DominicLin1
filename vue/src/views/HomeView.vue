<script>
import {League} from '../../js/array';
export default {
  data(){
return {League}
}}

</script>

<template>
  <main>
    <ul>
    <li v-for=" champion in League" :key="champion">{{ champion }}</li>
    </ul>
  
  

  </main>
</template>
 