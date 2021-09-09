import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$filters = {
    currencyUSD(value) {
      return '$' + value
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

app.mount('#app')
