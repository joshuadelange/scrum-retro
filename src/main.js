import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import FontAwesomeIcon from "./utilities/icons";

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(store);
app.mount('#app')
