<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import data from './views/HomeView.vue'
</script>

<template>
  <header>
   <RouterView></RouterView>
    <nav>
        <RouterLink to="/">Market</RouterLink>
        <RouterLink to="/about">Shop</RouterLink>
      </nav>
  </header>

</template>

<style scoped>
</style>
