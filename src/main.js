import { createApp } from 'vue';
import '../src/assets/styles/general.scss';
import App from './App.vue';


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

createApp(App).mount('#app');
