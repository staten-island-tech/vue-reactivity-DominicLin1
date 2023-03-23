 import { createApp } from 'vue'
/* import App from '../src/App.vue' */
import router from '.'

import { League } from './array'

const app = createApp(App) 

console.log(League)

 
app.use(router)

app.mount('#app') 
