<template>
  <section
    id="contact"
    class="relative overflow-hidden border-t border-zinc-200/80 bg-zinc-100/90 py-16 text-zinc-900 dark:border-white/[0.07] dark:bg-zinc-950/55 dark:text-white md:py-24"
    aria-labelledby="contact-heading"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-35 dark:bg-mesh-dark dark:opacity-40"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0FEFB4]/40 to-transparent dark:via-[#0FEFB4]/55"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-screen-xl px-4">
      <header class="mx-auto max-w-2xl text-center">
        <p
          class="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#0FEFB4]"
        >
          Contact
        </p>
        <h2
          id="contact-heading"
          class="font-display text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Échangeons sur WhatsApp
        </h2>
        <p
          class="mt-4 text-base leading-relaxed text-zinc-600 dark:text-neutral-400 md:text-lg"
        >
          Le moyen le plus simple pour un brief rapide, un devis ou une question
          technique : un message direct, écrivez-moi sur WhatsApp.
        </p>
      </header>

      <div
        class="mt-12 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10"
      >
        <!-- Logo -->
        <div
          class="flex flex-col items-center justify-center lg:col-span-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            class="relative rounded-3xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 p-10 shadow-inner-highlight dark:border-white/[0.09] dark:from-zinc-950/80 dark:via-zinc-950 dark:to-emerald-950/25 dark:shadow-inner-highlight-dark md:p-12"
          >
            <div
              class="pointer-events-none absolute -inset-1 rounded-[1.65rem] bg-gradient-to-br from-[#0FEFB4]/25 via-transparent to-emerald-500/10 opacity-70 blur-xl dark:from-[#0FEFB4]/15"
              aria-hidden="true"
            />
            <img
              src="../assets/images/logo/logo-01-01.png"
              width="220"
              height="220"
              alt="Logo — contact"
              class="relative z-10 mx-auto max-h-[200px] w-auto object-contain drop-shadow-md md:max-h-[240px]"
              loading="lazy"
            />
            <p
              class="relative z-10 mt-6 text-center text-sm text-zinc-500 dark:text-neutral-500"
            >
              {{ WHATSAPP_DISPLAY }}
            </p>
          </div>
        </div>

        <!-- WhatsApp panel -->
        <div
          class="lg:col-span-7"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="80"
        >
          <div
            class="overflow-hidden rounded-3xl border border-zinc-200/90 bg-white/80 shadow-inner-highlight backdrop-blur-md dark:border-white/[0.09] dark:bg-zinc-900/60 dark:shadow-inner-highlight-dark"
          >
            <div
              class="flex items-center gap-3 border-b border-zinc-200/80 bg-gradient-to-r from-[#128C7E] to-[#075E54] px-5 py-4 dark:border-white/[0.08]"
            >
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white"
                aria-hidden="true"
              >
                <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-2xl" />
              </span>
              <div>
                <p class="text-sm font-semibold text-white">WhatsApp</p>
                <p class="text-xs text-white/80">Réponse sous 24 h en général</p>
              </div>
            </div>

            <div class="space-y-6 p-6 md:p-8">
              <div>
                <label
                  for="wa-prefill"
                  class="mb-2 block text-sm font-semibold text-zinc-800 dark:text-neutral-200"
                >
                  Votre message (pré-rempli dans WhatsApp)
                </label>
                <textarea
                  id="wa-prefill"
                  v-model="draftMessage"
                  rows="4"
                  class="w-full resize-y rounded-xl border border-zinc-200/90 bg-white/90 p-4 text-sm text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-white/10 dark:bg-zinc-950/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
                  :placeholder="defaultWhatsAppIntro"
                />
              </div>

              <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  :href="whatsappLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
                >
                  <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-lg" />
                  Ouvrir WhatsApp
                </a>
                <button
                  type="button"
                  class="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 hover:text-[#0c8f6b] dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:text-[#0FEFB4]"
                  @click="copyNumber"
                >
                  <font-awesome-icon icon="fa-solid fa-copy" class="text-sm" />
                  Copier le numéro
                </button>
                <a
                  :href="CV_PUBLIC_PATH"
                  download="CV_ismael_aziz_diomande.pdf"
                  class="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 shadow-soft transition hover:border-[#0FEFB4]/45 dark:border-white/15 dark:bg-white/[0.05] dark:text-white"
                >
                  <font-awesome-icon icon="fa-solid fa-file-pdf" class="text-sm" />
                  Télécharger le CV
                </a>
              </div>

              <p
                v-if="copyFeedback"
                class="text-center text-sm font-medium text-emerald-700 dark:text-[#0FEFB4]"
                role="status"
              >
                {{ copyFeedback }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  WHATSAPP_E164,
  WHATSAPP_DISPLAY,
  CV_PUBLIC_PATH,
  defaultWhatsAppIntro,
} from "@/constants/contact";

const draftMessage = ref(defaultWhatsAppIntro);
const copyFeedback = ref("");

const whatsappLink = computed(() => {
  const text = (draftMessage.value || "").trim() || defaultWhatsAppIntro;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
});

async function copyNumber() {
  copyFeedback.value = "";
  const raw = WHATSAPP_DISPLAY.replace(/\s/g, "");
  try {
    await navigator.clipboard.writeText(raw);
    copyFeedback.value = "Numéro copié.";
    window.setTimeout(() => {
      copyFeedback.value = "";
    }, 2200);
  } catch {
    copyFeedback.value = `Copiez : ${WHATSAPP_DISPLAY}`;
  }
}
</script>

<style scoped>
/* Section only — plus d’animation de bordure / rotation agressive */
</style>
