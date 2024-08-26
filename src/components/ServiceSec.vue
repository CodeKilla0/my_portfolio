<template>
  <div class=" bg-black pb-36" id="services">
    <div class="container mx-auto py-16 max-w-screen-xl">
      <!-- Services Title -->
      <h2 class="text-5xl font-bold text-white mb-8 text-center police">
        Services
      </h2>
      <h1
        class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center text-slate-300 text-opacity-20 title"
      >
        Services
      </h1>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service Item -->
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-crop" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">WEB DESIGN</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-mobile-button" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">APP DEVELOPING</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-laptop" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">WEB DEVELOPPER</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-pen-ruler" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">UI/UX CONSULTING</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-diagram-project" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">DIGITAL PROJECT</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
        <div
          class="bg-gray-100 bg-opacity-5 hover:bg-emerald-400 transition-all duration-300 ease-in-out flex flex-col justify-center text-center rounded-lg h-[250px] servieHover"
          data-aos="fade-up" data-aos-duration="2000"
        >
          <div class="mb-4 text-emerald-400 text-5xl">
            <!-- Replace with your icon -->
            <font-awesome-icon icon="fa-solid fa-crop" />
          </div>
          <h3 class="text-xl text-white font-bold mb-2">WEB DESIGN</h3>
          <hr class="border-emerald-500 w-12 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSec",
};
</script>

<style>

.servieHover:hover h3 {
  color: black;
  transition: all;
  animation-duration: 3000ms;
  animation-timing-function: ease-in-out;
}

.servieHover:hover hr {
  border-color: black;
}

.servieHover:hover div {
  color: black;
  transition: all;
  animation-duration: 3000ms;
  animation-timing-function: ease-in-out;
}
.title {
  position: relative;
  top: -80px;
  font-family: "Poppins";
}

.police {
  font-family: "Poppins";
}
</style>
