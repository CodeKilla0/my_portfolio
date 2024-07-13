<template>
  <div class="contact bg-black mt-20">
    <div class="max-w-screen-xl mx-auto lg:py-20 md:py-15 sm:py-10 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="content ml-3">
          <div class="overflow-auto relative mb-8">
            <img src="../assets/images/logo_noir-04-essai-01.png" alt="Logo aziz" srcset="">
          </div>
          <div class="ml-6">
            <div class="">
              <p class="text-white lg:text-4xl sm:text-2xl font-normal text-2xl sm:leading-none md:text-3xl">Ensembles créons l’univers <span class="lg:text-5xl mt-3 text-3xl font-extrabold text-white">Technologique</span> qui vous Corresponds.</p>
            </div>
          </div>
        </div>
        <div class="form px-5 lg:px-0 md:px-3">
          <div class="text-white">
            <p class="font-bold text-4xl text-white mb-2">Ismael Aziz Diomande</p>
            <p class="text-2xl mb-4">
              <font-awesome-icon icon="fa-solid fa-mail-bulk" />
              ismaeldiom70@gmail.com
            </p>
            <p class="text-2xl">
              <font-awesome-icon icon="fa-solid fa-phone" />
              +225 07 13 32 43 97
            </p>
            <p class="text-2xl">
              <font-awesome-icon icon="fa-solid fa-phone" />
              +225 07 77 09 94 50
            </p>
            <div class="mt-10">
              <a class="download py-6 font-bold text-xl" href="../assets/images/CV_aziz_diomande.pdf" download="Aziz_Ismael_Diomande.pdf">
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "ContactMe",
  components: {FontAwesomeIcon},
  data(){

  },

  methods: {

  }

};
</script>

<style>
.download {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms ease;
  border: 1px solid #ffffff;
}

.download:hover {
  box-shadow: 0 0 50px #ffffff;
}
</style>