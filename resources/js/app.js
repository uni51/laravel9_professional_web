import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// import './vue/welcome';

import { createApp } from 'vue'

import App from './vue/welcome.vue'
createApp(App).mount('#welcome-vue')
