<template>
  <div class="heroPage heroBack">
    <!-- Component Code -->
    <div
      class="grid grid-flow-col grid-rows-2 z-20 sm:grid-rows-1 sm:grid-cols-2 max-w-screen-xl items-center overflow-auto mx-auto pt-10"
    >
      <div
        class="element flex items-center lg:justify-start sm:justify-center justify-center lg:order-first lg:h-[700px]"
      >
        <main class="pt-14">
          <div class="text-left md:ml-16 sm:ml-4 ml-4 lg:ml-0" data-aos="zoom-in" data-aos-duration="1000" >
            <h2
              class="lg:text-4xl  sm:text-2xl font-normal text-gray-900 text-2xl sm:leading-none md:text-3xl"
            >
              Hello ! I'm
              <span class="font-extrabold">Aziz Diomande</span>
              <br />
            </h2>
            <h1
              class="lg:text-5xl text-gray-900 mt-3 text-3xl font-extrabold bg-emerald-200 w-100 py-1"
            >
              Full Stack Developper
            </h1>
            <h2
              class="lg:text-4xl mt-3 text-2xl font-normal text-gray-900 sm:text-5xl sm:leading-none md:text-3xl"
            >
              Based in
              <span class="font-extrabold">Abidjan</span>
            </h2>
            <!-- <p
              class="mt-8 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0"
            >
              Imaginez un monde où chaque clic, chaque scroll, raconte une histoire. En tant que
              développeur full stack, je ne crée pas seulement des lignes de code, je construis des
              expériences numériques captivantes et immersives. Prêt à transformer vos idées en
              réalité interactives ?
            </p> -->
            <div class="mt-14">
              <div class="mt-10 sm:mt-8 sm:flex justify-start">
                <div class="mb-2">
                  <a
                    href="#"
                    class="w-full hover:shadow-emerald-400 hover:shadow-2xl flex items-center justify-center px-4 py-5 border-2 border-gray-900 text-base font-medium rounded-md text-gray-900 md:dark:text-white transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
                  >
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  </a>
                </div>
                <div class="lg:mx-4 mb-2">
                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    class="w-full flex hover:shadow-emerald-400 hover:shadow-2xl items-center justify-center px-4 py-5 border-2 border-gray-900 text-base font-medium rounded-md text-gray-900 md:dark:text-white bg-transparent focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
                  >
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  </a>
                </div>
                <div class="">
                  <a
                    href="https://github.com/CodeKilla0"
                    target="_blank"
                    class="w-full flex hover:shadow-emerald-400 hover:shadow-2xl items-center justify-center px-4 py-5 border-2 border-black bg-black text-base font-medium rounded-md text-white md:dark:text-white focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5"
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
        <div class="image_phone">
          <img src="../assets/images/TechLife-VirtualReality.png" alt="Responsive image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flex {
  display: flex;
}

.heroBack {
  background-image: url("../../public/heroBack.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;

  animation-range: cover 0% cover 100%;
  animation: the-animation linear;
  animation-timeline: view();
  animation-iteration-count: 1;
  margin-top: 70px;
}

@keyframes the-animation {
  to {
    background-size: 1200px;
  }
  from {
    background-size: 100%;
  }
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

/* media query desktop screen */

@media (min-width: 1024px) {
 .image_phone{
  display: none;
 }
}

@media (max-width: 1023px ) {
 .heroBack{
  background-image: none;
  }
  .image_phone{
    display: block;
  }
  .cote{
    padding-left: 15px
  }
  .element{
    min-height: 400px;
  }
}

/* media query mobile screen */

@media (max-width: 640px) {
 .heroBack {
  background-image: none;
  }
  .image_phone{
    display: block;
  }
}
</style>
