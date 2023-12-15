import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import svg-core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* + icons to the library */
library.add(fas)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

