import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js'

const app = createApp(App)

app
  .use(ChartPlugin)
  .mount('#app')
              
