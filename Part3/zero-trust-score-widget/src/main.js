// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: '#1976D2', // Blue
          secondary: '#424242', // Dark gray
          success: '#4CAF50', // Green
          warning: '#FFC107', // Yellow
          error: '#FF5252', // Red
          info: '#2196F3', // Light blue
          blue: '#1976D2',
          green: '#4CAF50',
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount('#app');


