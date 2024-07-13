<template>
  <div class="heroPage">
    <!-- Component Code -->
    <div
      class="grid grid-flow-col grid-rows-2 z-20 sm:grid-rows-1 sm:grid-cols-2 max-w-screen-xl items-center overflow-auto mx-auto pt-10"
    >
      <div class="flex items-center justify-center lg:order-first order-1">
        <main class="max-w-screen-xl px-5 pt-14">
          <div class="text-left">
            <h2 class="lg:text-4xl sm:text-2xl font-normal text-gray-900 text-2xl sm:leading-none md:text-3xl">
              Bonjour ! c’est
              <span class="font-extrabold" >Aziz Diomande</span>
              <br />
            </h2>
            <h1 class="lg:text-5xl text-gray-900 mt-3 text-3xl font-extrabold bg-blue-200 w-100 py-1">Full Stack Developper</h1>
            <h2
              class="lg:text-4xl mt-3 text-2xl font-normal text-gray-900 sm:text-5xl sm:leading-none md:text-3xl"
            >
              Basée à
              <span class="font-extrabold">Abidjan</span>
            </h2>
            <p
              class="mt-8 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0"
            >
              Imaginez un monde où chaque clic, chaque scroll, raconte une histoire. En tant que
              développeur full stack, je ne crée pas seulement des lignes de code, je construis des
              expériences numériques captivantes et immersives. Prêt à transformer vos idées en
              réalité interactives ?
            </p>
            <div class=" mt-14">
              <div class="mt-10 sm:mt-8 sm:flex justify-start">
                <div class="mb-2">
                  <a
                    href="#"
                    class="hoverStyle w-full flex items-center justify-center px-4 py-5 border-2 border-gray-900 text-base font-medium rounded-md text-gray-900 md:dark:text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
                  >
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  </a>
                </div>
                <div class="lg:mx-4 mb-2">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-5 border-2 border-gray-900 text-base font-medium rounded-md text-gray-900 md:dark:text-white bg-transparent focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
                  >
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  </a>
                </div>
                <div class="">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-5 border-2 border-gray-900 bg-gray-900 text-base font-medium rounded-md text-white md:dark:text-white focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
                  >
                    <font-awesome-icon icon="fa-brands fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="items-center overflow-auto relative bottom-7">
        <img src="../assets/images/logo_noir.png" alt="logo" width="100%" />
      </div>
    </div>
  </div>
  <div class="marquee">
    <div class="marquee-content">
      <span class="item-collection-1">
        <ul class="marqee-list flex">
          <li class="py-3 px-5 font-bold text-amber-500">
            I'm geek
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-blue-500">
            I'm impressive
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-cyan-500">
            I'm a leader
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-emerald-500">
            I'm strong
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-fuchsia-500">
            I'm a freelancer
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-green-500">
            I'm cool
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-indigo-500">
            I'm a coder
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-pink-500">
            I'm web designer
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-purple-500">
            I'm UI/UX designer
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-lime-500">
            I improve myself
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-yellow-500">
            I'm the top
          </li>
          <li class="py-3">•</li>
          <li class="py-3 px-5 font-bold text-orange-500">
            I'm Full Stack developper
          </li>
        </ul>
      </span>
    </div>

  </div>
</template>

<style>

.flex {
  display: flex;
}

.marquee {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-flex;
  animation: marquee 30s linear infinite;
}

.item-collection-1 {
  position: relative;
  left: 0%;
  animation: swap 30s linear infinite;
}

@keyframes swap {
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
}

.marquee-content:hover {
  animation-play-state: paused;
}

/* Transition */

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

<script setup lang="ts">
</script>