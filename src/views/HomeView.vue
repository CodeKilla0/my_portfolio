<template>
  <NavbarComponent />
  <HeroPage />
  <MyProjects />
  <AboutMe />
  <MySkills />
  <ServiceSec />
  <IringMe />
  <ContactMe />
  <FooterPage />
</template>


<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroPage from '@/components/HeroPage.vue';
import MySkills from '@/components/MySkills.vue';
import MyProjects from '@/components/MyProjects.vue'
import FooterPage from '@/components/FooterPage.vue';
import AboutMe from '@/components/AboutMe.vue';
import ServiceSec from '@/components/ServiceSec.vue';
import IringMe from '@/components/IringMe.vue';
import ContactMe from '@/components/ContactMe.vue';

export default {
  components: {
    NavbarComponent,
    AboutMe,
    HeroPage,
    MySkills,
    MyProjects,
    FooterPage,
    ServiceSec,
    IringMe,
    ContactMe,
  }
}

</script>


<style scoped>
</style>
