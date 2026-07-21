import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import 'katex/dist/katex.min.css'
import './style.css'

import App from './App.vue'

const QuizPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
})

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: QuizPreset,
    options: {
      darkModeSelector: '.app-dark',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue'
      }
    }
  }
})

app.directive('tooltip', Tooltip)

app.mount('#app')
