<template>
  <section
    class="hero-root relative overflow-hidden bg-transparent text-zinc-900 dark:text-white"
    aria-label="Présentation"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-80 dark:bg-mesh-dark dark:opacity-100"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 animate-float-slow rounded-full bg-[#0FEFB4]/[0.15] blur-[90px] dark:bg-[#0FEFB4]/[0.12]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-400/[0.08] blur-[100px] dark:bg-[#0FEFB4]/[0.1]"
      aria-hidden="true"
    />

    <div
      class="relative z-10 mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-screen-xl flex-col justify-center px-4 pb-20 pt-28 md:pb-24 md:pt-32 lg:min-h-[calc(100vh-5rem)]"
    >
      <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-6">
          <p
            class="mb-4 inline-flex rounded-full border border-[#0FEFB4]/30 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 shadow-soft backdrop-blur-sm dark:border-[#0FEFB4]/25 dark:bg-white/[0.06] dark:text-[#0FEFB4] dark:shadow-inner-highlight-dark md:text-sm"
          >
            Développeur full stack · Abidjan
          </p>
          <h1
            class="font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl"
          >
            Ismaël Aziz
            <span class="block text-zinc-500 dark:text-neutral-500">Diomande</span>
          </h1>
          <p
            class="mt-6 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-neutral-400 md:text-lg"
          >
            Conception d’applications web, e-commerce et expériences
            utilisateur. Le cœur de ce portfolio : les
            <strong class="font-semibold text-zinc-900 dark:text-white">projets livrés</strong>,
            du prototype Figma au déploiement.
          </p>

          <div
            class="mt-4 flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-neutral-500"
          >
            <div class="flex items-baseline gap-2">
              <span class="font-display text-3xl font-bold text-zinc-900 dark:text-white">7</span>
              <span>projets présentés</span>
            </div>
            <span class="hidden h-4 w-px bg-zinc-300 dark:bg-white/20 sm:block" aria-hidden="true" />
            <span>Next.js · Node.js · PostgreSQL · Tailwind CSS · Figma</span>
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#5efecd] via-[#0FEFB4] to-[#0bb88a] px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-soft-lg transition hover:brightness-105 hover:shadow-glow-mint focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0FEFB4] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:shadow-glow-mint dark:focus-visible:ring-offset-zinc-950"
            >
              Explorer les réalisations
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              :href="whatsappContactUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/90 bg-white/70 px-7 py-3.5 text-sm font-medium text-zinc-800 shadow-soft backdrop-blur-md transition hover:border-[#25D366]/50 hover:bg-white hover:shadow-soft-lg dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:shadow-inner-highlight-dark dark:hover:bg-white/[0.1]"
            >
              <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-lg text-[#25D366]" />
              WhatsApp
            </a>
          </div>

          <div class="mt-12 flex flex-wrap gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/90 bg-white/70 text-zinc-600 shadow-soft backdrop-blur-sm transition hover:border-[#0FEFB4]/50 hover:text-[#0c8f6b] hover:shadow-soft-lg dark:border-white/10 dark:bg-white/[0.05] dark:text-neutral-400 dark:shadow-inner-highlight-dark dark:hover:text-[#0FEFB4] dark:hover:shadow-glow-mint-sm"
              :aria-label="s.label"
            >
              <font-awesome-icon :icon="s.icon" class="text-lg" />
            </a>
          </div>
        </div>

        <div class="relative lg:col-span-6">
          <div class="relative mx-auto max-w-md lg:max-w-none lg:pl-8">
            <p
              class="mb-4 text-center text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-neutral-600 lg:text-left"
            >
              Aperçu des travaux
            </p>
            <div class="relative aspect-[4/5] max-h-[480px] w-full sm:mx-auto lg:mx-0">
              <div
                v-for="(card, i) in previewCards"
                :key="card.src"
                class="preview-card absolute overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white to-zinc-100/90 shadow-soft-xl ring-1 ring-zinc-200/60 dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 dark:shadow-glow-mint-sm dark:ring-white/10"
                :class="card.boxClass"
              >
                <img
                  :src="card.src"
                  :alt="card.alt"
                  class="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105 hover:opacity-100"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { WHATSAPP_E164, defaultWhatsAppIntro } from "@/constants/contact";

export default {
  data() {
    return {
      whatsappContactUrl: `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
        defaultWhatsAppIntro
      )}`,
      socials: [
        {
          label: "Facebook",
          href: "https://www.facebook.com/",
          icon: "fa-brands fa-facebook-f",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/isma%C3%ABl-aziz-diomande-9a4b8a169/",
          icon: "fa-brands fa-linkedin-in",
        },
        {
          label: "GitHub",
          href: "https://github.com/CodeKilla0",
          icon: "fa-brands fa-github",
        },
      ],
      previewCards: [
        {
          src: new URL("../assets/images/val-tech-apple.jpg", import.meta.url)
            .href,
          alt: "Aperçu VAL-TECH Apple Store",
          boxClass:
            "left-0 top-0 z-30 w-[58%] aspect-[4/5] rotate-[-6deg] lg:rotate-[-5deg]",
        },
        {
          src: new URL("../assets/images/gospel.jpg", import.meta.url).href,
          alt: "Aperçu iGospel Magazine",
          boxClass:
            "right-0 top-8 z-20 w-[55%] aspect-[3/4] rotate-[5deg] lg:top-10 lg:rotate-[4deg]",
        },
        {
          src: new URL("../assets/images/trello.jpg", import.meta.url).href,
          alt: "Aperçu clone Trello",
          boxClass:
            "bottom-0 left-1/4 z-10 w-[52%] aspect-square rotate-[-2deg] translate-y-4 lg:left-[20%]",
        },
      ],
    };
  },
};
</script>

<style scoped>
.preview-card {
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}
.preview-card:hover {
  z-index: 40 !important;
  transform: scale(1.02) rotate(0deg) !important;
  box-shadow:
    0 25px 50px -12px rgba(15, 23, 42, 0.15),
    0 0 40px -8px rgba(15, 239, 180, 0.2);
}

@media (prefers-color-scheme: dark) {
  .preview-card:hover {
    box-shadow:
      0 25px 50px -12px rgba(0, 0, 0, 0.5),
      0 0 48px -6px rgba(15, 239, 180, 0.35);
  }
}
</style>
