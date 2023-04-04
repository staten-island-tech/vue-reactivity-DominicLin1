<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import data from './views/HomeView.vue'
import LeagueTempale2 from './views/Shop.vue'
</script>

<template>
  <header>
   <RouterView></RouterView>
    <nav>
       <div class="Market" ><RouterLink to="/">Market</RouterLink> </div>
        <div class= "S"><RouterLink to="/about">Shop</RouterLink> </div>
      </nav>
      
  </header>

</template>

<style scoped>
.Market{
  position: fixed;
    bottom: 90%;
    right: 90%;
    font-size: 32px;
}
.S{
  position: fixed;
  bottom: 90%;
  left: 90%;
  font-size: 32px;
}
</style>
