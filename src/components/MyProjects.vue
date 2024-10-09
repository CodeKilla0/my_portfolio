<template>
  <div class="myProject bg-black pb-36 custom-cursor-area" id="projects">
    <div class="container mx-auto py-16 max-w-screen-xl custom-cursor">
      <!-- Projects Title -->
      <h2 class="text-5xl font-bold text-white mb-8 text-center police">
        Mes Projets
      </h2>
      <h1
        class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center mb-8 text-slate-300 text-opacity-20 title"
      >
        Projets
      </h1>

      <!-- Projects -->
      <!-- 1er -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="image lg:px-0 px-6"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src="../assets/images/Frame19.png" alt="photo01" />
        </div>

        <div
          class="container p-10 flex flex-col align-text-bottom"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            01
          </div>
          <div class="text-3xl font-bold mb-10">Projets wecode - Post It</div>
          <div class="content mb-8 text-justify">
            Post It est un projet innovant visant à numériser le traditionnel
            Post-it. Développé avec le framework Vue.js pour le front-end et
            intégré à une API dédiée, ce projet offre une solution moderne et
            interactive pour la gestion de notes adhésives virtuelles. Grâce à
            son interface intuitive et à ses fonctionnalités avancées, Post It
            permet aux utilisateurs de créer, organiser et partager des notes
            numériques de manière efficace et collaborative
          </div>
          <div class="text-3xl font-bold">
            <a
              class="hover:text-[#0FEFB4]"
              href="https://post-it-wecode-project.netlify.app/#/"
              target="_blank"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
          </div>
        </div>
      </div>

      <!-- 2ème -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="container p-10 flex flex-col align-text-bottom lg:order-first order-1"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            02
          </div>
          <div class="text-3xl font-bold mb-10">
            Projets wecode - Trello clone
          </div>
          <div class="content mb-8 text-justify">
            Trello Clone est une application de gestion de tâches créée avec
            Vue.js pour une interface dynamique et l'API WordPress pour une
            gestion robuste des données. Elle facilite l'organisation et la
            collaboration sur des projets grâce à une interface intuitive et des
            fonctionnalités efficaces.
          </div>
          <div class="flex text-3xl font-bold">
            <a href="#" target="" class="hover:text-[#0FEFB4]">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
          </div>
        </div>

        <div
          class="image lg:px-0 px-6"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/trello.jpg"
            alt="photo01"
            class="rounded-3xl"
          />
        </div>
      </div>

      <!-- 3e -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="image lg:px-0 px-6 rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/logo/ashion.jpg"
            alt="photo01"
            class="rounded-3xl"
          />
        </div>

        <div
          class="container p-10 flex flex-col align-text-bottom"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            03
          </div>
          <div class="text-3xl font-bold mb-10">Projets wecode - My Shop</div>
          <div class="content mb-8">
            My Shop est un projet e-commerce développé en utilisant Laravel pour
            une solution full stack complète. Ce projet intègre des
            fonctionnalités robustes pour la gestion des produits, des commandes
            et des utilisateurs, offrant ainsi une expérience de shopping en
            ligne fluide et sécurisée.
          </div>
          <div class="flex text-3xl font-bold">
            <a
              href="https://genius.lux-gabon.com/#"
              target="_blank"
              class="hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
          </div>
        </div>
      </div>

      <!-- 4e -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="container p-10 flex flex-col align-text-bottom lg:order-first order-1"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            04
          </div>
          <div class="text-3xl font-bold mb-10">Projets - Lux Gabon</div>
          <div class="content mb-8 text-justify">
            Le projet Lux Gabon consiste en la création d'un site web pour l'ONG
            Lux Gabon, avec "Lux" faisant référence au Luxembourg. Développé en
            HTML, CSS, JavaScript et PHP, ce projet vise à offrir une plateforme
            élégante et fonctionnelle pour soutenir les activités de
            l'organisation et améliorer sa présence en ligne.
          </div>
          <div class="flex text-3xl font-bold">
            <a href="" target="_blank" class="">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-2xl"> Liens </span>
            </a>
          </div>
        </div>

        <div
          class="image lg:px-0 px-6"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/logo/luxgabon.jpg"
            alt="photo01"
            class="rounded-3xl"
          />
        </div>
      </div>

      <!-- 5e -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="image lg:px-0 px-6 rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/gospel.jpg"
            alt="photo01"
            class="rounded-3xl"
          />
        </div>

        <div
          class="container p-10 flex flex-col align-text-bottom"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            05
          </div>
          <div class="text-3xl font-bold mb-10">Projets - IGospel Magazine</div>
          <div class="content mb-8">
            Pour le projet de conception de la maquette du site iGospel
            Magazine, l'objectif était de concevoir une plateforme web moderne
            et intuitive, dédiée à la communauté chrétienne, tout en mettant en
            valeur les fondements du magazine : la foi, l'inspiration et
            l'actualité chrétienne.
          </div>
          <div class="flex text-3xl font-bold">
            <a
              href="https://igospelmagazine.com/"
              target="_blank"
              class="pr-6 hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
            <a
              href="https://www.figma.com/proto/9o9QIrhdakOavJcNbR4BBh/I-Gospel-Magazine?t=mwnDloiZdgBiVo6B-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-4&starting-point-node-id=2%3A4"
              target="_blank"
              class="hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Maquette </span>
            </a>
          </div>
        </div>
      </div>

      <!-- 6e -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="container p-10 flex flex-col align-text-bottom lg:order-first order-1"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            06
          </div>
          <div class="text-3xl font-bold mb-10">
            Projets - Val-tech Apple Store
          </div>
          <div class="content mb-8 text-justify">
            Pour le projet de conception de la maquette du site VAL-TECH Apple
            Store, l'objectif était de créer une plateforme web moderne et
            conviviale, entièrement dédiée à la vente d'appareils téléphoniques,
            en mettant particulièrement l'accent sur les produits Apple.
          </div>
          <div class="text-3xl font-bold">
            <a
              href="https://val-techapplestore.com/"
              target="_blank"
              class="pr-6 hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
            <a
              href="https://www.figma.com/proto/NhFF84Oj86KKoMq2r7b3RT/Val-Tech-Apple-Store-2?node-id=64-38&node-type=canvas&t=GkuWgPpRfa7uFaY6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2"
              target="_blank"
              class="hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Maquette </span>
            </a>
          </div>
        </div>

        <div
          class="image lg:px-0 px-6"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/val-tech-apple.jpg"
            alt="photo01"
            class="rounded-3xl border-white border"
          />
        </div>
      </div>

      <!-- 7e -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl mx-auto text-white lg:mb-28 mb-16"
      >
        <div
          class="image lg:px-0 px-6 rounded-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img
            src="../assets/images/val-tech-plus.jpg"
            alt="photo01"
            class="rounded-3xl"
          />
        </div>

        <div
          class="container p-10 flex flex-col align-text-bottom"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="text-[#0FEFB4] number text-6xl font-bold mb-10 police">
            07
          </div>
          <div class="text-3xl font-bold mb-10">Projets - Val-tech Plus</div>
          <div class="content mb-8">
            Pour le projet de conception de la maquette du site VAL-TECH Plus, 
            l'objectif étant pareil que celui de apple store quand à lui est
            entièrement dédiée à la vente de touts types d'appareils téléphoniques. 
          </div>
          <div class="flex text-3xl font-bold">
            <a
              href="https://www.val-techplus.com/"
              target="_blank"
              class="pr-6 hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Liens </span>
            </a>
            <a
              href="https://www.figma.com/proto/vPa3NBpcVHP0vjCAGClGiK/Val-tech-Plus-2?node-id=2-2&node-type=canvas&t=ZUvRZOUh15bpcYaP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
              target="_blank"
              class="hover:text-[#0FEFB4]"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
              <span class="text-xl"> Maquette </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
<script>
export default {
  mounted() {
    document.addEventListener("mousemove", this.updateCursorPosition);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.updateCursorPosition);
  },
  methods: {
    updateCursorPosition(event) {
      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        cursor.style.left = `${event.pageX}px`;
        cursor.style.top = `${event.pageY}px`;
      }
    },
  },
};
</script>
