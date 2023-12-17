import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import svg-core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";

/* + icons to the library */
library.add(fas)
library.add(far)

/* import the flag icons */
import LangFlag from 'vue-lang-code-flags'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('lang-flag', LangFlag)
    .mount('#app')

