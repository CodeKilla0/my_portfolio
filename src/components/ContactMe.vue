<template>
    <div class="contact">
        <div class="max-w-screen-xl mx-auto mb-20 mt-40">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div class="form px-5 lg:px-0 md:px-3">
                    <form action="" @submit="">
                        <div class="relative mb-9">
                            <input type="text" name="name" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Full Name</label>
                        </div>
                        <div class="relative mb-9">
                            <input type="text"  name="email" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                        </div>
                        <div class="relative mb-9">
                            <input type="text" name="" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Subject</label>
                        </div>
                        <div class="relative mb-9">
                          <textarea name="message" id="floating_outlined" cols="30" rows="10" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "></textarea>
                          <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message</label>
                        </div>
                        <div class="relative">
                          <button class="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center "
                           >Get in touch</button>
                        </div>
                    </form>
                </div>
                <div class="content ml-3">
                  <div class="overflow-auto relative mb-8">
                    <img src="../assets/images/logo_noir-04-essai-01.png" alt="Logo aziz" srcset="">
                  </div>
                  <div class="ml-6">
                    <div>
                      <p class="lg:text-4xl sm:text-2xl font-normal text-gray-900 text-2xl sm:leading-none md:text-3xl">Ensembles créons l’univers <span class="lg:text-5xl mt-3 text-3xl font-extrabold text-gray-900">Technologique</span> qui vous Corresponds.</p>
                    </div>
                    <div class="mt-4">
                      <p class="font-bold text-3xl text-black mb-2">Ismael Aziz Diomande</p>
                      <p class="text-xl mb-2">ismaeldiom70@gmail.com</p>
                      <p>+225 07 13 32 43 97</p>
                      <p>+225 07 77 09 94 50</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "ContactMe",
  data(){

  },

  methods: {

  }

};
</script>

<style>
</style>