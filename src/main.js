import { createApp } from 'vue'
import App from './App.vue'
// import LeleUi from '../dist/lele-ui.es.js'
// import '../dist/style.css'
import LeleUi from 'lib/main.js'

createApp(App)
  .use(LeleUi)
  .mount('#app')
