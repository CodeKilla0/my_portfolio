<template>
  <NavbarComponent />
  <HeroPage />
  <MySkills />
  <MyExperience />
  <MyProjects />
  <BlogSection />
  <ContactMe />
  <FooterPage />
</template>


<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import HeroPage from '@/components/HeroPage.vue';
import MySkills from '@/components/MySkills.vue';
import MyExperience from '@/components/MyExperience.vue';
import MyProjects from '@/components/MyProjects.vue'
import ContactMe from '@/components/ContactMe.vue';
import FooterPage from '@/components/FooterPage.vue';
import BlogSection from "@/components/BlogSection.vue";

export default {
  components: {
    BlogSection,
    NavbarComponent,
    HeroPage,
    MySkills,
    MyExperience,
    MyProjects,
    ContactMe,
    FooterPage,
  }
}

</script>


<style scoped>


</style>
