import { createApp } from 'vue'
import App from './App.vue'
// import LeleUi from '../dist/lele-ui.es.js'
import LeleUi from '../lib/main.js'
import '../dist/style.css'

createApp(App)
  .use(LeleUi)
  .mount('#app')
