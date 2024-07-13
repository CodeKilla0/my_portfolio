import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAndroid, faApple, faFacebookF, faFigma, faGitAlt, faGithub, faJs, faLaravel, faNodeJs, faPhp, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faArrowUpRightFromSquare, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons'

library.add( faFacebookF, faLinkedinIn, faGithub, faGitAlt, faJs, faLaravel, faPhp, faVuejs, faReact, faPython, faFigma, faNodeJs, faAndroid, faApple, faArrowUpRightFromSquare, faMailBulk, faPhone )

const app = createApp(App)

app.use(router)
app.use(AOS)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
