import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './vuetify.config.js'


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
