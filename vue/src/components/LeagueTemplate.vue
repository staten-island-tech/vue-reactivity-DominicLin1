
<template>
  <main>
    <div class="display-card">
            <img class="display-img" src= {{ image }}/>
            <h2 class="display-champion" id= "display-champion">{{ champion }}</h2>
            <h3 class="display-role" id="display-role"> {{ role }}</h3>
            <h3 class="display-price" id="display-price"> {{ price }}</h3>
            </div>
  </main>
</template>

<script>
export default {
  name: "LeagueTemplate",
  props: {
    image: String,
    champion: String,
    role: Array,
    price: Number,
  },
}

</script>

 