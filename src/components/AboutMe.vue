<template>
  <section
    class="relative overflow-hidden border-t border-zinc-200/80 bg-zinc-50/90 py-20 pb-32 text-zinc-900 backdrop-blur-sm dark:border-white/[0.08] dark:bg-zinc-950/40 dark:text-white md:py-28"
    id="about"
    aria-labelledby="about-heading"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-30 dark:bg-mesh-dark dark:opacity-35"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-screen-xl px-4">
      <div
        class="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16"
      >
        <div
          class="relative mx-auto w-full max-w-sm shrink-0 lg:mx-0 lg:max-w-md"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0FEFB4]/20 to-transparent opacity-50 blur-2xl"
            aria-hidden="true"
          />
          <div
            class="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white to-zinc-100 shadow-soft-xl ring-1 ring-white/60 dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-950 dark:shadow-glow-mint-sm dark:ring-white/10"
          >
            <img
              src="/aziz.png"
              alt="Portrait d’Ismaël Aziz Diomande"
              class="aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
              width="480"
              height="640"
            />
          </div>
        </div>

        <div class="min-w-0 flex-1">
          <p
            class="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0FEFB4]"
          >
            À propos
          </p>
          <h2
            id="about-heading"
            class="font-display text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Aziz Ismaël Diomande
          </h2>
          <p
            class="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg dark:text-neutral-400"
          >
            Développeur full stack junior et designer UX/UI, passionné par
            l’innovation : je cherche des projets pour approfondir le
            développement web et mobile.
          </p>
          <dl
            class="mt-8 grid gap-4 text-sm text-zinc-700 sm:grid-cols-2 dark:text-neutral-300"
          >
            <div>
              <dt class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">
                Localisation
              </dt>
              <dd class="mt-1">Côte d’Ivoire, Abidjan — Adjamé</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">
                GitHub
              </dt>
              <dd class="mt-1">
                <a
                  href="https://github.com/CodeKilla0"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#0FEFB4] hover:underline"
                  >CodeKilla0</a
                >
              </dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">
                E-mail
              </dt>
              <dd class="mt-1 break-all">aziz.diomande@epitech.eu</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">
                Téléphone
              </dt>
              <dd class="mt-1">+225 07 13 32 43 97</dd>
            </div>
          </dl>
          <div class="mt-10">
            <a
              href="/CV_aziz_diomande.pdf"
              download="CV_Aziz_Diomande.pdf"
              class="inline-flex items-center justify-center rounded-full border border-[#0FEFB4]/50 bg-[#0FEFB4]/10 px-6 py-3 text-sm font-semibold text-[#0FEFB4] transition hover:bg-[#0FEFB4] hover:text-neutral-950"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
