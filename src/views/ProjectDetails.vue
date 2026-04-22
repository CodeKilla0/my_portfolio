<template>
  <NavbarComponent />

  <main
    class="relative overflow-hidden bg-zinc-100/85 text-zinc-900 backdrop-blur-[2px] dark:bg-zinc-950/55 dark:text-white"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-30 dark:bg-mesh-dark dark:opacity-40"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0FEFB4]/40 to-transparent dark:via-[#0FEFB4]/55"
      aria-hidden="true"
    />

    <section class="relative mx-auto max-w-screen-xl px-4 pb-14 pt-28 md:pt-32">
      <div v-if="project" class="space-y-10">
        <header
          class="rounded-3xl border border-zinc-200/80 bg-white/55 p-6 shadow-inner-highlight backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-inner-highlight-dark md:p-10"
        >
          <div class="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  v-if="project.category"
                  class="inline-flex rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-50 dark:bg-white/10 dark:text-white"
                >
                  {{ project.category }}
                </span>
                <span
                  v-for="badge in heroBadges"
                  :key="badge"
                  class="inline-flex rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-300"
                >
                  {{ badge }}
                </span>
              </div>

              <h1 class="mt-5 font-display text-3xl font-black md:text-5xl">
                {{ project.title }}
              </h1>
              <p class="mt-2 text-base text-[#0FEFB4]/95 md:text-lg">
                {{ project.subtitle }}
              </p>
              <p class="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-neutral-300 md:text-base">
                {{ project.description }}
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200 dark:bg-white/[0.05] dark:text-neutral-300 dark:ring-white/10"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="flex shrink-0 flex-col gap-3">
              <router-link
                to="/"
                class="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 hover:text-[#0c8f6b] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:text-[#0FEFB4]"
              >
                Retour au portfolio
              </router-link>

              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#5efecd] via-[#0FEFB4] to-[#0bb88a] px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-soft-lg transition hover:brightness-105 hover:shadow-glow-mint-sm dark:shadow-glow-mint-sm"
              >
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-xs" />
                Ouvrir le site
              </a>

              <a
                v-if="project.figmaUrl"
                :href="project.figmaUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 hover:text-[#0c8f6b] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:text-[#0FEFB4]"
              >
                <font-awesome-icon icon="fa-brands fa-figma" />
                Figma
              </a>
            </div>
          </div>
        </header>

        <section v-if="architecture.length" class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.35em] text-zinc-500 dark:text-neutral-500">
            Architecture technique
          </h2>

          <div class="grid gap-5 md:grid-cols-3">
            <article
              v-for="layer in architecture"
              :key="layer.label"
              class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 p-6 shadow-inner-highlight backdrop-blur-sm dark:border-white/[0.09] dark:bg-gradient-to-br dark:from-zinc-950/70 dark:via-zinc-950 dark:to-emerald-950/15 dark:shadow-inner-highlight-dark"
            >
              <p class="text-xs font-extrabold tracking-[0.3em] text-zinc-500 dark:text-neutral-500">
                {{ layer.label }}
              </p>
              <p class="mt-2 font-display text-xl font-bold text-zinc-900 dark:text-white">
                {{ layer.main }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400">
                {{ layer.detail }}
              </p>
            </article>
          </div>
        </section>

        <section v-if="operations" class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.35em] text-zinc-500 dark:text-neutral-500">
            Opérations — transferts & retraits
          </h2>

          <div class="grid gap-5 md:grid-cols-2">
            <article
              class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 p-6 shadow-inner-highlight backdrop-blur-sm dark:border-white/[0.09] dark:bg-gradient-to-br dark:from-zinc-950/70 dark:via-zinc-950 dark:to-emerald-950/15 dark:shadow-inner-highlight-dark"
            >
              <h3 class="font-display text-xl font-bold">Transferts</h3>
              <ul class="mt-4 space-y-2 text-sm text-zinc-700 dark:text-neutral-300">
                <li v-for="item in operations.transfers" :key="item">→ {{ item }}</li>
              </ul>
            </article>

            <article
              class="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 p-6 shadow-inner-highlight backdrop-blur-sm dark:border-white/[0.09] dark:bg-gradient-to-br dark:from-zinc-950/70 dark:via-zinc-950 dark:to-emerald-950/15 dark:shadow-inner-highlight-dark"
            >
              <h3 class="font-display text-xl font-bold">Retraits</h3>
              <ul class="mt-4 space-y-2 text-sm text-zinc-700 dark:text-neutral-300">
                <li v-for="item in operations.withdrawals" :key="item">→ {{ item }}</li>
              </ul>
            </article>
          </div>
        </section>

        <section v-if="modules.length" class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.35em] text-zinc-500 dark:text-neutral-500">
            Modules fonctionnels
          </h2>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="mod in modules"
              :key="mod.name"
              class="rounded-2xl border border-zinc-200/90 bg-white/60 p-5 shadow-soft backdrop-blur-sm dark:border-white/[0.09] dark:bg-white/[0.03]"
              :style="{ borderLeft: `3px solid ${mod.color || '#0FEFB4'}` }"
            >
              <h3 class="font-display text-lg font-bold text-zinc-900 dark:text-white">
                {{ mod.name }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400">
                {{ mod.desc }}
              </p>
            </article>
          </div>
        </section>

        <section v-if="highlights.length" class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.35em] text-zinc-500 dark:text-neutral-500">
            Caractéristiques clés
          </h2>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article
              v-for="hl in highlights"
              :key="hl.label"
              class="rounded-2xl border border-zinc-200/90 bg-white/60 p-5 shadow-soft backdrop-blur-sm dark:border-white/[0.09] dark:bg-white/[0.03]"
            >
              <p class="text-xs font-extrabold tracking-[0.25em] text-zinc-500 dark:text-neutral-500">
                {{ hl.label }}
              </p>
              <p class="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">
                {{ hl.value }}
              </p>
            </article>
          </div>
        </section>

        <section v-if="promptButtons.length" class="space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.35em] text-zinc-500 dark:text-neutral-500">
            Prompts utiles
          </h2>

          <div class="flex flex-wrap gap-3">
            <button
              v-for="btn in promptButtons"
              :key="btn.label"
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 hover:text-[#0c8f6b] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:text-[#0FEFB4]"
              @click="copyPrompt(btn.prompt)"
            >
              {{ btn.label }}
            </button>
          </div>

          <p v-if="copied" class="text-sm text-emerald-700 dark:text-[#0FEFB4]">
            Prompt copié dans le presse‑papiers.
          </p>
        </section>
      </div>

      <div
        v-else
        class="rounded-3xl border border-zinc-200/80 bg-white/55 p-8 shadow-inner-highlight backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-inner-highlight-dark"
      >
        <h1 class="font-display text-2xl font-black md:text-4xl">Projet introuvable</h1>
        <p class="mt-3 text-sm text-zinc-600 dark:text-neutral-400">
          L’identifiant demandé ne correspond à aucun projet du portfolio.
        </p>
        <router-link
          to="/"
          class="mt-6 inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 hover:text-[#0c8f6b] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:text-[#0FEFB4]"
        >
          Retour à l’accueil
        </router-link>
      </div>
    </section>
  </main>

  <FooterPage />
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterPage from "@/components/FooterPage.vue";
import { getProjectById } from "@/data/projects";

const route = useRoute();
const copied = ref(false);
let copyTimeout = null;

const project = computed(() => getProjectById(String(route.params.id || "")));

const heroBadges = computed(() => project.value?.details?.heroBadges || []);
const architecture = computed(() => project.value?.details?.architecture || []);
const operations = computed(() => project.value?.details?.operations || null);
const modules = computed(() => project.value?.details?.modules || []);
const highlights = computed(() => project.value?.details?.highlights || []);
const promptButtons = computed(() => project.value?.details?.promptButtons || []);

async function copyPrompt(prompt) {
  copied.value = false;
  if (!prompt) return;

  try {
    await navigator.clipboard.writeText(prompt);
    copied.value = true;
    window.clearTimeout(copyTimeout);
    copyTimeout = window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch {
    // Fallback: nothing (clipboard may be blocked in some contexts)
  }
}
</script>

<style scoped>
.projects-featured-track::-webkit-scrollbar {
  display: none;
}
</style>

