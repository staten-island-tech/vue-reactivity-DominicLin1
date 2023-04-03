<template>
    <button @click="$emit('test-click')"><slot></slot></button>
</template>

<script>
    export default {
        name:"Button",
    }
    
</script>
<style scoped>
button{
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
  animation-fill-mode: backwards;}

</style>



