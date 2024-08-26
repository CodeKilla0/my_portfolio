import MySkills from '@/components/MySkills.vue';
<template>
  <header class="nav">
    <nav
      class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 cursor-auto"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5"
      >
        <router-link
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../assets/images/logo/logo-03.png"
            class="h-12 rotating-logo"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-lg font-extrabold whitespace-nowrap text-gray-900"
            >Aziz Diomande</span
          >
        </router-link>
        <div
          class="flex md:order-2 lg:space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <a href="../assets/images/CV_aziz_diomande.pdf" download="">
            <button
              class="font-black h-[45px] w-40 overflow-hidden bg-black text-white transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-black hover:before:w-2/4 hover:before:bg-[#0FEFB4] hover:after:w-2/4 hover:after:bg-[#0FEFB4]"
            >
              <span class="relative z-10">Download CV</span>
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:first-letter:bg-emerald-200 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#resumes"
                class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:first-letter:bg-emerald-200 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Resumes</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:first-letter:bg-emerald-200 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:first-letter:bg-emerald-200 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <router-link
                to="/snake-game"
                class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:first-letter:bg-emerald-200 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Snake Game
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header">
        <div class="progress-container">
          <div class="progress-bar" id="progressBar"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};
</script>

<style>
.nav {
  clear: both;
}

.progress-container {
  background-color: rgba(150, 150, 150, 0.6);
  height: 3px;
  width: 100%;
}

.progress-bar {
  background: #050504;
  height: 3px;
  width: 0%;
}

.rotating-logo {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
