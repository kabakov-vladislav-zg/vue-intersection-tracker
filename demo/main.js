import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import intersectionTracker from '@'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(store)
  .use(router)
  .use(intersectionTracker)
  .mount('#app')
