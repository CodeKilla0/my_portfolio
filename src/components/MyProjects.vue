<template>
  <section
    ref="sectionEl"
    id="projects"
    class="projects-showcase relative overflow-hidden bg-zinc-100/85 text-zinc-900 backdrop-blur-[2px] dark:bg-zinc-950/50 dark:text-white"
    aria-labelledby="projects-heading"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-40 dark:bg-mesh-dark dark:opacity-50"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0FEFB4]/40 to-transparent dark:via-[#0FEFB4]/55"
      aria-hidden="true"
    />

    <header
      class="projects-hero-header relative border-b border-zinc-200/80 bg-white/40 px-4 py-16 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.02] md:py-24"
    >
      <div class="mx-auto max-w-screen-xl">
        <div class="max-w-3xl">
          <p
            class="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#0FEFB4]"
          >
            Travaux
          </p>
          <h2
            id="projects-heading"
            class="font-display text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            Projets
            <span class="text-zinc-400 dark:text-neutral-600">réalisés</span>
          </h2>
          <p
            class="mt-6 text-base leading-relaxed text-zinc-600 md:text-lg md:leading-relaxed dark:text-neutral-400"
          >
            Applications, boutiques en ligne et sites institutionnels — chaque
            bloc résume l’objectif, les technologies et les liens vers la démo
            ou la maquette.
          </p>
        </div>
      </div>
    </header>

    <article
      v-if="featuredProject"
      class="projects-featured relative"
    >
      <div class="relative min-h-[72vh] w-full overflow-hidden md:min-h-[78vh]">
        <img
          :src="featuredProject.image"
          :alt="featuredProject.imageAlt"
          class="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-white via-white/92 to-white/35 md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent dark:from-[#0a0a0f] dark:via-[#08080a]/92 dark:to-[#08080a]/35 dark:md:from-[#08080a] dark:md:via-[#08080a]/78 dark:md:to-transparent"
          aria-hidden="true"
        />
        <div
          class="relative z-10 mx-auto flex min-h-[72vh] max-w-screen-xl flex-col justify-end px-4 pb-14 pt-32 md:min-h-[78vh] md:max-w-[42rem] md:justify-center md:pb-0 md:pt-24 lg:max-w-xl"
        >
          <span
            class="mb-3 inline-flex w-fit rounded-full border border-[#0FEFB4]/35 bg-gradient-to-r from-[#0FEFB4]/15 to-white/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 shadow-soft backdrop-blur-sm dark:from-[#0FEFB4]/20 dark:to-transparent dark:text-[#0FEFB4] dark:shadow-inner-highlight-dark"
          >
            Projet phare
          </span>
          <h3
            class="font-display text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white"
          >
            {{ featuredProject.title }}
          </h3>
          <p class="mt-2 text-lg text-[#0FEFB4]/90">
            {{ featuredProject.subtitle }}
          </p>
          <ul
            class="mt-5 flex flex-wrap gap-2"
            :aria-label="`Stack ${featuredProject.title}`"
          >
            <li
              v-for="tag in featuredProject.tags"
              :key="tag"
              class="rounded-md bg-zinc-200/80 px-2.5 py-1 text-xs font-medium text-zinc-800 ring-1 ring-zinc-300 backdrop-blur-sm dark:bg-black/40 dark:text-neutral-300 dark:ring-white/10"
            >
              {{ tag }}
            </li>
          </ul>
          <p
            class="mt-6 text-pretty text-sm leading-relaxed text-zinc-700 md:text-base dark:text-neutral-300"
          >
            {{ featuredProject.description }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              v-if="featuredProject.liveUrl"
              :href="featuredProject.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#5efecd] via-[#0FEFB4] to-[#0bb88a] px-6 py-3 text-sm font-semibold text-neutral-950 shadow-soft-lg shadow-glow-mint-sm transition hover:brightness-105 hover:shadow-glow-mint dark:shadow-glow-mint"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
                class="text-xs"
              />
              Ouvrir le site
            </a>
            <span
              v-else
              class="inline-flex items-center gap-2 rounded-full border border-dashed border-zinc-300 px-6 py-3 text-sm text-zinc-500 dark:border-white/25 dark:text-neutral-500"
            >
              Démo non publiée
            </span>
            <a
              v-if="featuredProject.figmaUrl"
              :href="featuredProject.figmaUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-[#0FEFB4]/50 hover:text-[#0c8f6b] dark:border-white/20 dark:text-white dark:hover:text-[#0FEFB4]"
            >
              <font-awesome-icon icon="fa-brands fa-figma" />
              Figma
            </a>
          </div>
        </div>
      </div>
    </article>

    <div
      class="mx-auto max-w-screen-xl px-4 py-16 md:py-24"
    >
      <div
        class="mb-10 flex flex-col gap-2 border-b border-zinc-200/80 pb-10 dark:border-white/[0.08] md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-neutral-500">
            Suite du portfolio
          </p>
          <h3 class="font-display mt-1 text-2xl font-bold text-zinc-900 md:text-3xl dark:text-white">
            Autres réalisations
          </h3>
        </div>
        <p class="max-w-md text-sm text-zinc-600 dark:text-neutral-500">
          {{ gridProjects.length }} projets — cliquez sur une carte pour ouvrir
          la démo ou la maquette lorsque le lien est disponible.
        </p>
      </div>

      <ul
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        role="list"
      >
        <li
          v-for="(project, index) in gridProjects"
          :key="project.id"
          class="projects-bento-card group"
        >
          <article
            class="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 shadow-soft-lg shadow-inner-highlight transition duration-300 hover:-translate-y-1 hover:border-[#0FEFB4]/45 hover:shadow-soft-xl dark:border-white/[0.09] dark:bg-gradient-to-br dark:from-zinc-900/95 dark:via-zinc-950 dark:to-[#0a0a0d] dark:shadow-inner-highlight-dark dark:hover:border-[#0FEFB4]/40 dark:hover:shadow-glow-mint-sm"
          >
            <div
              class="project-media relative aspect-[16/11] overflow-hidden bg-neutral-900"
            >
              <img
                :src="project.image"
                :alt="project.imageAlt"
                class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
                decoding="async"
                width="800"
                height="550"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-70 dark:from-[#101012] dark:opacity-60"
                aria-hidden="true"
              />
              <span
                class="absolute left-4 top-4 font-mono text-xs font-bold text-zinc-900 drop-shadow-sm dark:text-white/90"
              >
                {{ String(index + 2).padStart(2, "0") }}
              </span>
            </div>
            <div class="project-body flex flex-1 flex-col p-5 md:p-6">
              <span
                v-if="project.category"
                class="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#0FEFB4]/80"
              >
                {{ project.category }}
              </span>
              <h4
                class="font-display text-lg font-bold leading-snug text-zinc-900 md:text-xl dark:text-white"
              >
                {{ project.title }}
              </h4>
              <p class="mt-1 text-sm text-zinc-500 dark:text-neutral-500">
                {{ project.subtitle }}
              </p>
              <ul class="mt-4 flex flex-wrap gap-1.5">
                <li
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-white/[0.06] dark:text-neutral-400"
                >
                  {{ tag }}
                </li>
              </ul>
              <p
                class="mt-4 flex-1 text-pretty text-sm leading-relaxed text-zinc-600 line-clamp-4 md:line-clamp-5 dark:text-neutral-400"
              >
                {{ project.description }}
              </p>
              <div
                class="mt-6 flex flex-wrap gap-2 border-t border-zinc-200 pt-5 dark:border-white/[0.06]"
              >
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-[#5efecd] to-[#0bb88a] px-3 py-2.5 text-xs font-semibold text-neutral-950 shadow-soft transition hover:brightness-105 hover:shadow-glow-mint-sm sm:flex-none sm:px-4 dark:shadow-glow-mint-sm"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-up-right-from-square"
                    class="text-[10px]"
                  />
                  Site
                </a>
                <span
                  v-else
                  class="inline-flex flex-1 items-center justify-center rounded-lg border border-dashed border-zinc-300 px-3 py-2.5 text-xs text-zinc-500 sm:flex-none dark:border-white/15 dark:text-neutral-600"
                >
                  Pas de démo
                </span>
                <a
                  v-if="project.figmaUrl"
                  :href="project.figmaUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-2.5 text-xs font-medium text-zinc-800 transition hover:border-[#0FEFB4]/40 hover:text-[#0c8f6b] sm:px-4 dark:border-white/15 dark:text-white dark:hover:text-[#0FEFB4]"
                >
                  <font-awesome-icon
                    icon="fa-brands fa-figma"
                    class="text-sm"
                  />
                  Figma
                </a>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      projects: [
        {
          id: "post-it",
          category: "Application web",
          title: "Post It — WeCode",
          subtitle: "Notes collaboratives numériques",
          tags: ["Vue.js", "API REST", "UI"],
          description:
            "Post It numérise le concept de post-it : création, organisation et partage de notes dans une interface claire et réactive, avec un front Vue.js connecté à une API dédiée.",
          image: new URL("../assets/images/Frame19.png", import.meta.url).href,
          imageAlt: "Aperçu du projet Post It",
          liveUrl: "https://post-it-wecode-project.netlify.app/#/",
          figmaUrl: null,
        },
        {
          id: "trello-clone",
          category: "Application web",
          title: "Clone Trello — WeCode",
          subtitle: "Tableaux et cartes de tâches",
          tags: ["Vue.js", "WordPress API", "Kanban"],
          description:
            "Application de gestion de tâches façon kanban : colonnes, cartes et collaboration, avec Vue.js côté interface et WordPress comme backend pour les données.",
          image: new URL("../assets/images/trello.jpg", import.meta.url).href,
          imageAlt: "Aperçu du clone Trello",
          liveUrl: null,
          figmaUrl: null,
        },
        {
          id: "my-shop",
          category: "E-commerce",
          title: "My Shop — WeCode",
          subtitle: "Boutique en ligne full stack",
          tags: ["Laravel", "PHP", "E-commerce"],
          description:
            "Plateforme e-commerce avec gestion des produits, commandes et comptes utilisateurs, pensée pour un parcours d’achat fluide et sécurisé.",
          image: new URL(
            "../assets/images/logo/ashion.jpg",
            import.meta.url
          ).href,
          imageAlt: "Aperçu du projet My Shop",
          liveUrl: "https://genius.lux-gabon.com/#",
          figmaUrl: null,
        },
        {
          id: "lux-gabon",
          category: "Site institutionnel",
          title: "Lux Gabon",
          subtitle: "Site web pour une ONG",
          tags: ["HTML", "CSS", "JavaScript", "PHP"],
          description:
            "Site pour l’ONG Lux Gabon (lien Luxembourg) : présentation des actions, pages structurées et mise en ligne soignée pour renforcer la visibilité de l’organisation.",
          image: new URL(
            "../assets/images/logo/luxgabon.jpg",
            import.meta.url
          ).href,
          imageAlt: "Aperçu du site Lux Gabon",
          liveUrl: null,
          figmaUrl: null,
        },
        {
          id: "igospel",
          category: "Média & design",
          title: "iGospel Magazine",
          subtitle: "Maquette et site",
          tags: ["Figma", "Communauté", "Média"],
          description:
            "Conception d’une plateforme moderne pour la communauté chrétienne : mise en avant du magazine (foi, inspiration, actualité) avec une navigation intuitive.",
          image: new URL("../assets/images/gospel.jpg", import.meta.url).href,
          imageAlt: "Aperçu iGospel Magazine",
          liveUrl: "https://igospelmagazine.com/",
          figmaUrl:
            "https://www.figma.com/proto/9o9QIrhdakOavJcNbR4BBh/I-Gospel-Magazine?t=mwnDloiZdgBiVo6B-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-4&starting-point-node-id=2%3A4",
        },
        {
          id: "val-tech-apple",
          category: "E-commerce & design",
          title: "VAL-TECH Apple Store",
          subtitle: "Vente d’appareils Apple",
          tags: ["Figma", "E-commerce", "Apple"],
          description:
            "Maquette et site orientés catalogue Apple : mise en page épurée, hiérarchie visuelle forte et parcours d’achat lisible sur mobile comme sur desktop.",
          image: new URL(
            "../assets/images/val-tech-apple.jpg",
            import.meta.url
          ).href,
          imageAlt: "Aperçu VAL-TECH Apple Store",
          liveUrl: "https://val-techapplestore.com/",
          figmaUrl:
            "https://www.figma.com/proto/NhFF84Oj86KKoMq2r7b3RT/Val-Tech-Apple-Store-2?node-id=64-38&node-type=canvas&t=GkuWgPpRfa7uFaY6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2",
        },
        {
          id: "val-tech-plus",
          category: "E-commerce & design",
          title: "VAL-TECH Plus",
          subtitle: "Multi-marques téléphonie",
          tags: ["Figma", "E-commerce", "Responsive"],
          description:
            "Même exigence de clarté que pour Apple Store, étendue à un catalogue multi-marques : focus sur la lisibilité des fiches produits et la conversion.",
          image: new URL(
            "../assets/images/val-tech-plus.jpg",
            import.meta.url
          ).href,
          imageAlt: "Aperçu VAL-TECH Plus",
          liveUrl: "https://www.val-techplus.com/",
          figmaUrl:
            "https://www.figma.com/proto/vPa3NBpcVHP0vjCAGClGiK/Val-tech-Plus-2?node-id=2-2&node-type=canvas&t=ZUvRZOUh15bpcYaP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
        },
      ],
    };
  },
  computed: {
    featuredProject() {
      return this.projects[0] || null;
    },
    gridProjects() {
      return this.projects.slice(1);
    },
  },
  methods: {
    runEntranceAnimations() {
      this.$nextTick(() => {
        const root = this.$refs.sectionEl;
        if (!root) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        const header = root.querySelector(".projects-hero-header");
        const headerBits = header?.querySelectorAll(".max-w-3xl > *");
        if (headerBits?.length) {
          gsap.from(headerBits, {
            scrollTrigger: {
              trigger: header,
              start: "top 88%",
              once: true,
            },
            y: 36,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          });
        }

        const featured = root.querySelector(".projects-featured");
        if (featured) {
          gsap.from(featured, {
            scrollTrigger: {
              trigger: featured,
              start: "top 90%",
              once: true,
            },
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power2.out",
          });
        }

        root.querySelectorAll(".projects-bento-card").forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
            opacity: 0,
            y: 32,
            duration: 0.65,
            delay: i * 0.05,
            ease: "power2.out",
          });
        });
      });
    },
    killSectionScrollTriggers() {
      const root = this.$refs.sectionEl;
      if (!root) return;
      ScrollTrigger.getAll().forEach((st) => {
        const tr = st.trigger;
        if (tr && (tr === root || root.contains(tr))) st.kill();
      });
    },
  },
  mounted() {
    this.runEntranceAnimations();
  },
  beforeUnmount() {
    this.killSectionScrollTriggers();
  },
};
</script>
