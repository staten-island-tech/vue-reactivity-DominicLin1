

import { League } from "./array.js";
;

<template>
  <main>
    <ul>
    <li v-for=" champion in League " :key="champion">{{ League.champion }}</li>
    </ul>

console: (League) => console
  </main>
</template>
