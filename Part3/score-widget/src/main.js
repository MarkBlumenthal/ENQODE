import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// No custom theme, relying on Vuetify's default theme
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount('#app');




