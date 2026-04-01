<template>
  <header class="nav">
    <nav
      class="fixed start-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-white/72 shadow-nav backdrop-blur-xl ring-1 ring-white/50 dark:border-white/[0.07] dark:bg-zinc-950/72 dark:shadow-nav-dark dark:ring-white/[0.05]"
    >
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-2 py-4"
      >
        <a
          href="/#"
          class="flex items-center space-x-3 rtl:space-x-reverse"
          @click="menuOpen = false"
        >
          <img
            src="../assets/images/logo/logo-03.png"
            class="h-10 w-10 rounded-full object-cover ring-2 ring-[#0FEFB4]/30 transition hover:ring-[#0FEFB4]/60 md:h-11 md:w-11"
            alt="Logo Aziz Diomande"
          />
          <span
            class="font-display self-center text-base font-bold tracking-tight text-zinc-900 dark:text-white md:text-lg"
            >Aziz Diomande</span
          >
        </a>
        <div
          class="flex items-center md:order-2 md:space-x-3 rtl:space-x-reverse"
        >
          <a
            href="/CV_aziz_diomande.pdf"
            download="CV_Aziz_Diomande.pdf"
            class="relative hidden md:block"
            title="Fichier public/CV_aziz_diomande.pdf"
          >
            <button
              type="button"
              class="relative isolate h-10 overflow-hidden rounded-full border border-[#0FEFB4]/45 bg-gradient-to-br from-[#0FEFB4]/15 to-white/40 px-5 text-xs font-bold uppercase tracking-wide text-emerald-800 shadow-soft transition hover:border-[#0FEFB4] hover:from-[#0FEFB4] hover:to-[#34ffc9] hover:text-neutral-950 hover:shadow-glow-mint-sm dark:from-[#0FEFB4]/20 dark:to-transparent dark:text-[#0FEFB4] dark:hover:text-neutral-950"
            >
              <span class="relative z-10">CV</span>
            </button>
          </a>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-white md:hidden"
            aria-controls="navbar-main"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              v-if="!menuOpen"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          id="navbar-main"
          class="w-full items-center justify-between md:order-1 md:flex md:w-auto"
          :class="menuOpen ? 'flex' : 'hidden md:flex'"
        >
          <ul
            class="mt-4 flex w-full flex-col gap-1 rounded-2xl border border-zinc-200/90 bg-white/90 p-3 font-medium shadow-soft md:mt-0 md:flex-row md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:border-white/10 dark:bg-zinc-900/95 dark:shadow-glow-mint-sm md:dark:bg-transparent md:dark:shadow-none"
          >
            <li>
              <a
                href="#projects"
                class="block rounded-xl bg-gradient-to-br from-[#0FEFB4]/20 to-[#0FEFB4]/10 px-4 py-2.5 text-sm font-semibold text-emerald-800 shadow-soft dark:from-[#0FEFB4]/25 dark:to-[#0FEFB4]/10 dark:text-[#0FEFB4] md:bg-gradient-to-br md:from-[#5efecd] md:via-[#0FEFB4] md:to-[#0bc49a] md:text-neutral-950 md:shadow-glow-mint-sm"
                @click="menuOpen = false"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#resumes"
                class="block rounded-lg px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 md:py-2 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                @click="menuOpen = false"
                >Parcours</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="block rounded-lg px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 md:py-2 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                @click="menuOpen = false"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block rounded-lg px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 md:py-2 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                @click="menuOpen = false"
              >
                Contact
              </a>
            </li>
            <li>
              <router-link
                to="/snake-game"
                class="block rounded-lg px-4 py-2.5 text-sm text-amber-300/90 transition hover:bg-amber-400/10 hover:text-amber-200 md:py-2"
                @click="menuOpen = false"
              >
                Snake Game
              </router-link>
            </li>
            <li class="md:hidden">
              <a
                href="/CV_aziz_diomande.pdf"
                download="CV_Aziz_Diomande.pdf"
                class="block rounded-lg border border-zinc-200 px-4 py-2.5 text-center text-sm text-[#0FEFB4] dark:border-white/10"
                @click="menuOpen = false"
              >
                Télécharger CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header">
        <div class="progress-container">
          <div id="progressBar" class="progress-bar"></div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);

function progressBarScroll() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  bar.style.width = scrolled + "%";
}

onMounted(() => {
  window.addEventListener("scroll", progressBarScroll, { passive: true });
  progressBarScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", progressBarScroll);
});
</script>

<style scoped>
.progress-container {
  background-color: rgba(0, 0, 0, 0.08);
  height: 2px;
  width: 100%;
}

@media (prefers-color-scheme: dark) {
  .progress-container {
    background-color: rgba(255, 255, 255, 0.06);
  }
}

.progress-bar {
  background: linear-gradient(90deg, #0fefb4, #2dffc4);
  height: 2px;
  width: 0%;
  transition: width 0.1s ease-out;
}

.nav {
  clear: both;
}
</style>
