import { createApp } from 'vue';
import '../src/assets/styles/general.scss';
import App from './App.vue';


//fontawesom
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleEmpty } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faUserSecret, faFacebookF, faTwitter, faInstagram, faYoutube, faCartShopping, faChevronDown, faMagnifyingGlass, faChevronLeft, faChevronRight, faCircle, faCircleEmpty, faEnvelope, faStar);

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
