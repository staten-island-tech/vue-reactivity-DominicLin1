<script>
import League2 from "../components/LeagueTemplate.vue";
export default {
  name: "LeagueTemplate2",
  props: {
    image: String,
    champion: String,
    role: Array,
    price: Number,
  },
  computed: {
    getImage: function () {
      return League2.img;
    },
  }}
</script>
<template>
  <div class="Shop">
<div class="parent">
      <div class="display-card">
        <img class="display-img" :src="image" />
        <h2 class="display-champion" id="display-champion">{{ champion }}</h2>
        <h3 class="display-role" id="display-role">{{ role }}</h3>
        <h3 class="display-price" id="display-price">{{ price }}</h3>
  </div>
</div>
  </div>
</template>
<style>

</style>