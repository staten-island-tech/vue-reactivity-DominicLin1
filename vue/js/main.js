 import { createApp } from 'vue'
import App from '../src/App.vue'
import router from '.'
import {LeagueTemplate} from '.../components/LeagueTemplate.vue'

import { League } from './array'

const app = createApp(App) 

console.log(League)


 
app.use(router)

app.mount('#app') 
