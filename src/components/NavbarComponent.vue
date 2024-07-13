<template>
  <header class="nav">
    <nav
        class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 cursor-auto"
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/images/logo_noir-04.png" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-lg font-extrabold whitespace-nowrap text-gray-900"
          >Aziz Diomande</span
          >
        </router-link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
              type="button"
              class="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center "
          >
            Contact me
          </button>
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
                  class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Skills</a
              >
            </li>
            <li>
              <a
                  href="#projects"
                  class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >My projects</a
              >
            </li>
            <li>
              <router-link
                  to="/blog"
                  class="block py-2 px-3 font-medium text-gray-900 rounded hover:first-letter:font-black hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
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
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

</script>

<style>

.nav{
  clear: both;
}

.progress-container {
  background-color: rgba(150, 150, 150, 0.6);
  height: 3px;
  width: 100%;
}

.progress-bar {
  background: rgb(255,0,0);
  background: linear-gradient(87deg, rgba(255,0,0,1) 0%, rgba(252,97,0,1) 10%, rgba(252,139,0,1) 18%, rgba(254,234,0,1) 28%, rgba(108,255,0,1) 38%, rgba(0,255,34,1) 47%, rgba(0,255,235,1) 58%, rgba(0,168,255,1) 69%, rgba(63,62,229,1) 79%, rgba(199,0,255,1) 91%, rgba(253,45,189,1) 100%);
  height: 3px;
  width: 0%;
}


</style>
