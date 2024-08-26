import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faApple,
  faFacebookF,
  faFigma,
  faGitAlt,
  faGithub,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCode,
  faCrop,
  faDiagramProject,
  faLaptop,
  faMailBulk,
  faMobileButton,
  faObjectGroup,
  faPenRuler,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faGitAlt,
  faJs,
  faLaravel,
  faPhp,
  faVuejs,
  faReact,
  faPython,
  faFigma,
  faNodeJs,
  faAndroid,
  faApple,
  faArrowUpRightFromSquare,
  faMailBulk,
  faPhone,
  faObjectGroup,
  faCrop,
  faCode,
  faMobileButton,
  faLaptop,
  faPenRuler,
  faDiagramProject
);

const app = createApp(App);

app.use(router);
app.use(AOS);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Particles, {
    init: async engine => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  });

app.mount("#app");
