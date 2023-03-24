<script>
import {filtered} from '../../js/filter';
export default {
  data(){
return {filtered}
}}

</script>

<template>
  <main>
    <ul>
    <li v-for=" champion in filtered" :key="champion">{{ champion }}</li>
    </ul>
  
  

  </main>
</template>
 