import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

// axios
import 'axios'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(axios)

app.mount('#app')
