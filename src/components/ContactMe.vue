<template>
  <div class="contact relative overflow-hidden bg-zinc-100/95 dark:bg-zinc-950/50" id="contact">
    <div
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-30 dark:bg-mesh-dark dark:opacity-35"
      aria-hidden="true"
    />
    <div class="relative container mx-auto max-w-screen-xl bg-transparent py-12 text-zinc-900 dark:text-white">
      <!-- Contact Information -->
      <h2 class="police mb-8 text-center text-5xl font-bold">
        Contactez moi
      </h2>
      <h1
        class="title mb-8 text-center text-5xl font-black text-zinc-200/80 sm:text-7xl md:text-8xl lg:text-9xl dark:text-slate-300 dark:text-opacity-20"
      >
        Contact
      </h1>
    </div>

    <div class="relative bg-transparent pb-32">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <!-- Image Section -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            src="../assets/images/logo/logo-01-01.png"
            width="70%"
            alt="Contact Image"
            class="rounded-lg shadow-lg rotating-logo"
          />
        </div>
        <!-- Contact Form -->
        <div
          class="animated-border m-13 mt-8 w-full rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-white to-zinc-50/95 p-8 shadow-soft-xl shadow-inner-highlight backdrop-blur-sm md:mt-0 md:w-1/2 md:px-12 lg:px-8 dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-900/90 dark:via-zinc-950 dark:to-[#0a0a0f] dark:shadow-inner-highlight-dark dark:shadow-glow-mint-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <div class="pb-10">
            <h3 class="text-3xl font-bold text-zinc-900 dark:text-white">Écrivez-moi !</h3>
          </div>

          <form @submit.prevent="sendEmail">
            <div class="mb-3">
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Votre nom"
                class="w-full rounded-xl border border-zinc-200/90 bg-white/90 p-3 text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="number"
                v-model="form.numero"
                required
                placeholder="Votre numero"
                class="w-full rounded-xl border border-zinc-200/90 bg-white/90 p-3 text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="Votre email"
                class="w-full rounded-xl border border-zinc-200/90 bg-white/90 p-3 text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                placeholder="Objet"
                required
                class="w-full rounded-xl border border-zinc-200/90 bg-white/90 p-3 text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
              />
            </div>
            <div class="mb-3">
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Message"
                required
                class="w-full rounded-xl border border-zinc-200/90 bg-white/90 p-3 text-zinc-900 shadow-inner placeholder:text-zinc-400 transition focus:border-[#0FEFB4]/50 focus:outline-none focus:ring-2 focus:ring-[#0FEFB4]/30 dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-white dark:placeholder:text-zinc-500 dark:focus:ring-[#0FEFB4]/25"
              ></textarea>
            </div>
            <div class="mt-3">
              <button
                class="relative h-[45px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-900 font-black text-white shadow-soft-lg transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-black hover:before:w-2/4 hover:before:bg-emerald-400 hover:after:w-2/4 hover:after:bg-emerald-400 dark:from-black dark:to-zinc-950 dark:shadow-glow-mint-sm"
                type="submit"
              >
                <span class="relative z-10">Envoyer</span>
              </button>
            </div>
            <div v-if="errorMessage">
              <p class="text-red-500 text-sm">{{ errorMessage }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Popup -->
    <div
      v-if="showSuccessPopup"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        class="popup-container bg-green-500 text-white p-6 rounded-lg shadow-lg relative"
      >
        <svg
          class="w-16 h-16 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p class="text-xl font-bold">{{ successMessage }}</p>
        <button
          @click="hideSuccessPopup"
          class="absolute top-2 right-2 text-white"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import emailjs from "emailjs-com";

export default {
  name: "ContactMe",
  components: { FontAwesomeIcon },
  data() {
    return {
      form: {
        name: "",
        numero: "",
        email: "",
        subject: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
      showSuccessPopup: false,
    };
  },

  methods: {
    sendEmail() {
      if (
        !this.form.name ||
        !this.form.email ||
        !this.form.subject ||
        !this.form.message
      ) {
        this.errorMessage = "Tous les champs sont obligatoires.";
        return;
      }

      // regex match for email
      const emailRegex = /^[a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(this.form.email)) {
        this.errorMessage = "L'email est invalide.";
        return;
      }

      const templateParams = {
        from_name: this.form.name,
        from_num: this.form.numero,
        from_email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
      };

      emailjs
        .send(
          "service_y6laftf",
          "template_hj19kap",
          templateParams,
          "n2ZQdrC6mZ66G78E2"
        )
        .then((response) => {
          this.successMessage = "Votre message a été envoyé avec succès !";
          this.errorMessage = "";
          this.showSuccessPopup = true;
          this.resetForm();

          setTimeout(() => {
            this.showSuccessPopup = false;
          }, 5000);
        })
        .catch((error) => {
          this.errorMessage = "Une erreur est survenue. Veuillez réessayer.";
          this.successMessage = "";
          setTimeout(() => {
            this.showSuccessPopup = false;
          }, 5000);
        });
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
    },
    hideSuccessPopup() {
      this.showSuccessPopup = false;
    },
  },
};
</script>

<style>
.popup-container {
  animation: fadeInOut 5s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}

.rotating-logo {
  animation: spin 15s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animated-border {
  border: 5px solid blue; /* Bordure initiale */
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  animation: borderAnimation 2s infinite;
}

@keyframes borderAnimation {
  0% {
    border-color: rgb(230, 250, 241);
    border-width: 2px;
  }
  25% {
    border-color: rgb(123, 241, 186);
    border-width: 2px;
  }
  50% {
    border-color: rgb(82, 195, 104);
    border-width: 2px;
  }
  75% {
    border-color: rgb(123, 241, 186);
    border-width: 2px;
  }
  100% {
    border-color: rgb(230, 250, 241);
    border-width: 2px;
  }
}

.div-lumineuse {
  width: 300px;
  height: 200px;
  padding: 20px;
  position: relative;
  background-color: #fff; /* Couleur de fond */
  border-radius: 10px; /* Bords arrondis */
  overflow: hidden; /* Assure que le dégradé ne déborde pas */
  box-shadow: inset 0 0 0 4px transparent; /* Crée une bordure transparente à l'intérieur */
  animation: color-spin 3s linear infinite; /* Animation de la couleur */
}

@keyframes color-spin {
  0% {
    border-image: linear-gradient(
      0deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    border-image-slice: 1;
  }
  100% {
    border-image: linear-gradient(
      360deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    border-image-slice: 1;
  }
}
</style>
