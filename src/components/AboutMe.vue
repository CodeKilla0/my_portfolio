<template>
  <div class="pb-36 bg-black">
    <div class="container mx-auto flex items-center overflow-hidden h-[700px] bg-zinc-200">
      <!-- Profile Image -->
      <div class="w-1/2 h-100" data-aos="zoom-in" data-aos-duration="2000">
        <img
          src="../../public/aziz.png"
          alt="Profile Picture"
          class="mx-auto relative top-44 w-100"
        />
      </div>

      <!-- About Me Content -->
      <div class="w-1/2 pl-16">
        <h2 class="text-6xl font-bold text-black mb-8 police" data-aos="fade-right" data-aos-duration="2000">Aziz Ismaël</h2>
        <h1 class="text-8xl font-black text-start text-zinc-700 text-opacity-20 title" data-aos="fade-left" data-aos-duration="1000">DIOMANDE</h1>
        <p class="text-xl font-semibold mb-3 w-100 pr-10">
          Développeur Full Stack junior et UX/UI designer, passionné par 
          l'innovation technologique, je suis à la recherche de nouveaux 
          défis pour approfondir et mettre en pratique mes compétences 
          en développement web et mobile.
        </p>
        <div class="mb-4 text-lg">
          <p class="mb-1">
            <span class="font-bold">Address:</span> Côte d'Ivoire, Abidjan -
            Adjamé
          </p>
          <p class="mb-1">
            <span class="font-bold">Git:</span> CodeKilla0
          </p>
          <p class="mb-1">
            <span class="font-bold">Email:</span> aziz.diomande@epitech.eu
          </p>
          <p class="mb-1">
            <span class="font-bold">Phone:</span> +2250713324397
          </p>
        </div>

        <div class="mt-8">
          <a href="../assets/images/CV_aziz_diomande.pdf" download="">
            <button
              class="relative font-black h-[45px] w-40 overflow-hidden bg-black text-white transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-black hover:before:w-2/4 hover:before:bg-emerald-400 hover:after:w-2/4 hover:after:bg-emerald-400"
              >
              <span class="relative z-10">Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
/*  */
.title {
  position: relative;
  top: -70px;
  font-family: "Poppins";
}

.police {
  font-family: "Poppins";
}
</style>
